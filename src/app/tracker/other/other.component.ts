import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  standalone: true,
})
export class OtherComponent implements OnInit {
  strength = 'icons/37-GoronBracelet-BW.png';
  scale = 'icons/38-SilverScale-BW.png';
  magic = 'icons/39-Magic-BW.png';
  gerudoCard = 'icons/40-GerudoMembershipCard-BW.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleStrength() {
    if (this.strength == 'icons/37-GoronBracelet-BW.png') {
      this.strength = 'icons/37-GoronBracelet.png';
    } else if (this.strength == 'icons/37-GoronBracelet.png') {
      this.strength = 'icons/37-SilverGauntlets.png';
    } else if (this.strength == 'icons/37-SilverGauntlets.png') {
      this.strength = 'icons/37-GoldenGauntlets.png';
    } else {
      this.strength = 'icons/37-GoronBracelet-BW.png';
    }
  }

  toggleScale() {
    if (this.scale == 'icons/38-SilverScale-BW.png') {
      this.scale = 'icons/38-SilverScale.png';
    } else if (this.scale == 'icons/38-SilverScale.png') {
      this.scale = 'icons/38-GoldScale.png';
    } else {
      this.scale = 'icons/38-SilverScale-BW.png';
    }
  }

  toggleMagic() {
    if (this.magic == 'icons/39-Magic-BW.png') {
      this.magic = 'icons/39-Magic1.png';
    } else if (this.magic == 'icons/39-Magic1.png') {
      this.magic = 'icons/39-Magic2.png';
    } else {
      this.magic = 'icons/39-Magic-BW.png';
    }
  }

  toggleGerudoCard() {
    if (this.gerudoCard == 'icons/40-GerudoMembershipCard-BW.png') {
      this.gerudoCard = 'icons/40-GerudoMembershipCard.png';
    } else {
      this.gerudoCard = 'icons/40-GerudoMembershipCard-BW.png';
    }
  }
}
