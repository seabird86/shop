import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password/reset-password.service';
import { ResetPasswordModel } from '../../common/model/reset-password.model';
import { AppCodec } from '../../common/utils/app-codec.utils';
import { NotificationService } from '../../common/service/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password-get',
  templateUrl: './reset-password-get.component.html',
  styleUrls: ['./reset-password-get.component.css']
})
export class ResetPasswordGetComponent implements OnInit {

  model: ResetPasswordModel = new ResetPasswordModel();
  public show!: boolean;

  constructor(
    private router: Router,
    private resetPasswordService: ResetPasswordService,
    private notification: NotificationService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.show = false;
    console.log(decodeURIComponent(this.router.url.slice(18)));
    if (this.router.url.slice(18) !== '') {
      console.log('Get request here: ');
      this.resetPasswordService.getLink(decodeURIComponent(this.router.url.slice(18)))
        .subscribe(show => this.show = true);
    }
  }

  changePasswordEvent() {
    // TODO validate email, password, repassword...
    // this.model = new ResetPasswordModel();
    this.model.param = decodeURIComponent(this.router.url.slice(18));
    // this.model.email = email;
    console.log('password');
    console.log(this.model.password, this.model.repassword);
    if (this.model.password !== this.model.repassword) {
      this.translate.get('chgpwderr').subscribe(res => {
        this.notification.error(res);
      });
    } else {
      this.model.password = AppCodec.encodePass(this.model.password);
      this.resetPasswordService.resetPassword(this.model);
      this.router.navigate(['main']);
    }
  }

  returnEvent() {
    this.router.navigate(['main']);
  }

}
