import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

declare var myExtObject: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  @HostListener('window:scroll', [])
    onWindowScroll() 
    {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
      {
        this.showScroll = true;
      } 
      else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
      { 
        this.showScroll = false; 
      }
    }

  public asd: boolean;
  public interest: FormControl;

  constructor() {
    this.asd = false;
    this.interest = new FormControl('');
  }

  ngOnInit() {
  }


  scrollToTop(){ 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
    }
}
