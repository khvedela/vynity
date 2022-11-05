import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTelegram = faTelegram;
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
