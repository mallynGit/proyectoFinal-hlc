import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe',
})
export class DatepipePipe implements PipeTransform {
  transform(note: any): Date {
    // Add timestamp to the note
    note.date = new Date(note.date);
    return note;
  }
}
