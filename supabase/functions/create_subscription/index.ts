// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14?target=denonext';
import { createClient } from 'https://esm.sh/v135/@supabase/supabase-js@2.46.2/dist/module/index.js';

import { corsHeaders } from '../_shared/cors';

interface iSubscriptionRequest {
  company_id: string;
  price_id: string;
  name: string;
  email: string;
  phone: string;
}

interface iCustomer {
  company_id: string;
  stripe_customer_id: string;
}

const SUPABASE_URL = 'https://mqenziinjbxczuxrougm.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZW56aWluamJ4Y3p1eHJvdWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNjAwOTEsImV4cCI6MjA1NTgzNjA5MX0.GT6ANwgl35NdKwI4D8Khd2VmdkGSHuLRr-BGI3NF3BM';

const STRIPE_API_KEY = Deno.env.get('STRIPE_API_KEY') as string;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
console.log('Supabase client created');

const stripeClient = new Stripe(STRIPE_API_KEY);
console.log('Stripe client created');

async function getCustomerFromCompanyId(company_id: string) {
  const { data, error } = await supabase.from('customers').select('*').eq('company_id', company_id).maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

async function createOrRetrieveCustomer(stripeClient: any, company_id: string, email: string, name: string, phone: string): Promise<iCustomer> {
  const customer = await getCustomerFromCompanyId(company_id);
  if (customer) return customer;
  if (!company_id) throw new Error('O ID da empresa é obrigatório');
  if (!email) throw new Error('O e-mail é obrigatório');

  const stripeCustomer = await stripeClient.customers.create({
    email,
    name,
    phone,
  });

  const customerData = {
    company_id,
    stripe_customer_id: stripeCustomer.id,
  };

  const { data, error } = await supabase.from('customers').insert(customerData).select().single();
  if (error) throw new Error(error.message);

  return data as iCustomer;
}

serve(async req => {
  const headers = {
    ...corsHeaders(req.headers.get('Origin') || 'null'),
    'Content-Type': 'application/json',
  };

  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) throw new Error('Usuário não autenticado');

    const token = authHeader.replace('Bearer', '');
    const { data } = await supabase.auth.getUser(token);
    if (!data) throw new Error('Erro ao obter usuário. Token inválido');

    const { company_id, price_id, name, email, phone }: iSubscriptionRequest = await req.json();
    if (!company_id) throw new Error('È necessário informar o ID da empresa');
    if (!price_id) throw new Error('È necessário informar o ID do preço');

    const customer = await createOrRetrieveCustomer(stripeClient, company_id, email, name, phone);
    if (!customer) throw new Error('Erro ao criar cliente');

    const customerSubscriptions = await stripeClient.subscriptions.list({
      customer: customer.stripe_customer_id,
    });
    const activeSubscription = customerSubscriptions.data.filter((subscription: { status: string }) => subscription.status === 'active');
    if (activeSubscription.length > 0) throw new Error('Cliente já possui uma ou mais assinaturas');

    const subscription = await stripeClient.subscriptions.create({
      customer: customer.stripe_customer_id,
      items: [{ price: price_id }],
      trial_period_days: 14,
    });

    return new Response(JSON.stringify(subscription), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Erro ao criar assinatura' }), { headers, status: 400 });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create_subscription' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
