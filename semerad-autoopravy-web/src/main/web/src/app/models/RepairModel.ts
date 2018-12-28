import { Deserializable } from '../Utils/deserializable';
import { Part } from './Part';

export class RepairModel implements Deserializable<RepairModel> {

  repairId: number;
  carId: number;
  repairUserId: number;
  repairs: string;
  startOfRepair: Date;
  endOfRepair: Date;
  techCheck: Boolean;
  oil: Boolean;
  parts: Part;

  deserialize(input: any): RepairModel {
    Object.assign(this, input);
    this.parts = new Part(
      this.parts.partId,
      this.parts.repairId,
      this.parts.carId,
      this.parts.partNumber,
      this.parts.partDetail,
      this.parts.repairDate,
      this.parts.partUserId
    ).deserialize(input.parts);
    return this;
  }

  constructor(repairId: number,
    carId: number,
    repairUserId: number,
    repairs: string,
    startOfRepair: Date,
    endOfRepair: Date,
    techCheck: Boolean,
    oil: Boolean,
    parts: Part) {
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
