import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-medallions',
  templateUrl: './medallions.component.html',
  styleUrls: ['./medallions.component.scss'],
  standalone: true,
})
export class MedallionsComponent implements OnInit {
  kokiriEmerald = 'icons/41-KokiriEmerald-BW.png';
  goronRuby = 'icons/42-GoronRuby-BW.png';
  zoraSapphire = 'icons/43-ZoraSapphire-BW.png';

  lightMedallion = 'icons/44-LightMedallion-BW.png';
  forestMedallion = 'icons/45-ForestMedallion-BW.png';
  fireMedallion = 'icons/46-FireMedallion-BW.png';
  waterMedallion = 'icons/47-WaterMedallion-BW.png';
  shadowMedallion = 'icons/48-ShadowMedallion-BW.png';
  spiritMedallion = 'icons/49-SpiritMedallion-BW.png';
  lightDungeon = 'icons/DU-None.png';
  kokiriDungeon = 'icons/DU-None.png';
  goronDungeon = 'icons/DU-None.png';
  zoraDungeon = 'icons/DU-None.png';
  forestDungeon = 'icons/DU-None.png';
  fireDungeon = 'icons/DU-None.png';
  waterDungeon = 'icons/DU-None.png';
  shadowDungeon = 'icons/DU-None.png';
  spiritDungeon = 'icons/DU-None.png';

  constructor() { }

  ngOnInit(): void {
  }

  toggleKokiriEmerald() {
    if(this.kokiriEmerald == 'icons/41-KokiriEmerald-BW.png'){
      this.kokiriEmerald = 'icons/41-KokiriEmerald.png';
    } else {
      this.kokiriEmerald = 'icons/41-KokiriEmerald-BW.png';
    }
  }

  toggleGoronRuby() {
    if(this.goronRuby == 'icons/42-GoronRuby-BW.png'){
      this.goronRuby = 'icons/42-GoronRuby.png';
    } else {
      this.goronRuby = 'icons/42-GoronRuby-BW.png';
    }
  }

  toggleZoraSapphire() {
    if(this.zoraSapphire == 'icons/43-ZoraSapphire-BW.png'){
      this.zoraSapphire = 'icons/43-ZoraSapphire.png';
    } else {
      this.zoraSapphire = 'icons/43-ZoraSapphire-BW.png';
    }
  }

  toggleLightMedallion() {
    if(this.lightMedallion == 'icons/44-LightMedallion-BW.png'){
      this.lightMedallion = 'icons/44-LightMedallion.png';
    } else {
      this.lightMedallion = 'icons/44-LightMedallion-BW.png';
    }
  }

  toggleForestMedallion() {
    if(this.forestMedallion == 'icons/45-ForestMedallion-BW.png'){
      this.forestMedallion = 'icons/45-ForestMedallion.png';
    } else {
      this.forestMedallion = 'icons/45-ForestMedallion-BW.png';
    }
  }

  toggleFireMedallion() {
    if(this.fireMedallion == 'icons/46-FireMedallion-BW.png'){
      this.fireMedallion = 'icons/46-FireMedallion.png';
    } else {
      this.fireMedallion = 'icons/46-FireMedallion-BW.png';
    }
  }

  toggleWaterMedallion() {
    if(this.waterMedallion == 'icons/47-WaterMedallion-BW.png'){
      this.waterMedallion = 'icons/47-WaterMedallion.png';
    } else {
      this.waterMedallion = 'icons/47-WaterMedallion-BW.png';
    }
  }

  toggleShadowMedallion() {
    if(this.shadowMedallion == 'icons/48-ShadowMedallion-BW.png'){
      this.shadowMedallion = 'icons/48-ShadowMedallion.png';
    } else {
      this.shadowMedallion = 'icons/48-ShadowMedallion-BW.png';
    }
  }

  toggleSpiritMedallion() {
    if(this.spiritMedallion == 'icons/49-SpiritMedallion-BW.png'){
      this.spiritMedallion = 'icons/49-SpiritMedallion.png';
    } else {
      this.spiritMedallion = 'icons/49-SpiritMedallion-BW.png';
    }
  }

  toggleDungeon($event: MouseEvent, dungeon: string) {
    $event.preventDefault();

    let selectedDungeon= '';
    switch (dungeon){
      case 'kokiri':
        selectedDungeon = this.kokiriDungeon;
        break;
      case 'goron':
        selectedDungeon = this.goronDungeon;
        break;
      case 'zora':
        selectedDungeon = this.zoraDungeon;
        break;
      case 'light':
        selectedDungeon = this.lightDungeon;
        break;
      case 'forest':
        selectedDungeon = this.forestDungeon;
        break;
      case 'fire':
        selectedDungeon = this.fireDungeon;
        break;
      case 'water':
        selectedDungeon = this.waterDungeon;
        break;
      case 'shadow':
        selectedDungeon = this.shadowDungeon;
        break;
      case 'spirit':
        selectedDungeon = this.spiritDungeon;
        break;
    }

    if(selectedDungeon == 'icons/DU-None.png') {
      selectedDungeon = 'icons/DU-Free.png'
    } else if(selectedDungeon == 'icons/DU-Free.png') {
      selectedDungeon = 'icons/DU-Deku.png';
    } else if (selectedDungeon == 'icons/DU-Deku.png'){
      selectedDungeon = 'icons/DU-DC.png';
    } else if (selectedDungeon == 'icons/DU-DC.png'){
      selectedDungeon = 'icons/DU-Jabu.png';
    } else if (selectedDungeon == 'icons/DU-Jabu.png'){
      selectedDungeon = 'icons/DU-Forest.png';
    } else if (selectedDungeon == 'icons/DU-Forest.png'){
      selectedDungeon = 'icons/DU-Fire.png';
    } else if (selectedDungeon == 'icons/DU-Fire.png'){
      selectedDungeon = 'icons/DU-Water.png';
    } else if (selectedDungeon == 'icons/DU-Water.png'){
      selectedDungeon = 'icons/DU-Shadow.png';
    } else if (selectedDungeon == 'icons/DU-Shadow.png'){
      selectedDungeon = 'icons/DU-Spirit.png';
    } else if (selectedDungeon == 'icons/DU-Spirit.png'){
      selectedDungeon = 'icons/DU-None.png';
    }

    switch (dungeon){
      case 'kokiri':
        this.kokiriDungeon = selectedDungeon;
        break;
      case 'goron':
        this.goronDungeon = selectedDungeon;
        break;
      case 'zora':
        this.zoraDungeon = selectedDungeon;
        break;
      case 'light':
        this.lightDungeon = selectedDungeon;
        break;
      case 'forest':
        this.forestDungeon = selectedDungeon;
        break;
      case 'fire':
        this.fireDungeon = selectedDungeon;
        break;
      case 'water':
        this.waterDungeon = selectedDungeon;
        break;
      case 'shadow':
        this.shadowDungeon = selectedDungeon;
        break;
      case 'spirit':
        this.spiritDungeon = selectedDungeon;
        break;
    }
  }
}
