import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  currency:any=[
    {name:"Indian rupee",
    pic:"https://upload.wikimedia.org/wikipedia/commons/f/fa/India%2C_200_INR%2C_2018%2C_obverse.jpg",
    code:"INR",
    inr:"1"

  },
    {name:"United States dollar",
    pic:"https://cdn.corporatefinanceinstitute.com/assets/united-states-dollar-usd.jpeg",
    code:"USD",
    inr:"82.6"

  },
  {name:"Euro",
    pic:"https://image.shutterstock.com/image-photo/fragment-part-20-euro-banknote-260nw-1615009684.jpg",
    code:"EUR",
    inr:"82.6"
  },
  {name:"Japanese yen",
    pic:"https://image.shutterstock.com/image-photo/japanese-yen-note-260nw-130151843.jpg",
    code:"JPY",
    inr:".56"

  },
  
  {name:"Canadian dollar",
    pic:"https://www.leftovercurrency.com/app/uploads/2017/04/10-canadian-dollars-banknote-frontier-series-obverse-1.jpg",
    code:"CAD",
    inr:"60.6"

  },
  

  ]
}
