const stockList = [
  {
    name: "VTI",
    price: 300,
    change_percent : 0
  },
  {
    name: "VYM",
    price: 1128,
    change_percent : 0
  },
  {
    name: "VXUS",
    price: 13000,
    change_percent : 0
  },
  {
    name: "QQQ",
    price: 0,
    change_percent : 0
  },{
    name: "MSFT",
    price: 300,
    change_percent : 0
  },
  {
    name: "GPRO",
    price: 1128,
    change_percent : 0
  },
  {
    name: "FB",
    price: 13000,
    change_percent : 0
  },
  {
    name: "DIS",
    price: 0,
    change_percent : 0
  },{
    name: "BABA",
    price: 300,
    change_percent : 0
  },
  {
    name: "PAYPAL",
    price: 1128,
    change_percent : 0
  },
  {
    name: "INOVA",
    price: 13000,
    change_percent : 0
  },
  {
    name: "INVESQ",
    price: 0,
    change_percent : 0
  },
  {
    name: "MMM",
    price: 300,
    change_percent : 0
  },
  {
    name: "WMT",
    price: 1128,
    change_percent : 0
  },
  {
    name: "TGT",
    price: 13000,
    change_percent : 0
  },
  {
    name: "XOM",
    price: 0,
    change_percent : 0
  },
  {
    name: "BURL",
    price: 300,
    change_percent : 0
  },
  {
    name: "AMC",
    price: 1128,
    change_percent : 0
  },
  {
    name: "PTON",
    price: 13000,
    change_percent : 0
  },
  {
    name: "AMD",
    price: 0,
    change_percent : 0
  },{
    name: "AMZN",
    price: 300,
    change_percent : 0
  },
  {
    name: "NTFX",
    price: 1128,
    change_percent : 0
  },
  {
    name: "BTC",
    price: 13000,
    change_percent : 0
  },
  {
    name: "SBUX",
    price: 0,
    change_percent : 0
  },
  {
    name: "SBIN",
    price: 300,
    change_percent : 0
  },
  {
    name: "INFY",
    price: 1128,
    change_percent : 0
  },
  {
    name: "HUL",
    price: 13000,
    change_percent : 0
  },
  {
    name: "TATAPOWER",
    price: 0,
    change_percent : 0
  },{
    name: "PYZER",
    price: 300,
    change_percent : 0
  },
  {
    name: "TESLA",
    price: 1128,
    change_percent : 0
  },
  {
    name: "AAPC",
    price: 13000,
    change_percent : 0
  },
  {
    name: "FORD",
    price: 0,
    change_percent : 0
  }
];

const updateStockList = (stockName) => {
    let stock = stockList.filter( stock => stock.name === stockName )[0];
    let newVal = (Math.random() * 10);
    if(newVal > 5){
        newVal += stock.price;
    }
    else{
        newVal -= stock.price;
    }
    newVal = Math.abs(newVal);
    let percentageDif = ((newVal - stock.price) / 100);
    stock.price = newVal;
    stock.change_percent = percentageDif;
    return stock;
};

module.exports = {
  stockList,
  updateStockList,
};