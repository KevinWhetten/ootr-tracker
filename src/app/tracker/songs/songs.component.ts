import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  standalone: true
})
export class SongsComponent implements OnInit {
  zeldasLullaby = 'icons/50-ZeldasLullaby-BW.png';
  eponasSong = 'icons/51-EponasSong-BW.png';
  sariasSong = 'icons/52-SariasSong-BW.png';
  sunsSong = 'icons/53-SunsSong-BW.png';
  songOfTime = 'icons/54-SongOfTime-BW.png';
  songOfStorms = 'icons/55-SongOfStorms-BW.png';

  minuetOfForest = 'icons/56-61-Songs-BW.png';
  boleroOfFire = 'icons/56-61-Songs-BW.png';
  serenadeOfWater = 'icons/56-61-Songs-BW.png';
  requiemOfSpirit = 'icons/56-61-Songs-BW.png';
  nocturneOfShadow = 'icons/56-61-Songs-BW.png';
  preludeOfLight = 'icons/61-PreludeOfLight.png';
  @Input() width!: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleZeldasLullaby() {
    if (this.zeldasLullaby == 'icons/50-ZeldasLullaby-BW.png') {
      this.zeldasLullaby = 'icons/50-ZeldasLullaby.png';
    } else {
      this.zeldasLullaby = 'icons/50-ZeldasLullaby-BW.png';
    }
  }

  toggleEponasSong() {
    if (this.eponasSong == 'icons/51-EponasSong-BW.png') {
      this.eponasSong = 'icons/51-EponasSong.png';
    } else {
      this.eponasSong = 'icons/51-EponasSong-BW.png';
    }
  }

  toggleSariasSong() {
    if (this.sariasSong == 'icons/52-SariasSong-BW.png') {
      this.sariasSong = 'icons/52-SariasSong.png';
    } else {
      this.sariasSong = 'icons/52-SariasSong-BW.png';
    }
  }

  toggleSunsSong() {
    if (this.sunsSong == 'icons/53-SunsSong-BW.png') {
      this.sunsSong = 'icons/53-SunsSong.png';
    } else {
      this.sunsSong = 'icons/53-SunsSong-BW.png';
    }
  }

  toggleSongOfTime() {
    if (this.songOfTime == 'icons/54-SongOfTime-BW.png') {
      this.songOfTime = 'icons/54-SongOfTime.png';
    } else {
      this.songOfTime = 'icons/54-SongOfTime-BW.png';
    }
  }

  toggleSongOfStorms() {
    if (this.songOfStorms == 'icons/55-SongOfStorms-BW.png') {
      this.songOfStorms = 'icons/55-SongOfStorms.png';
    } else {
      this.songOfStorms = 'icons/55-SongOfStorms-BW.png';
    }
  }

  toggleMinuetOfForest() {
    if (this.minuetOfForest == 'icons/56-61-Songs-BW.png') {
      this.minuetOfForest = 'icons/56-MinuetOfForest.png';
    } else {
      this.minuetOfForest = 'icons/56-61-Songs-BW.png';
    }
  }

  toggleBoleroOfFire() {
    if (this.boleroOfFire == 'icons/56-61-Songs-BW.png') {
      this.boleroOfFire = 'icons/57-BoleroOfFire.png';
    } else {
      this.boleroOfFire = 'icons/56-61-Songs-BW.png';
    }
  }

  toggleSerenadeOfWater() {
    if (this.serenadeOfWater == 'icons/56-61-Songs-BW.png') {
      this.serenadeOfWater = 'icons/58-SerenadeOfWater.png';
    } else {
      this.serenadeOfWater = 'icons/56-61-Songs-BW.png';
    }
  }

  toggleRequiemOfSpirit() {
    if (this.requiemOfSpirit == 'icons/56-61-Songs-BW.png') {
      this.requiemOfSpirit = 'icons/59-RequiemOfSpirit.png';
    } else {
      this.requiemOfSpirit = 'icons/56-61-Songs-BW.png';
    }
  }

  toggleNocturneOfShadow() {
    if (this.nocturneOfShadow == 'icons/56-61-Songs-BW.png') {
      this.nocturneOfShadow = 'icons/60-NocturneOfShadow.png';
    } else {
      this.nocturneOfShadow = 'icons/56-61-Songs-BW.png';
    }
  }

  togglePreludeOfLight() {
    if (this.preludeOfLight == 'icons/56-61-Songs-BW.png') {
      this.preludeOfLight = 'icons/61-PreludeOfLight.png';
    } else {
      this.preludeOfLight = 'icons/56-61-Songs-BW.png';
    }
  }
}
