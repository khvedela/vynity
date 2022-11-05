import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  inversePersonIcon = true;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

  onWindowScroll(event: any) {
    console.log('asdasdasda');
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scrolled');
      this.inversePersonIcon = false;
    } else {
      element.classList.remove('navbar-scrolled');
      this.inversePersonIcon = true;
    }
  }

}
