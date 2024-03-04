import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datestring',
  standalone: true
})
export class DatestringPipe implements PipeTransform {
  transform(date: any): Date {
    // Add timestamp to the note

    console.log(date,'date')
    date = new Date(date);
   
    return  date.toISOString();
  }
}
