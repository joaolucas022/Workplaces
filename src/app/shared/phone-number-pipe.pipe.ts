import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(num: number): string {
    let stringedNum = num.toString();
    let slicedStr =
      stringedNum.slice(0, 3) +
      ' ' +
      stringedNum.slice(3, 6) +
      ' ' +
      stringedNum.slice(6, 9);
    return slicedStr;
  }
}
