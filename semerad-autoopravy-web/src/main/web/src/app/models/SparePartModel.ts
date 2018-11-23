import { Deserializable } from '../Utils/deserializable';

export class SparePartModel {

  partId: number;
  repairId: number;
  carId: number;
  partNumber: number;
  partDetail: string;
  repairDate: Date;
  partUserId: number;

  deserialize(input: any): SparePartModel {
    Object.assign(this, input);
    return this;
  }

  constructor(
    partId: number,
    repairId: number,
    carId: number,
    partNumber: number,
    partDetail: string,
    repairDate: Date,
    partUserId: number) {
    this.partId = partId;
    this.repairId = repairId;
    this.carId = carId;
    this.partNumber = partNumber;
    this.partDetail = partDetail;
    this.repairDate = repairDate;
    this.partUserId = partUserId;
  }

}
