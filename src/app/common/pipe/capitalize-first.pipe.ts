import { Pipe, PipeTransform } from '@angular/core';
@Pipe(
    {
        name: 'capitalizeFirst'
    }
)
export class CapitalizeFirstPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (value === null) {
            return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}