import { Pipe, PipeTransform } from '@angular/core';
import { IPhoneNumber, keys } from './../interfaces';

@Pipe({
  name: 'sortPipe',
  pure: false
})
export class SortPipePipe implements PipeTransform {

  transform(value: IPhoneNumber[], type: keys | '', direction: boolean): IPhoneNumber[] {
    if (!value) return [];
    if (type === '') return value;
    return value.sort((a, b) => {
      if (direction) {
        return a[`${type}`].toLowerCase() > b[`${type}`].toLowerCase() ? 1 : a[`${type}`].toLowerCase() < b[`${type}`].toLowerCase() ? -1 : 0;
      } else {
        return a[`${type}`].toLowerCase() < b[`${type}`].toLowerCase() ? 1 : a[`${type}`].toLowerCase() > b[`${type}`].toLowerCase() ? -1 : 0;
      }
    })
  }
}