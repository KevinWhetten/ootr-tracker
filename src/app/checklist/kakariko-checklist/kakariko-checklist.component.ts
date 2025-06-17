import {Component, OnInit} from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-kakariko-checklist',
  templateUrl: './kakariko-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./kakariko-checklist.component.scss']
})
export class KakarikoChecklistComponent implements OnInit {
  villageChecks = [
    {
      name: 'Burning Kakariko',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ForestMedallion], [Item.FireMedallion], [Item.WaterMedallion]],
      checked: false
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Front Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Bazaar',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Ladder',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Bombchus, Item.Slingshot]],
      checked: false
    },
    {
      name: 'Man on Rooftop',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Rear Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Windmill Song',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Ocarina]],
      checked: false
    },
    {
      name: 'Windmill',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Chickens',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.Day,
      requirements: [],
      checked: false
    },
    {
      name: 'Anju',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.Day,
      requirements: [],
      checked: false
    },
    {
      name: 'Impa\'s House',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Bricks',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Shooting Gallery',
      type: CheckType.Game,
      era: Era.Adult,
      time: TimeOfDay.Day,
      requirements: [[Item.Bow]],
      checked: false
    },
    {
      name: '10 Skulltulas',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: '20 Skulltulas',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: '30 Skulltulas',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: '40 Skulltulas',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: '50 Skulltulas',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'House of Skulltula',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Impa\'s Roof',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot]],
      checked: false
    },
  ] as Check[];
  graveyardChecks = [
    {
      name: 'Dampe Gravedigging',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Shield Grave',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Dampe Race (x2)',
      type: CheckType.Game,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [],
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
      name: 'Crate',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle, Item.Longshot], [Item.MagicBeans, Item.Longshot]],
      checked: false
    },
    {
      name: 'Royal Tomb Torches',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ZeldasLullaby]],
      checked: false
    },
    {
      name: 'Royal Tomb Song',
      type: CheckType.Song,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ZeldasLullaby]],
      checked: false
    },
    {
      name: 'Redead Grave',
      type: CheckType.Game,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SunsSong]],
      checked: false
    },
    {
      name: 'Wall',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Boomerang]],
      checked: false
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.NocturneOfShadow]],
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
