import { Component } from '@angular/core';
import { CheckErrorService } from 'src/app/Core/Services/check-error.service';
import { MessageService } from 'src/app/Core/Services/message.service';
import { ResponsiveService } from 'src/app/Core/Services/responsive.service';
import { SessionService } from 'src/app/Core/Services/session.service';
import { SettingService } from 'src/app/Core/Services/setting.service';

@Component({
  selector: 'prs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoading = false;
  isMobile = false;
  isDesktop = false;
  isTablet = false;
  isMenu = false;

  constructor(public session: SessionService,
              public settingService: SettingService,
              public message: MessageService,
              public mobileService: ResponsiveService,
              public checkError: CheckErrorService) {
    this.isMobile = mobileService.isMobile()
    this.isTablet = mobileService.isTablet()
  }

  ngOnInit(): void {
    this.settingService.getSetting();
    // $(document).ready(() => {
    //   $(".btn-menu-mobi").click(() => {
    //     $(".show-menu").addClass("under-menu")
    //   })
    //   $(".btn-exit-menu").click(() => {
    //     $(".show-menu").removeClass("under-menu")
    //   })
    // })
  }

  menuOpen() {
    this.isMenu = true
  }

  menuClose() {
    this.isMenu = false
  }

  logOut(): void {
    // this.isLoading = true
    // this.api.logout().subscribe((res: any) => {
    //   this.isLoading = false;
    //   if (res.isDone) {
    //     this.session.removeUser();

    //   }
    // }, (error: any) => {
    //   this.isLoading = false;
    //   this.message.error();
    //   this.checkError.check(error);
    // })
  }

}
