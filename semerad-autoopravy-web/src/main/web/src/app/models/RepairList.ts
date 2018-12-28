import { Deserializable } from '../Utils/deserializable';
import { Part } from './Part';

export class RepairList {

  repairId: number;
  carId: number;
  repairUserId: number;
  repairs: string;
  startOfRepair: Date;
  endOfRepair: Date;
  techCheck: Boolean;
  oil: Boolean;
  parts: number;

  constructor(repairId: number,
    carId: number,
    repairUserId: number,
    repairs: string,
    startOfRepair: Date,
    endOfRepair: Date,
    techCheck: Boolean,
    oil: Boolean,
    parts: number) {
    this.carId = carId;
    this.repairUserId = repairUserId;
    this.repairs = repairs;
    this.startOfRepair = startOfRepair;
    this.endOfRepair = endOfRepair;
    this.techCheck = techCheck;
    this.oil = oil;
    this.parts = parts;
  }

}
