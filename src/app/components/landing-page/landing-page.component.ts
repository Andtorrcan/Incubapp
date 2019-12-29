import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {

  public asd: boolean;
  public interest: FormControl;

  constructor() {
    this.asd = false;
    this.interest = new FormControl('');
  }

  ngOnInit() {
  }

}
