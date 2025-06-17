import { Component, OnInit } from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-mountain-checklist',
  templateUrl: './mountain-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./mountain-checklist.component.scss']
})
export class MountainChecklistComponent implements OnInit {
  trailChecks = [
    {
      name: 'Lower Bomb Wall',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
    {
      name: 'Upper Bomb Wall',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Above DC',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Above DC Boulder',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SongOfStorms]],
      checked: false
    },
    {
      name: 'Before Climb to Summit',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Climb to Summit',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.ZeldasLullaby]],
      checked: false
    },
    {
      name: 'Biggoron',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ClaimCheck]],
      checked: false
    },
  ] as Check[];
  dodongoChecks = [
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer, Item.GoronBracer]],
      checked: false
    },
  ] as Check[];
  goronCityChecks = [
    {
      name: 'Center Platform',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Maze - Center (x2)',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer, Item.SilverGauntlets]],
      checked: false
    },
    {
      name: 'Maze - Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer, Item.SilverGauntlets]],
      checked: false
    },
    {
      name: 'Maze - Crate',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs]],
      checked: false
    },
    {
      name: 'Maze - Left',
      type: CheckType.Chest,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.MegatonHammer, Item.SilverGauntlets]],
      checked: false
    },
    {
      name: 'Link the Goron',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.Bow, Item.GoronBracer]],
      checked: false
    },
    {
      name: 'Hotrod Goron',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs]],
      checked: false
    },
    {
      name: 'Medigoron Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer, Item.GoronBracer]],
      checked: false
    },
    {
      name: 'Darunia',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ZeldasLullaby], [Item.SariasSong]],
      checked: false
    },
    {
      name: 'Goron Pot',
      type: CheckType.HeartPiece,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ZeldasLullaby, Item.DinsFire], [Item.GoronBracer, Item.Bombs]],
      checked: false
    },
  ] as Check[];
  craterChecks = [
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
    {
      name: 'Top of Volcano',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle, Item.HoverBoots]],
      checked: false
    },
    {
      name: 'Sheik',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot, Item.HoverBoots, Item.BoleroOfFire]],
      checked: false
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.MegatonHammer], [Item.ZeldasLullaby]],
      checked: false
    },
    {
      name: 'Wall Alcove',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs]],
      checked: false
    },
    {
      name: 'Crate',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
  ] as Check[];
  dungeonSource = '<img src=\x22icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';
  adult: Era = Era.Adult;

  constructor() { }

  ngOnInit(): void {
  }

}
