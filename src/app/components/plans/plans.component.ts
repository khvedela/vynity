import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  @HostListener('window:scroll', ['$event'])


  onWindowScroll(event: any) {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scrolled');
      // element.style.position = 'fixed';
    }
  }

  ngOnInit(): void {
    let element = document.querySelector('.navbar') as HTMLElement;
    element.classList.add('navbar-scrolled');
  }

}
