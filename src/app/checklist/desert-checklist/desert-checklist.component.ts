import {Component, OnInit} from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-desert-checklist',
  templateUrl: './desert-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./desert-checklist.component.scss']
})
export class DesertChecklistComponent implements OnInit {
  valleyChecks = [
    {
      name: 'Entrance Waterfall',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Boomerang]]
    },
    {
      name: 'Crate',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]]
    },
    {
      name: 'Near Waterfall',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Behind Waterfall',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Behind Tent',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]]
    },
    {
      name: 'Stone Pillar',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]]
    },
    {
      name: 'Behind Rocks',
      type: CheckType.Chest,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.MegatonHammer]]
    },
  ] as Check[];
  fortressChecks = [
    {
      name: 'Back Wall',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]]
    },
    {
      name: 'Rooftop',
      type: CheckType.Chest,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.HoverBoots, Item.Longshot],[Item.HoverBoots, Item.Longshot, Item.ScarecrowSong]]
    },
    {
      name: 'Horseback Archery 1000',
      type: CheckType.Game,
      era: Era.Adult,
      time: TimeOfDay.Day,
      requirements: [[Item.EponasSong],[Item.Bow]]
    },
    {
      name: 'Horseback Archery 1500',
      type: CheckType.Game,
      era: Era.Adult,
      time: TimeOfDay.Day,
      requirements: [[Item.EponasSong],[Item.Bow]]
    },
    {
      name: 'Horseback Archery Target',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Longshot]]
    },
  ] as Check[];
  wastelandChecks = [
    {
      name: 'Structure',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot, Item.Boomerang], [Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots]]
    },
    {
      name: 'Structure Torches',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.FireArrows, Item.DinsFire], [Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots]]
    },
  ] as Check[];
  colossusChecks = [
    {
      name: 'Sheik Song',
      type: CheckType.Song,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots]],
      checked: false
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bottle]],
      checked: false
    },
    {
      name: 'South of Spirit Temple',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], Item.HoverBoots],
      checked: false
    },
    {
      name: 'Plateau',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.MagicBeans, Item.Longshot]],
      checked: false
    },
    {
      name: 'Stone Arch',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.MagicBeans]],
      checked: false
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bombs]],
      checked: false
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Hookshot, Item.Longshot]],
      checked: false
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';
  adult: Era = Era.Adult;

  constructor() {
  }

  ngOnInit(): void {
  }

}
