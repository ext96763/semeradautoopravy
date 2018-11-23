import { Deserializable } from '../Utils/deserializable';
import { SparePartModel } from './SparePartModel';

export class RepairList {

  repairId: number;
  carId: number;
  repairUserId: number;
  repairs: string;
  startOfRepair: Date;
  endOfRepair: Date;
  techCheck: Boolean;
  oil: Boolean;
  sparePart: number;

  constructor(repairId: number,
    carId: number,
    repairUserId: number,
    repairs: string,
    startOfRepair: Date,
    endOfRepair: Date,
    techCheck: Boolean,
    oil: Boolean,
    sparePart: number) {
    this.carId = carId;
    this.repairUserId = repairUserId;
    this.repairs = repairs;
    this.startOfRepair = startOfRepair;
    this.endOfRepair = endOfRepair;
    this.techCheck = techCheck;
    this.oil = oil;
    this.sparePart = sparePart;
  }

}
