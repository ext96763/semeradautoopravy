import { Deserializable } from '../utils/deserializable';
import { CarModel } from '../models/CarModel';

export class UserModel implements Deserializable<UserModel> {

  userId: number;
  userName: string;
  userForeName: string;
  userRc: number;
  userDetail: string;
  userPhone: number;
  userEmail: string;
  cars: CarModel;

  deserialize(input: any): UserModel {
    Object.assign(this, input);
    this.cars = new CarModel(
      this.cars.carId,
      this.cars.carUserId,
      this.cars.win,
      this.cars.spz,
      this.cars.km,
      this.cars.carInfo,
      this.cars.startDateError,
      this.cars.endDateError,
      this.cars.featureRepairDate,
      this.cars.doneWork,
      this.cars.exist,
      this.cars.buyedParts,
      this.cars.repairs).deserialize(input.cars);
    return this;
  }

  constructor(userId: number, userName: string, userForeName: string, userRc: number, userDetail: string,
    userPhone: number, userEmail: string, cars: CarModel) {
    this.userId = userId;
    this.userName = userName;
    this.userForeName = userForeName;
    this.userRc = userRc;
    this.userDetail = userDetail;
    this.userPhone = userPhone;
    this.userEmail = userEmail;
    this.cars = cars;
  }
}
