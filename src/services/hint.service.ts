import {Injectable} from '@angular/core';
import {Boss} from '../models/boss'
import {Location} from "../models/location";

@Injectable({
  providedIn: 'root'
})
export class HintService {
  bosses = [{name: 'Gohma', color: 'green'},
    {name: 'King Dodongo', color: 'red'},
    {name: 'Barrinade', color: 'blue'},
    {name: 'Phantom Ganon', color: 'green'},
    {name: 'Volvagia', color: 'red'},
    {name: 'Morpha', color: 'blue'},
    {name: 'Bongo Bongo', color: 'purple'},
    {name: 'Twinrova', color: 'orange'}] as Boss[];
  items = ['Junk', 'Nice Item', 'Required Item'];
  locations = [
    {
      name: 'Kokiri Forest',
      color: 'green',
      regions: [
        {name: 'Kokiri Forest', color: 'green'},
        {name: 'Great Deku Tree', color: 'green'},
        {name: 'Lost Woods', color: 'green'},
        {name: 'Sacred Forest Meadow', color: 'green'},
        {name: 'Forest Temple', color: 'green'}
      ],
    },
    {
      name: 'Death Mountain',
      color: 'red',
      regions: [
        {name: 'Goron City', color: 'red'},
        {name: 'Dodongo\'s Cavern', color: 'red'},
        {name: 'Death Mountain Trail', color: 'red'},
        {name: 'Death Mountain Crater', color: 'red'},
        {name: 'Fire Temple', color: 'red'}
      ]
    },
    {
      name: 'Zora\'s River',
      color: 'blue',
      regions: [
        {name: 'Zora River', color: 'blue'},
        {name: 'Zora\'s Domain', color: 'blue'},
        {name: 'Zora Fountain', color: 'blue'},
        {name: 'Jabu Jabu\'s Belly', color: 'blue'},
        {name: 'Ice Cavern', color: 'light-blue'}
      ]
    },
    {
      name: 'Hyrule Castle',
      color: 'black',
      regions: [
        {name: 'Castle Town', color: 'black'},
        {name: 'Hyrule Castle', color: 'black'},
        {name: 'Ganon\'s Castle', color: 'black'},
        {name: 'Inside Ganon\'s Castle', color: 'black'}
      ]
    },
    {
      name: 'Kakariko Village',
      color: 'purple',
      regions: [
        {name: 'Kakariko Village', color: 'purple'},
        {name: 'Bottom of the Well', color: 'purple'},
        {name: 'Graveyard', color: 'purple'},
        {name: 'Shadow Temple', color: 'purple'}
      ]
    },
    {
      name: 'Gerudo Desert',
      color: 'orange',
      regions: [
        {name: 'Gerudo Valley', color: 'orange'},
        {name: 'Gerudo Fortress', color: 'orange'},
        {name: 'Gerudo Training Grounds', color: 'orange'},
        {name: 'Haunted Wasteland', color: 'orange'},
        {name: 'Desert Colossus', color: 'orange'},
        {name: 'Spirit Temple', color: 'orange'}
      ]
    },
    {
      name: 'Other',
      color: 'black',
      regions: [
        {name: 'Hyrule Field', color: 'green'},
        {name: 'Lon Lon Ranch', color: 'yellow'},
        {name: 'Lake Hylia', color: 'blue'},
        {name: 'Water Temple', color: 'blue'}
      ]
    }
  ];
  itemLocations = [
    {
      name: 'Songs',
      regions: [
        {name: 'Ocarina of Time', color: 'yellow'},
        {name: 'Composer Brothers', color: 'purple'},
        {name: 'In a Meadow', color: 'green'},
        {name: 'Monument to Time', color: 'gray'},
        {name: 'Crater\'s Melody', color: 'red'},
        {name: 'Frozen Cavern', color: 'light-blue'},
        {name: 'Ravaged Village', color: 'purple'},
        {name: 'Beyond the Wasteland', color: 'orange'}
      ],
    },
    {
      name: 'Overworld',
      regions: [
        {name: 'Skull Kid', color: 'green'},
        {name: 'Target in the Woods', color: 'green'},
        {name: 'Darunia\'s Dance', color: 'red'},
        {name: 'Goron City Hammer - Maze Left', color: 'red'},
        {name: 'Goron Pottery', color: 'red'},
        {name: 'Frogs in a Storm', color: 'blue'},
        {name: 'Unfreezing King Zora', color: 'light-blue'},
        {name: 'Under the Icy Waters', color: 'light-blue'},
        {name: 'Treasure Chest Game', color: 'gray'},
        {name: 'Fairy outside Hyrule Castle', color: 'gray'},
        {name: 'Fairy outside Ganon\'s Castle', color: 'gray'},
        {name: '20 Skulltulas', color: 'purple'},
        {name: '30 Skulltulas', color: 'purple'},
        {name: '40 Skulltulas', color: 'purple'},
        {name: '50 Skulltulas', color: 'purple'},
        {name: 'Collecting Cuccos', color: 'purple'},
        {name: 'Sun\'s Song grave', color: 'purple'},
        {name: 'Flames in the Royal Tomb', color: 'purple'},
        {name: 'Horseback Archery - 1500', color: 'orange'},
        {name: 'Gerudo Valley Hammer chest', color: 'orange'},
        {name: 'Beneath the Sands, flames reveal', color: 'orange'},
        {name: 'Diving Experiment', color: 'blue'},
        {name: 'Shooting the Sun', color: 'blue'}
      ]
    },
    {
      name: 'Dungeons',
      regions: [
        {name: 'Jabu Jabu Boomerang Chest', color: 'blue'},
        {name: 'Pierre atop the Fire Temple', color: 'red'},
        {name: 'Flare Dancer atop the volcano', color: 'red'},
        {name: 'River in the Water Temple', color: 'blue'},
        {name: 'Central pillar of Water Temple', color: 'blue'},
        {name: 'Rolling boulders in the Water Temple', color: 'blue'},
        {name: 'Final treasure of Ice Cavern', color: 'light-blue'},
        {name: 'Giant pot in the Shadow Temple', color: 'purple'},
        {name: 'Thieves\' Underwater Training', color: 'orange'},
        {name: 'The Thieves\' Training - Final', color: 'orange'},
        {name: 'Sought by Nabooru', color: 'orange'},
        {name: 'Colossus\'s Left Hand', color: 'orange'},
        {name: 'Like-like in Ganon\'s Shadow Trial', color: 'gray'}
      ]
    }
  ];


  constructor() {
  }
}
