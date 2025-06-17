import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss'],
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class ItemSelectionComponent implements OnInit {
  options = ['Junk Item', 'Nice Item', 'Required Item'];
  color = 'gray';

  constructor() {
  }

  ngOnInit(): void {
  }

}
