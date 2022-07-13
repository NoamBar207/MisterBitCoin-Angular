import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArr'
})
export class FilterArrPipe implements PipeTransform {

  transform<T>(items: T[], itemProp: string, term: string): T[] {
    const regExp = new RegExp(term, 'i')
    return items.filter(item => regExp.test((item as any)[itemProp]))
  }
}
