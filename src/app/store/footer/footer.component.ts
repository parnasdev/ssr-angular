import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/Core/Services/responsive.service';
import { SettingService } from 'src/app/Core/Services/setting.service';

// declare let $: any;

@Component({
  selector: 'prs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  isMobile=false;
  isTablet=false;
  isDesktop=false;
  constructor(public setting: SettingService,
  public mobileService: ResponsiveService,
  public router: Router,
  @Inject(DOCUMENT) private document: Document
) {
    this.isMobile = mobileService.isMobile()
    this.isTablet = mobileService.isTablet()
    this.isDesktop = mobileService.isDesktop()
  }

  ngOnInit(): void {
    // const btn = $('#button');
    // $(window).scroll(() => {
    //   if ($(window).scrollTop() > 300) {
    //     btn.addClass('show');
    //   } else {
    //     btn.removeClass('show');
    //   }
    // });

    // btn.on('click', (e: any) => {
    //   e.preventDefault();
    //   $("html").animate({scrollTop: 0}, '300');
    // });
  }

  getRoute(city_name: string){
    let params = {
      origin: 'tehran',
      dest: city_name,
      stDate: null,
      night: null
    };
    this.router.navigate([`/tours/`], {
      queryParams: params
    })
  }

}
