import { Deserializable } from '../Utils/deserializable';
import { SparePartModel } from './SparePartModel';

export class RepairModel implements Deserializable<RepairModel> {

  repairId: number;
  carId: number;
  repairUserId: number;
  repairs: string;
  startOfRepair: Date;
  endOfRepair: Date;
  techCheck: Boolean;
  oil: Boolean;
  sparePart: SparePartModel;

  deserialize(input: any): RepairModel {
    Object.assign(this, input);
    this.sparePart = new SparePartModel(
      this.sparePart.partId,
      this.sparePart.repairId,
      this.sparePart.carId,
      this.sparePart.partNumber,
      this.sparePart.partDetail,
      this.sparePart.repairDate,
      this.sparePart.partUserId
    ).deserialize(input.sparePart);
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
    sparePart: SparePartModel) {
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
