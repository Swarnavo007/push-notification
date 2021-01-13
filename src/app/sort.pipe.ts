import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): any {
    return value.sort((a,b)=>{
      let x=a.task.toLowerCase();
      let y=b.task.toLowerCase();
      if(x>y){
        return 1;
      }
      else{
        return -1;
      }
    })
  }

}
