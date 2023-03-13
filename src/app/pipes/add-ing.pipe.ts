import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addIng'
})
export class AddIngPipe implements PipeTransform {

  transform(value: string): string {
    return "Ing. "+value;
  }

}
