import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchfilter:any): any {
    return value.filter((e:any)=> {
      return e.fullName.toLowerCase().indexOf(searchfilter) > -1;
    })
  }

}
