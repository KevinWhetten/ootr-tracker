import {Component, OnInit} from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-ranch-checklist',
  templateUrl: './other-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./other-checklist.component.scss']
})
export class OtherChecklistComponent implements OnInit {
  ranchChecks = [
    {
      name: 'Talon\'s Chickens',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.Day,
      requirements: [],
      checked: false
    },
    {
      name: 'House',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Boomerang]],
      checked: false
    },
    {
      name: 'Malon',
      type: CheckType.Song,
      era: Era.Child,
      time: TimeOfDay.Day,
      requirements: [],
      checked: false
    },
    {
      name: 'Outer Fence',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Boomerang]],
      checked: false
    },
    {
      name: 'Back Building',
      type: CheckType.HeartPiece,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Inner Fence',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
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
  ] as Check[];
  fieldChecks = [
    {
      name: 'Near Kakariko Grotto',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot]],
      checked: false
    },
    {
      name: 'Boulder of Destiny',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Tektite Grotto',
      type: CheckType.HeartPiece,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.IronBoots, Item.GoldScale]],
      checked: false
    },
    {
      name: 'Near Gerudo Grotto',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot], [Item.FireArrows, Item.DinsFire]],
      checked: false
    },
    {
      name: 'Near Gerudo Grotto',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot], [Item.FireArrows, Item.DinsFire]],
      checked: false
    },
    {
      name: 'Grotto Scrub',
      type: CheckType.Scrub,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Open Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Trees Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Ocarina of Time',
      type: CheckType.Song,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.KokiriEmerald], [Item.GoronRuby], [Item.ZoraSapphire]],
      checked: false
    },
  ] as Check[];
  lakeChecks = [
    {
      name: 'Gerudo Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Lab Diving',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.GoldScale, Item.IronBoots], [Item.GoldScale, Item.Hookshot]],
      checked: false
    },
    {
      name: 'Lab Crate',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.IronBoots]],
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
      name: 'Lab Roof',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle, Item.ScarecrowSong], [Item.Bottle, Item.Hookshot]],
      checked: false
    },
    {
      name: 'Lab Wall',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.Boomerang]],
      checked: false
    },
    {
      name: 'Southwest Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Tall Tree',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Longshot]],
      checked: false
    },
    {
      name: 'Shoot the Sun',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.Day,
      requirements: [[Item.Bow], [Item.Longshot], [Item.ScarecrowSong, Item.WaterTempleMedallion]],
      checked: false
    },
    {
      name: 'Sun Island',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [],
      checked: false
    },
    {
      name: 'Southeast Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Fishing - Child',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Fishing - Adult',
      type: CheckType.Game,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Scarecrow Song',
      type: CheckType.Song,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Underwater Bottle',
      type: CheckType.HeartPiece,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SilverScale, Item.GoldScale]],
      checked: false
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';

  child: Era = Era.Child;
  adult: Era = Era.Adult;

  constructor() { }

  ngOnInit(): void {
  }

}
