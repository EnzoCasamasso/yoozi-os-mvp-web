export class DateUtil {
  static getFormattedDate(date: Date): string {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }
}
