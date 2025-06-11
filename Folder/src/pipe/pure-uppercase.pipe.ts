import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"myCustomPipe"
})
export class PurePipe implements PipeTransform{

    transform(value: any, ...args: any[]): string{
       console.log(value);
       return value.toUpperCase();
    }

}