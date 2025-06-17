import { Injectable } from '@angular/core';
import {CheckType} from "../models/check-type";
import {Era} from "../models/era";
import {TimeOfDay} from "../models/timeOfDay";
import {Item} from "../models/item";
import {Check} from "../models/check";

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  // Forest Checks
  kokiriForestChecks = [
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
      requirements: [[Item.Hookshot, Item.Longshot]]
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
      requirements: [[Item.Hookshot, Item.Longshot]],
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
  // Mountain Checks
  deathMountainTrailChecks = [
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
  dodongosCavernChecks = [
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
  deathMountainCraterChecks = [
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
  // River Checks
  zorasRiverChecks = [
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
  zorasDomainChecks = [
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
  zorasFountainChecks = [
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
  // Castle Checks
  castleTownChecks = [
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
  templeOfTimeChecks = [
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
  hyruleCastleGroundsChecks = [
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
  outsideGanonsCastleChecks = [
    {
      name: 'Stone Archway',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot,Item.Longshot]]
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.GoldGauntlets],[Item.ZeldasLullaby]]
    }
  ] as Check[];
  // Kakariko Village Checks
  kakarikoVillageChecks = [
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
  kakarikoGraveyardChecks = [
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
      type: CheckType.Chest,
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
  // Desert Checks
  gerudoValleyChecks = [
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
  gerudoFortressChecks = [
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
      requirements: [[Item.HoverBoots, Item.Hookshot, Item.Longshot],[Item.HoverBoots, Item.Longshot, Item.ScarecrowSong]]
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
      requirements: [[Item.Hookshot, Item.Longshot]]
    },
  ] as Check[];
  hauntedWastelandChecks = [
    {
      name: 'Structure',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Hookshot, Item.Boomerang]]
    },
    {
      name: 'Structure Torches',
      type: CheckType.Chest,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.FireArrows, Item.DinsFire]]
    },
  ] as Check[];
  desertColossusChecks = [
    {
      name: 'Sheik Song',
      type: CheckType.Song,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots]],
      checked: false
    },
    {
      name: 'Bean Patch',
      type: CheckType.Skulltula,
      era: Era.Child,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bottle]],
      checked: false
    },
    {
      name: 'South of Spirit Temple',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots]],
      checked: false
    },
    {
      name: 'Plateau',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bottle]],
      checked: false
    },
    {
      name: 'Stone Arch',
      type: CheckType.HeartPiece,
      era: Era.Adult,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bottle]],
      checked: false
    },
    {
      name: 'Great Fairy',
      type: CheckType.NPC,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Bombs]],
      checked: false
    },
    {
      name: 'Tree',
      type: CheckType.Skulltula,
      era: Era.Adult,
      time: TimeOfDay.Night,
      requirements: [[Item.RequiemOfSpirit, Item.LensOfTruth],[Item.RequiemOfSpirit, Item.Longshot, Item.HoverBoots], [Item.Hookshot, Item.Longshot]],
      checked: false
    },
  ] as Check[];
  // Other Checks
  lonLonRanchChecks = [
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
  hyruleFieldChecks = [
    {
      name: 'Near Kakariko Grotto',
      type: CheckType.Skulltula,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot, Item.Longshot]],
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
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot, Item.Longshot], [Item.FireArrows, Item.DinsFire]],
      checked: false
    },
    {
      name: 'Near Gerudo Grotto',
      type: CheckType.GossipStone,
      era: Era.NoRequirement,
      time: TimeOfDay.NoRequirement,
      requirements: [[Item.Bombs, Item.MegatonHammer], [Item.Boomerang, Item.Hookshot, Item.Longshot], [Item.FireArrows, Item.DinsFire]],
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
  lakeHyliaChecks = [
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
      requirements: [[Item.GoldScale, Item.IronBoots], [Item.GoldScale, Item.Hookshot, Item.Longshot]],
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

  constructor() { }
}
