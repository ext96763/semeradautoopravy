
export class CarList {
  carId: number;
  carUserId: number;
  carName: string;
  win: string;
  spz: string;
  km: number;
  carInfo: string;
  startDateError: Date;
  endDateError: Date;
  featureRepairDate: Date;
  doneWork: string;
  exist: Boolean;
  buyedParts: string;
  repairs: number;

  constructor(carId: number, carUserId: number, carName: string, win: string, spz: string, km: number,
    carInfo: string, startDateError: Date, endDateError: Date, featureRepairDate: Date, doneWork: string,
    exist: Boolean, buyedParts: string, repairs: number) {
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
