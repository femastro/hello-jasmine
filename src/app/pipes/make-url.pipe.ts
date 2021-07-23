import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeUrl'
})
export class MakeUrlPipe implements PipeTransform {

  transform(value: string): string {
    return 'https://github.com/' + value;
  }

}
