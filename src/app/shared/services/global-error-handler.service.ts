import { ErrorHandler, Inject, forwardRef, NgZone } from '@angular/core';
import { AlertService } from '../alert';

export class GlobalErrorHandlerService extends ErrorHandler {
  constructor(
    @Inject(forwardRef(() => NgZone))
    private zone: NgZone,
    private alertService: AlertService,
  ) {
    super();
  }

  handleError(error: any) {
    const message = error.message;
    if (message.length > 0) {
      this.zone.run(() => {
        this.alertService.error(message);
      });
    }
  }
}
