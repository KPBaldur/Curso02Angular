import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: string): string {
    let newString = value.replace(/a/g,'4');
    newString = newString.replace(/e/g,'3');
    newString = newString.replace(/i/g,'1');
    newString = newString.replace(/o/g,'0');
    newString = newString.replace(/u/g,'ü');
    return newString;
  }


}
