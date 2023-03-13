import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private notification: NzNotificationService) { }

  createWarningNotification(titilo:any, cuerpo:any): void {
    this.notification.warning(
      titilo,
      cuerpo,
      { nzPlacement: "topRight" }
    );
  }

  createSuccessNotification(titilo:any, cuerpo:any): void {
    this.notification.success(
      titilo,
      cuerpo,
      { nzPlacement: "topRight" }
    );
  }
}
