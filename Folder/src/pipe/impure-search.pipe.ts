import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"filter",
    pure: false
})
export class ImpureFilter implements PipeTransform{
    transform(items: string[], searchItem: string) : string[]{
        console.log("From search "+searchItem);
        if(!items || !searchItem) return items;
        return items.filter(item=> item.toLowerCase().includes(searchItem.toLowerCase()));
    }
    
}