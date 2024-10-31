import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationServices {
  constructor(private toastr: ToastrService) {}

  showError(message: string, title: string = 'Thông Báo') {
    this.toastr.error(message, title);
  }

  showSuccess(message: string, title: string = 'Thông Báo') {
    this.toastr.success(message, title);
  }

  showWarning(message: string, title: string = 'Cảnh báo') {
    this.toastr.warning(message, title);
  }

  showInfo(message: string, title: string = 'Thông tin') {
    this.toastr.info(message, title);
  }
}
