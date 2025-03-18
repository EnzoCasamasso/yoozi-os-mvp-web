import { inject, Injectable, signal } from '@angular/core';
import { iUser } from '../interfaces/user.interface';
import { InjectSupabase } from '@shared/functions/inject-supabase.function';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase = InjectSupabase();
  private router = inject(Router);

  currentUser = signal<iUser | null>(null);
  private isLoggedInSignal = signal<boolean>(false);

  get isLoggedIn(): boolean {
    return this.isLoggedInSignal();
  }

  async load() {
    const { data } = await this.supabase.auth.getSession();
    if (!data.session) {
      // this.purgeAndRedirect();
      return;
    }
    this.currentUser.set(data.session.user as unknown as iUser);
    this.isLoggedInSignal.set(true);
  }

  async purgeAndRedirect() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/auth']);
  }

  async updateUser(data: Partial<iUser>, id?: string) {
    const { data: user, error } = await this.supabase
      .from('users')
      .update(data)
      .match({ id: id || this.currentUser()?.id })
      .select('*')
      .maybeSingle();

    if (error) throw error;
    this.currentUser.set(user as iUser);
    console.log(user);
  }
}
