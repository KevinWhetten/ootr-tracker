import {Component, Input, OnInit} from '@angular/core';
import {EquipmentComponent} from './equipment/equipment.component';
import {MedallionsComponent} from './medallions/medallions.component';
import {OtherComponent} from './other/other.component';
import {ItemsComponent} from './items/items.component';
import {SongsComponent} from './songs/songs.component';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  standalone: true,
  imports: [
    EquipmentComponent,
    MedallionsComponent,
    OtherComponent,
    ItemsComponent,
    SongsComponent
  ]
})
export class TrackerComponent implements OnInit {
  trackerImage: SafeStyle;
  @Input() width: number = 750;

  protected styles = {
    'aspect-ratio': '1/1.1685167',
    'background-image': {} as SafeStyle,
    'background-repeat': 'no-repeat',
    'background-size': '100% 100%',
    'width': '100%',
  };

  constructor(private sanitization: DomSanitizer) {
    this.trackerImage = this.sanitization.bypassSecurityTrustStyle('url(\'background/ItemTracker.png\')');
    this.styles["background-image"] = this.trackerImage;
  }

  ngOnInit(): void {
  }

}
