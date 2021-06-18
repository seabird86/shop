//https://github.com/brix/crypto-js
import * as CryptoJS from 'crypto-js';
export class AppCodec {
    static md5(value:string) {
        return CryptoJS.MD5(value);
    }

    static encodePass(value:string) {
        return '' + this.md5(value + 'SW5pdCBLcmlzIEZyYW1ld29yayBhdCAxMi8yMDE3');
    }

    public static decodeBase64(str: string): string {
        return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

    }

    static encodeReader(deviceId: Number, readerId: Number) {
        return AppCodec.convertToHex(AppCodec.encodePass(deviceId + '---' + readerId));
    }

    static convertToHex(str:string) {
        var hex = '';
        for (var i = 0; i < str.length; i++) {
            hex += '' + str.charCodeAt(i).toString(16);
        }
        return hex;
    }


}
