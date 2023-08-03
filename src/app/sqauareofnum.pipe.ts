import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqauareofnum'
})
export class SqauareofnumPipe implements PipeTransform {

  transform(value:any): any{
    return Math.sqrt(value);
  }

}
