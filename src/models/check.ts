import {CheckType} from "./check-type";
import {Era} from "./era";
import {TimeOfDay} from "./timeOfDay";
import {Item} from "./item";

export interface Check {
  name: string,
  type: CheckType,
  era: Era,
  time: TimeOfDay,
  requirements: number[][],
  checked: boolean
}
