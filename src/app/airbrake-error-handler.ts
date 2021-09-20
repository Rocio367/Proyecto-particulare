

import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake:Notifier;

  constructor() {
    this.airbrake = new Notifier({
      projectId:313856,
      projectKey:'56a5cc1a8f668173bd29ed6c131c1ba6',
      environment:'production'
    });
  }

  handleError(error:any):void {
      console.log(error);
    this.airbrake.notify(error);
  }
}