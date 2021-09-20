import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'padLeft'})
export class PadLeftPipe implements PipeTransform {
  transform(value:any, padlen:any, padchar:any) {
    return value.toString().padStart(padlen, padchar);
  }
}
