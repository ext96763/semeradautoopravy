export class UserListModel {

  userId: number;
  userName: string;
  userForeName: string;
  userRc: number;
  userDetail: string;
  userPhone: number;
  userEmail: string;
  carId: number;

  constructor(userId: number, userName: string, userForeName: string, userRc: number, userDetail: string,
    userPhone: number, userEmail: string, carId: number) {
    this.userId = userId;
    this.userName = userName;
    this.userForeName = userForeName;
    this.userRc = userRc;
    this.userDetail = userDetail;
    this.userPhone = userPhone;
    this.userEmail = userEmail;
    this.carId = carId;
  }
}
