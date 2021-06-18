import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoadingService {
  private loaderSubject = new Subject<boolean>();
  requestTotal = 0;
  constructor(
  ) { }

  request() {
    ++this.requestTotal;
    if (this.isLoading()) {
      this.loaderSubject.next(this.isLoading());
    }
  }

  response() {
    --this.requestTotal;
    if (!this.isLoading()) {
      this.loaderSubject.next(this.isLoading());
    }
  }

  isLoading(): boolean {
    return this.requestTotal !== 0;
  }



  getLoaderState() {
    return this.loaderSubject.asObservable();
  }
}
