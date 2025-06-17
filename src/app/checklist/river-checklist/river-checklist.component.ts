import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-river-checklist',
  templateUrl: './river-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./river-checklist.component.scss']
})
export class RiverChecklistComponent implements OnInit {
  riverChecks = [
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Lower River',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Lower River',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Frogs in the Rain',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SongOfStorms]],
      checked: false
    },
    {
      name: 'Frog Fly Catching',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ZeldasLullaby], [Item.EponasSong], [Item.SariasSong], [Item.SunsSong], [Item.SongOfTime]],
      checked: false
    },
    {
      name: 'Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Wall Near Grotto',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]],
      checked: false
    },
    {
      name: 'Near Bridge',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]],
      checked: false
    },
    {
      name: 'Upper River',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Upper River Ladder',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Below Waterfall',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
  ] as Check[];
  domainChecks = [
    {
      name: 'Torch Run',
      type: CheckType.Chest,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Diving Game',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Frozen Waterfall',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot]],
      checked: false
    },
    {
      name: 'Throne Room',
      type: CheckType.GossipStone,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'King Zora Thawed',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
  ] as Check[];
  fountainChecks = [
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs], [Item.ZeldasLullaby]],
      checked: false
    },
    {
      name: 'Outside Fairy Fountain',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Hideout',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.SilverGauntlets]],
      checked: false
    },
    {
      name: 'Wall Near Branch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.RutosLetter], [Item.Boomerang]],
      checked: false
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RutosLetter]],
      checked: false
    },
    {
      name: 'Iceberg',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Icy Waters',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.IronBoots]],
      checked: false
    },
    {
      name: 'Near Ice Cavern',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
  ] as Check[];
  iceCavernChecks = [
    {
      name: 'Sheik',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
  ] as Check[];
  dungeonSource = '<img src=\x22icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';
  child: Era = Era.Child;
  adult: Era = Era.Adult;

  constructor() { }

  ngOnInit(): void {
  }

}
