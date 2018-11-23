export class News {

    userId: number;
    carId: number;
    carName: string;
    userName: string;
    userForename: string;
    km: number;
    detailOfNews: string;
    techCheckDate: Date;
    techCheckKm: number;
    oilDate: Date;
    oilKm: number;
    oil: Boolean;
    techCheck: Boolean;
    filtersDate: Date;
    filtersKm: number;
    repairTillDate: Date;


  constructor(
    userId: number,
    carId: number,
    carName: string,
    userName: string,
    userForename: string,
    km: number,
    detailOfNews: string,
    techCheckDate: Date,
    techCheckKm: number,
    oilDate: Date,
    oilKm: number,
    oil: Boolean,
    techCheck: Boolean,
    filtersDate: Date,
    filtersKm: number,
    repairTillDate: Date
  )  {
    this.userId = userId;
    this.carId = carId;
    this.carName = carName;
    this.userName = userName;
    this.userForename = userForename;
    this.km = km;
    this.detailOfNews = detailOfNews;
    techCheckDate = techCheckDate;
    this.techCheckKm = techCheckKm;
    this.oilDate = oilDate;
    this.oilKm = oilKm;
    this.oil = oil;
    this.techCheck = techCheck;
    this.filtersDate = filtersDate;
    this.filtersKm = filtersKm;
    this.repairTillDate = repairTillDate;
  }

}
