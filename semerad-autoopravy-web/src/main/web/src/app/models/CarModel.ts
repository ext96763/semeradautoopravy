import { Deserializable } from '../Utils/deserializable';
import { RepairModel } from './RepairModel';

export class CarModel implements Deserializable<CarModel> {
  carId: number;
  carUserId: number;
  win: string;
  spz: string;
  km: number;
  carInfo: string;
  startDateError: Date;
  endDateError: Date;
  featureRepairDate: Date;
  doneWork: boolean;
  exist: Boolean;
  buyedParts: string;
  repairs: RepairModel;

  deserialize(input: any): CarModel {
    Object.assign(this, input);
    this.repairs = new RepairModel(
      this.repairs.repairId,
      this.repairs.carId,
      this.repairs.repairUserId,
      this.repairs.repairs,
      this.repairs.startOfRepair,
      this.repairs.endOfRepair,
      this.repairs.techCheck,
      this.repairs.oil,
      this.repairs.sparePart).deserialize(input.repairs);
    return this;
  }

  constructor(carId: number, carUserId: number, win: string, spz: string, km: number,
    carInfo: string, startDateError: Date, endDateError: Date, featureRepairDate: Date, doneWork: boolean,
    exist: Boolean, buyedParts: string, repairs: RepairModel) {
    this.carId = carId;
    this.carUserId = carUserId;
    this.win = win;
    this.spz = spz;
    this.km = km;
    this.carInfo = carInfo;
    this.startDateError = startDateError;
    this.endDateError = endDateError;
    this.featureRepairDate = featureRepairDate;
    this.doneWork = doneWork;
    this.exist = exist;
    this.buyedParts = buyedParts;
    this.repairs = repairs;
  }

}
