import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

interface boss {
  name: string,
  color: string
}

@Component({
  selector: 'app-boss-selection',
  templateUrl: './boss-selection.component.html',
  styleUrls: ['./boss-selection.component.scss'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class BossSelectionComponent implements OnInit {
  bosses = [{name: 'Gohma', color: 'green'},
    {name: 'King Dodongo', color: 'red'},
    {name: 'Barrinade', color: 'blue'},
    {name: 'Phantom Ganon', color: 'green'},
    {name: 'Volvagia', color: 'red'},
    {name: 'Morpha', color: 'blue'},
    {name: 'Bongo Bongo', color: 'purple'},
    {name: 'Twinrova', color: 'orange'}] as boss[];

  color: string = 'gray';

  constructor() {
  }

  ngOnInit(): void {
  }

}
