export class Part {

  partId: number;
  repairId: number;
  carId: number;
  partNumber: number;
  partDetail: String;
  repairDate: Date;
  partUserId: number;

  constructor(partId: number,
    repairId: number,
    carId: number,
    partNumber: number,
    partDetail: String,
    repairDate: Date,
    partUserId: number) {
    this.repairId = repairId;
    this.carId = carId;
    this.partNumber = partNumber;
    this.partDetail = partDetail;
    this.repairDate = repairDate;
    this.partUserId = partUserId;
  }

}
