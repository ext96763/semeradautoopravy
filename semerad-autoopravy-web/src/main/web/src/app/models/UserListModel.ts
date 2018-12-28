export class UserListModel {

  userId: number;
  userName: string;
  userForeName: string;
  userRc: number;
  userDetail: string;
  userPhone: number;
  userEmail: string;
  exists: boolean;
  startDate: Date;
  endDate: Date;
  carId: number;

  constructor(userId: number, userName: string, userForeName: string, userRc: number, userDetail: string,
    userPhone: number, userEmail: string, carId: number, exists: boolean, startDate: Date, endDate: Date) {
    this.userId = userId;
    this.userName = userName;
    this.userForeName = userForeName;
    this.userRc = userRc;
    this.userDetail = userDetail;
    this.userPhone = userPhone;
    this.userEmail = userEmail;
    this.exists = exists;
    this.startDate = startDate;
    this.endDate = endDate;
    this.carId = carId;
  }
}
