import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit, AfterViewInit {

  @ViewChild('listedCryptos') listedCryptos?: ElementRef;
  @ViewChild('marketData') marketData?: ElementRef;


  constructor(private _renderer2: Renderer2) { }

  @HostListener('window:scroll', ['$event'])


  onWindowScroll(event: any) {
    console.log('asdasdasda');
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scrolled');
    }
  }

  ngOnInit(): void {
    let element = document.querySelector('.navbar') as HTMLElement;
    element.classList.add('navbar-scrolled');
  }

  ngAfterViewInit(): void {
    let listedCryptos = this._renderer2.createElement('script');
    let marketData = this._renderer2.createElement('script');
    listedCryptos.type = `text/javascript`;
    marketData.type = `text/javascript`;
    listedCryptos.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
    marketData.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
    marketData.text = `
     {
  "width": "100%",
  "height": "300",
  "symbolsGroups": [
    {
      "name": "Indices",
      "originalName": "Indices",
      "symbols": [
        {
          "name": "FOREXCOM:SPXUSD",
          "displayName": "S&P 500"
        },
        {
          "name": "FOREXCOM:NSXUSD",
          "displayName": "US 100"
        },
        {
          "name": "FOREXCOM:DJI",
          "displayName": "Dow 30"
        },
        {
          "name": "INDEX:NKY",
          "displayName": "Nikkei 225"
        },
        {
          "name": "INDEX:DEU40",
          "displayName": "DAX Index"
        },
        {
          "name": "FOREXCOM:UKXGBP",
          "displayName": "UK 100"
        }
      ]
    },
    {
      "name": "Futures",
      "originalName": "Futures",
      "symbols": [
        {
          "name": "CME_MINI:ES1!",
          "displayName": "S&P 500"
        },
        {
          "name": "CME:6E1!",
          "displayName": "Euro"
        },
        {
          "name": "COMEX:GC1!",
          "displayName": "Gold"
        },
        {
          "name": "NYMEX:CL1!",
          "displayName": "Crude Oil"
        },
        {
          "name": "NYMEX:NG1!",
          "displayName": "Natural Gas"
        },
        {
          "name": "CBOT:ZC1!",
          "displayName": "Corn"
        }
      ]
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": true,
  "locale": "en"
}
    `
    listedCryptos.text = `
    {
            "width": "100%",
            "height": "300",
            "symbolsGroups": [
            {
              "name": "Indices",
              "originalName": "Indices",
              "symbols": [
                {
                  "name": "CME:BTC1!",
                  "displayName": "Bitcoin"
                },
                {
                  "name": "CME:ETH1!",
                  "displayName": "Ethereum"
                },
                {
                  "name": "CRYPTOCAP:BNB",
                  "displayName": "BNB"
                },
                {
                  "name": "BINANCE:BCHUSDT",
                  "displayName": "Bitcoin Cash"
                },
                {
                  "name": "KRAKEN:XRPUSD",
                  "displayName": "Ripple"
                }
              ]
            }
          ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": true,
            "locale": "en"
          }
    `
    this.listedCryptos?.nativeElement.appendChild(listedCryptos);
    this.marketData?.nativeElement.appendChild(marketData);
  }

}
