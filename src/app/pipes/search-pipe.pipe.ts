import { Pipe, PipeTransform } from '@angular/core';
import { IPhoneNumber } from '../interfaces';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipePipe implements PipeTransform {

  transform(value: IPhoneNumber[], request: string): IPhoneNumber[] {
    if(!value) return [];
    if(isNaN(+request)){
      return value.filter(item => (item.name.toLowerCase() + item.surname.toLowerCase()).includes(request.toLowerCase()))
    }
    return value.filter(item => item.number.toLowerCase().includes(request.toLowerCase()))
  }

}
