import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class NotificationService {

    constructor(
        private service: MessageService
    ) { }

    clear() {
        this.service.clear();
    }

    info(msg:string) {
        this.service.add({severity:'info', detail:msg});
    }
    error(msg:string) {
        this.service.add({severity:'error', detail:msg});
    }

    success(msg:string) {
        this.service.add({severity:'success', detail:msg});
    }

    warn(msg:string) {
        this.service.add({severity:'warn', detail:msg});
    }
}
