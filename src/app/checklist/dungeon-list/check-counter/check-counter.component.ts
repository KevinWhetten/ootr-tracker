import {Component, Input, OnInit} from '@angular/core';
import {CheckType} from "../../../../models/check-type";

@Component({
  selector: 'app-check-counter',
  templateUrl: './check-counter.component.html',
  styleUrls: ['./check-counter.component.scss']
})
export class CheckCounterComponent implements OnInit {
  @Input() num = 0;
  @Input() type = CheckType.Chest;
  @Input() name = this.getType();
  current = 0;
  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseChecks() {
    if (this.current < this.num) {
      this.current++;
    }
    if (this.current == this.num) {
      this.checked = true;
    }
  }

  reduceChecks($event: MouseEvent) {
    $event.preventDefault();
    if (this.current > 0) {
      this.current--;
      this.checked = false;
    }
  }

  getType() {
    if (this.type == CheckType.Chest) {
      return 'Chests';
    } else if (this.type == CheckType.Skulltula) {
      return 'Skulltulas';
    }
    return '';
  }
}
