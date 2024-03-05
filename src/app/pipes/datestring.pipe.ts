import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datestring',
  standalone: true
})
export class DatestringPipe implements PipeTransform {
  transform(date: any): Date {
    date = new Date(date);
   
    return  date.toISOString();
  }
}
