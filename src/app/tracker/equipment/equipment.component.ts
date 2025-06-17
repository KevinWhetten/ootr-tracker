import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  standalone: true,
})
export class EquipmentComponent implements OnInit {
  kokiriSword = 'icons/25-KokiriSword-BW.png';
  masterSword = 'icons/26-MasterSword.png';
  biggoronSword = 'icons/27-BiggoronSword-BW.png';
  dekuShield = 'icons/28-DekuShield.png';
  hylianShield = 'icons/29-HylianShield-BW.png';
  mirrorShield = 'icons/30-MirrorShield-BW.png';
  kokiriTunic = 'icons/31-KokiriTunic.png';
  goronTunic = 'icons/32-GoronTunic-BW.png';
  zoraTunic = 'icons/33-ZoraTunic-BW.png';
  kokiriBoots = 'icons/34-KokiriBoots.png';
  ironBoots = 'icons/35-IronBoots-BW.png';
  hoverBoots = 'icons/36-HoverBoots-BW.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleKokiriSword() {
    if (this.kokiriSword == 'icons/25-KokiriSword-BW.png') {
      this.kokiriSword = 'icons/25-KokiriSword.png';
    } else {
      this.kokiriSword = 'icons/25-KokiriSword-BW.png';
    }
  }

  toggleMasterSword() {
    if (this.masterSword == 'icons/26-MasterSword-BW.png') {
      this.masterSword = 'icons/26-MasterSword.png';
    } else {
      this.masterSword = 'icons/26-MasterSword-BW.png';
    }
  }

  toggleBiggoronSword() {
    if (this.biggoronSword == 'icons/27-BiggoronSword-BW.png') {
      this.biggoronSword = 'icons/27-BiggoronSword.png';
    } else {
      this.biggoronSword = 'icons/27-BiggoronSword-BW.png';
    }
  }

  toggleDekuShield() {
    if (this.dekuShield == 'icons/28-DekuShield-BW.png') {
      this.dekuShield = 'icons/28-DekuShield.png';
    } else {
      this.dekuShield = 'icons/28-DekuShield-BW.png';
    }
  }

  toggleHylianShield() {
    if (this.hylianShield == 'icons/29-HylianShield-BW.png') {
      this.hylianShield = 'icons/29-HylianShield.png';
    } else {
      this.hylianShield = 'icons/29-HylianShield-BW.png';
    }
  }

  toggleMirrorShield() {
    if (this.mirrorShield == 'icons/30-MirrorShield-BW.png') {
      this.mirrorShield = 'icons/30-MirrorShield.png';
    } else {
      this.mirrorShield = 'icons/30-MirrorShield-BW.png';
    }
  }

  toggleGoronTunic() {
    if (this.goronTunic == 'icons/32-GoronTunic-BW.png') {
      this.goronTunic = 'icons/32-GoronTunic.png';
    } else {
      this.goronTunic = 'icons/32-GoronTunic-BW.png';
    }
  }

  toggleZoraTunic() {
    if (this.zoraTunic == 'icons/33-ZoraTunic-BW.png') {
      this.zoraTunic = 'icons/33-ZoraTunic.png';
    } else {
      this.zoraTunic = 'icons/33-ZoraTunic-BW.png';
    }
  }

  toggleIronBoots() {
    if (this.ironBoots == 'icons/35-IronBoots-BW.png') {
      this.ironBoots = 'icons/35-IronBoots.png';
    } else {
      this.ironBoots = 'icons/35-IronBoots-BW.png';
    }
  }

  toggleHoverBoots() {
    if (this.hoverBoots == 'icons/36-HoverBoots-BW.png') {
      this.hoverBoots = 'icons/36-HoverBoots.png';
    } else {
      this.hoverBoots = 'icons/36-HoverBoots-BW.png';
    }
  }
}

