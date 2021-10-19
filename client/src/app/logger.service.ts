import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private isLoggerActive: boolean;

  constructor() {
    this.isLoggerActive = environment.loggerActivated;
   }

  log(data: any): void {
    if (this.isLoggerActive) {
      console.log(data);
    }
  }
}
