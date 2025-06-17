import {Component, OnInit} from '@angular/core';
import {Check} from "../../../models/check";
import {CheckType} from "../../../models/check-type";
import {Era} from "../../../models/era";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Item} from "../../../models/item";
import {ListComponent} from '../list/list.component';
import {DungeonListComponent} from '../dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-forest-checklist',
  templateUrl: './forest-checklist.component.html',
  imports: [
    ListComponent,
    DungeonListComponent
  ],
  styleUrls: ['./forest-checklist.component.scss']
})
export class ForestChecklistComponent implements OnInit {
  kokiriChecks = [
    {
      name: 'Mido\'s House (x4)',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: []
    },
    {
      name: 'Know-It-All House',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: []
    },
    {
      name: 'Kokiri Sword',
      type: CheckType.Chest,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: []
    },
    {
      name: 'House of Twins',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]]
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]]
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SongOfStorms]]
    },
    {
      name: 'Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: []
    },
  ] as Check[];
  dekuTreeChecks = [
    {
      name: 'Gossip Stone 1',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Gossip Stone 2',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
  ] as Check[];
  lostWoodsChecks = [
    {
      name: 'Bridge Scrub',
      type: CheckType.Scrub,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Bridge Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: ' Bridge Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
    {
      name: 'Skullkid',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SariasSong]],
      checked: false
    },
    {
      name: 'Target',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Slingshot]],
      checked: false
    },
    {
      name: 'Ocarina Game',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Ocarina]],
      checked: false
    },
    {
      name: 'Goron Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Skull Mask',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SkullMask]],
      checked: false
    },
    {
      name: 'Theater Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]],
      checked: false
    },
    {
      name: 'Theater Bean Ride',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Bottle]],
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
  ] as Check[];
  sacredForestMeadowChecks = [
    {
      name: 'Wolfos Grotto',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer]],
      checked: false
    },
    {
      name: 'Saria',
      type: CheckType.Song,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Sheik',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Meadow Gossip Stone',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Maze Wall',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.Hookshot]],
      checked: false
    },
    {
      name: 'Maze Gossip Stone 1',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
    {
      name: 'Maze Gossip Stone 2',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [],
      checked: false
    },
  ] as Check[];
  dungeonSource = '<img src=\x22assets/icons/dungeon.png\x22 style\x22height: 16px;\x22/> ';
  child: Era = Era.Child;
  adult: Era = Era.Adult;

  constructor() {
  }

  ngOnInit(): void {
  }

}
