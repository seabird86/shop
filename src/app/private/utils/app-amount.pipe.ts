import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appAmount' })
export class AppAmountPipe implements PipeTransform {
    transform(value: number, currency: string): string {
        const exp = parseFloat(currency);
        if (currency === 'USD') {
            console.log(Number(value).toFixed(2));
            return Number(value).toFixed(2);
        }
        return Number(value).toFixed(0);
    }
}
