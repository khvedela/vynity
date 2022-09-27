import {AfterViewInit, Component, OnInit} from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons'

declare const TradingView: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // new TradingView.widget(
    //   {
    //     "width": 150,
    //     "height": 100,
    //     "symbol": "NASDAQ:AAPL",
    //     "timezone": "Etc/UTC",
    //     "theme": "Dark",
    //     "style": "2",
    //     "locale": "en",
    //     "toolbar_bg": "#f1f3f6",
    //     "enable_publishing": false,
    //     "withdateranges": false,
    //     "range": "ytd",
    //     "hide_side_toolbar": true,
    //     "allow_symbol_change": false,
    //     "show_popup_button": false,
    //     "popup_width": "1000",
    //     "popup_height": "650",
    //     "no_referral_id": true,
    //     "container_id": "tradingview_bac65"
    //   }
    // );

    new TradingView.widget({
      "symbol": "NASDAQ:AAPL",
      "width": 350,
      "colorTheme": "light",
      "isTransparent": true,
      "locale": "en",
      "container_id": "tradingview_bac66"
    })
  }

}
