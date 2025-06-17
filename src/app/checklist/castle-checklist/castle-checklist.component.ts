import {Component, OnInit} from '@angular/core';
import {CheckType} from "../../../models/check-type";
import {Check} from "../../../models/check";
import {TimeOfDay} from "../../../models/timeOfDay";
import {Era} from "../../../models/era";
import {Item} from '../../../models/item';
import {ListComponent} from '../list/list.component';
import {TrialsListComponent} from '../dungeon-list/trials-list/trials-list.component';

@Component({
  selector: 'app-castle-checklist',
  templateUrl: './castle-checklist.component.html',
  imports: [
    ListComponent,
    TrialsListComponent
  ],
  styleUrls: ['./castle-checklist.component.scss']
})
export class CastleChecklistComponent implements OnInit {
  townChecks = [
    {
      name: 'Guard House',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Poe Collector',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bottle]]
    },
    {
      name: 'Bombchu Bowling (x2)',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.Day,
      requirements: [[Item.Bombs]]
    },
    {
      name: 'Shooting Gallery',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.Day,
      requirements: {}
    },
    {
      name: 'Treasure Chest Game',
      type: CheckType.Game,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: [[Item.LensOfTruth]]
    },
    {
      name: 'Richard',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.Night,
      requirements: {}
    },
  ] as Check[];
  templeChecks = [
    {
      name: 'Gossip Stone 1',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Gossip Stone 2',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Gossip Stone 3',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Gossip Stone 4',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Sheik',
      type: CheckType.Song,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ForestMedallion]]
    },
    {
      name: 'Zelda',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.ShadowMedallion],[Item.SpiritMedallion]]
    },
  ] as Check[];
  groundsChecks = [
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Gossip Stone 1',
      type: CheckType.GossipStone,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs],[Item.ZeldasLullaby]]
    },
    {
      name: 'Gossip Stone 2',
      type: CheckType.GossipStone,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: {}
    },
    {
      name: 'Storms Grotto',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SongOfStorms]]
    },
    {
      name: 'Storms Grotto',
      type: CheckType.GossipStone,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.SongOfStorms]]
    },
  ] as Check[];
  ganonChecks = [
    {
      name: 'Stone Archway',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot]]
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.GoldGauntlets],[Item.ZeldasLullaby]]
    }
  ] as Check[];
  child: Era = Era.Child;
  adult: Era = Era.Adult;

  constructor() {
  }

  ngOnInit(): void {
  }
}
