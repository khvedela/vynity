import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

declare const TradingView: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild('btcPrice') btcPrice?: ElementRef;
  @ViewChild('aaplPrice') aaplPrice?: ElementRef;
  @ViewChild('tslaPrice') tslaPrice?: ElementRef;
  @ViewChild('marketOverview') marketOverview?: ElementRef;

  faUser = faUser;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faTelegram = faTelegram;
  faDiscord = faDiscord;

  panelOpenState = false;
  inversePersonIcon = true;

  constructor(private _renderer2: Renderer2) { }

  @HostListener('window:scroll', ['$event'])


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

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let btcPrice = this._renderer2.createElement('script');
    let aaplPrice = this._renderer2.createElement('script');
    let tslaPrice = this._renderer2.createElement('script');
    let marketOverview = this._renderer2.createElement('script');

    btcPrice.type = `text/javascript`;
    aaplPrice.type = `text/javascript`;
    tslaPrice.type = `text/javascript`;
    marketOverview.type = `text/javascript`;

    btcPrice.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    aaplPrice.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    tslaPrice.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    marketOverview.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";

    btcPrice.text = `
    {
      "symbol": "BITSTAMP:BTCUSD",
      "width": 350,
      "colorTheme": "light",
      "isTransparent": true,
      "locale": "en"
    }`;

    aaplPrice.text = `
    {
      "symbol": "NASDAQ:AAPL",
      "width": 350,
      "colorTheme": "light",
      "isTransparent": true,
      "locale": "en"
    }`;

    tslaPrice.text = `
    {
      "symbol": "NASDAQ:TSLA",
      "width": 350,
      "colorTheme": "light",
      "isTransparent": true,
      "locale": "en"
    }`;

    marketOverview.text = `
    {
      "colorTheme": "light",
      "dateRange": "1D",
      "showChart": true,
      "locale": "en",
      "width": "800",
      "height": "660",
      "largeChartUrl": "",
      "isTransparent": true,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(255, 0, 0, 1)",
      "plotLineColorFalling": "rgba(151, 0, 0, 1)",
      "gridLineColor": "rgba(255, 255, 0, 0)",
      "scaleFontColor": "rgba(106, 109, 120, 1)",
      "belowLineFillColorGrowing": "rgba(255, 0, 0, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            {
              "s": "NASDAQ:TSLA",
              "d": "Tesla Motors, Inc"
            },
            {
              "s": "NASDAQ:AMZN",
              "d": "Amazon.com Inc"
            },
            {
              "s": "NASDAQ:AAPL",
              "d": "Apple"
            }
          ],
          "originalTitle": "Indices"
        }
      ]
    }`;

    this.btcPrice?.nativeElement.appendChild(btcPrice);
    this.aaplPrice?.nativeElement.appendChild(aaplPrice);
    this.tslaPrice?.nativeElement.appendChild(tslaPrice);
    this.marketOverview?.nativeElement.appendChild(marketOverview);
  }

}
