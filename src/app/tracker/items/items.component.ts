import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  standalone: true,
})
export class ItemsComponent implements OnInit {
  dekuSticks = 'icons/01-DekuStick10.png';
  dekuNuts = 'icons/02-DekuNut20.png';
  bombs = 'icons/03-Bombs-BW.png';
  bow = 'icons/04-Bow-BW.png';
  fireArrows = 'icons/05-FireArrows-BW.png';
  dinsFire = 'icons/06-DinsFire-BW.png';
  slingshot = 'icons/07-Slingshot-BW.png';
  ocarina = 'icons/08-FairyOcarina.png';
  bombchus = 'icons/09-Bombchus-BW.png';
  hookshot = 'icons/10-Hookshot-BW.png';
  iceArrows = 'icons/11-IceArrows-BW.png';
  faroresWind = 'icons/12-FaroresWind-BW.png';
  boomerang = 'icons/13-Boomerang-BW.png';
  lensOfTruth = 'icons/14-LensOfTruth-BW.png';
  magicBeans = 'icons/15-MagicBeans-BW.png';
  megatonHammer = 'icons/16-MegatonHammer-BW.png';
  lightArrows = 'icons/17-LightArrows-BW.png';
  nayrusLove = 'icons/18-NayrusLove-BW.png';
  rutosLetter = 'icons/19-RutosLetter-BW.png';
  bottle1 = 'icons/20-22-Bottle-BW.png';
  bottle2 = 'icons/20-22-Bottle-BW.png';
  bottle3 = 'icons/20-22-Bottle-BW.png';
  mask = 'icons/23-ZeldasLetter.png';
  tradingQuest = 'icons/24-SoldOut.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDekuSticks() {
    if (this.dekuSticks == 'icons/01-DekuStick-BW.png') {
      this.dekuSticks = 'icons/01-DekuStick10.png';
    } else if (this.dekuSticks == 'icons/01-DekuStick10.png') {
      this.dekuSticks = 'icons/01-DekuStick20.png';
    } else if (this.dekuSticks == 'icons/01-DekuStick20.png') {
      this.dekuSticks = 'icons/01-DekuStick30.png';
    } else {
      this.dekuSticks = 'icons/01-DekuStick-BW.png';
    }
  }

  toggleDekuNuts() {
    if (this.dekuNuts == 'icons/02-DekuNut-BW.png') {
      this.dekuNuts = 'icons/02-DekuNut20.png';
    } else if (this.dekuNuts == 'icons/02-DekuNut20.png') {
      this.dekuNuts = 'icons/02-DekuNut30.png';
    } else if (this.dekuNuts == 'icons/02-DekuNut30.png') {
      this.dekuNuts = 'icons/02-DekuNut40.png';
    } else {
      this.dekuNuts = 'icons/02-DekuNut-BW.png';
    }
  }

  toggleBombs() {
    if (this.bombs == 'icons/03-Bombs-BW.png') {
      this.bombs = 'icons/03-Bombs20.png';
    } else if (this.bombs == 'icons/03-Bombs20.png') {
      this.bombs = 'icons/03-Bombs30.png';
    } else if (this.bombs == 'icons/03-Bombs30.png') {
      this.bombs = 'icons/03-Bombs40.png';
    } else {
      this.bombs = 'icons/03-Bombs-BW.png';
    }
  }

  toggleBow() {
    if (this.bow == 'icons/04-Bow-BW.png') {
      this.bow = 'icons/04-Bow30.png';
    } else if (this.bow == 'icons/04-Bow30.png') {
      this.bow = 'icons/04-Bow40.png';
    } else if (this.bow == 'icons/04-Bow40.png') {
      this.bow = 'icons/04-Bow50.png';
    } else {
      this.bow = 'icons/04-Bow-BW.png';
    }
  }

  toggleFireArrows() {
    if (this.fireArrows == 'icons/05-FireArrows-BW.png') {
      this.fireArrows = 'icons/05-FireArrows.png';
    } else {
      this.fireArrows = 'icons/05-FireArrows-BW.png';
    }
  }

  toggleDinsFire() {
    if (this.dinsFire == 'icons/06-DinsFire-BW.png') {
      this.dinsFire = 'icons/06-DinsFire.png';
    } else {
      this.dinsFire = 'icons/06-DinsFire-BW.png';
    }
  }

  toggleSlingshot() {
    if (this.slingshot == 'icons/07-Slingshot-BW.png') {
      this.slingshot = 'icons/07-Slingshot30.png';
    } else if (this.slingshot == 'icons/07-Slingshot30.png') {
      this.slingshot = 'icons/07-Slingshot40.png';
    } else if (this.slingshot == 'icons/07-Slingshot40.png') {
      this.slingshot = 'icons/07-Slingshot50.png';
    } else {
      this.slingshot = 'icons/07-Slingshot-BW.png';
    }
  }

  toggleOcarina() {
    if (this.ocarina == 'icons/08-FairyOcarina-BW.png') {
      this.ocarina = 'icons/08-FairyOcarina.png';
    } else if (this.ocarina == 'icons/08-FairyOcarina.png') {
      this.ocarina = 'icons/08-OcarinaOfTime.png';
    } else {
      this.ocarina = 'icons/08-FairyOcarina-BW.png';
    }
  }

  toggleBombchus() {
    if (this.bombchus == 'icons/09-Bombchus-BW.png') {
      this.bombchus = 'icons/09-Bombchus.png';
    } else {
      this.bombchus = 'icons/09-Bombchus-BW.png';
    }
  }

  toggleHookshot() {
    if (this.hookshot == 'icons/10-Hookshot-BW.png') {
      this.hookshot = 'icons/10-Hookshot.png';
    } else if (this.hookshot == 'icons/10-Hookshot.png') {
      this.hookshot = 'icons/10-Longshot.png';
    } else {
      this.hookshot = 'icons/10-Hookshot-BW.png';
    }
  }

  toggleIceArrows() {
    if (this.iceArrows == 'icons/11-IceArrows-BW.png') {
      this.iceArrows = 'icons/11-IceArrows.png';
    } else {
      this.iceArrows = 'icons/11-IceArrows-BW.png';
    }
  }

  toggleFaroresWind() {
    if (this.faroresWind == 'icons/12-FaroresWind-BW.png') {
      this.faroresWind = 'icons/12-FaroresWind.png';
    } else {
      this.faroresWind = 'icons/12-FaroresWind-BW.png';
    }

  }

  toggleBoomerang() {
    if (this.boomerang == 'icons/13-Boomerang-BW.png') {
      this.boomerang = 'icons/13-Boomerang.png';
    } else {
      this.boomerang = 'icons/13-Boomerang-BW.png';
    }
  }

  toggleLensOfTruth() {
    if (this.lensOfTruth == 'icons/14-LensOfTruth-BW.png') {
      this.lensOfTruth = 'icons/14-LensOfTruth.png';
    } else {
      this.lensOfTruth = 'icons/14-LensOfTruth-BW.png';
    }
  }

  toggleMagicBeans() {
    if (this.magicBeans == 'icons/15-MagicBeans-BW.png') {
      this.magicBeans = 'icons/15-MagicBeans.png';
    } else {
      this.magicBeans = 'icons/15-MagicBeans-BW.png';
    }
  }

  toggleMegatonHammer() {
    if (this.megatonHammer == 'icons/16-MegatonHammer-BW.png') {
      this.megatonHammer = 'icons/16-MegatonHammer.png';
    } else {
      this.megatonHammer = 'icons/16-MegatonHammer-BW.png';
    }
  }

  toggleLightArrows() {
    if (this.lightArrows == 'icons/17-LightArrows-BW.png') {
      this.lightArrows = 'icons/17-LightArrows.png';
    } else {
      this.lightArrows = 'icons/17-LightArrows-BW.png';
    }
  }

  toggleNayrusLove() {
    if (this.nayrusLove == 'icons/18-NayrusLove-BW.png') {
      this.nayrusLove = 'icons/18-NayrusLove.png';
    } else {
      this.nayrusLove = 'icons/18-NayrusLove-BW.png';
    }
  }

  toggleRutosLetter() {
    if (this.rutosLetter == 'icons/19-RutosLetter-BW.png') {
      this.rutosLetter = 'icons/19-RutosLetter.png';
    } else {
      this.rutosLetter = 'icons/19-RutosLetter-BW.png';
    }
  }

  toggleBottle(bottleNum: number) {
    let bottle: string;

    switch (bottleNum) {
      case 1:
        bottle = this.bottle1;
        break;
      case 2:
        bottle = this.bottle2;
        break;
      case 3:
        bottle = this.bottle3;
        break;
      default:
        bottle = '';
        break;
    }

    if (bottle == 'icons/20-22-Bottle-BW.png') {
      bottle = 'icons/20-22-Bottle.png';
    } else {
      bottle = 'icons/20-22-Bottle-BW.png';
    }

    switch (bottleNum) {
      case 1:
        this.bottle1 = bottle;
        break;
      case 2:
        this.bottle2 = bottle;
        break;
      case 3:
        this.bottle3 = bottle;
        break;
      default:
        bottle = '';
        break;
    }
  }

  toggleMask() {
    if (this.mask == 'icons/23-ZeldasLetter.png') {
      this.mask = 'icons/23-KeatonMask.png';
    } else if (this.mask == 'icons/23-KeatonMask.png') {
      this.mask = 'icons/23-SkullMask.png';
    } else {
      this.mask = 'icons/23-ZeldasLetter.png';
    }
  }

  toggleTradingQuest() {
    if (this.tradingQuest == 'icons/24-SoldOut.png') {
      this.tradingQuest = 'icons/24-Prescription.png';
    } else if (this.tradingQuest == 'icons/24-Prescription.png') {
      this.tradingQuest = 'icons/24-EyeballFrog.png';
    } else if (this.tradingQuest == 'icons/24-EyeballFrog.png') {
      this.tradingQuest = 'icons/24-Eyedrops.png';
    } else if (this.tradingQuest == 'icons/24-Eyedrops.png') {
      this.tradingQuest = 'icons/24-ClaimCheck.png';
    } else {
      this.tradingQuest = 'icons/24-SoldOut.png';
    }
  }
}
