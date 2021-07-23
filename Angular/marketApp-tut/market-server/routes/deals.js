var express = require('express');
var router = express.Router();

/* GET deals listing. */
router.get('/', function(req, res, next) {
  let jsonRes = {
    "handsetCards": [
      { imageName:'brushes', title: '10% off on brushes', cols: 2, rows: 1 },
      { imageName:'lipstick', title: '2 for 1 deals on lipsticks storewide', cols: 2, rows: 1 },
      { imageName:'makeup', title: 'Flash sales in famous makeup brands!', cols: 2, rows: 1 },
      { imageName:'skinCare', title: 'Feel revitalised with brand new skin care', cols: 2, rows: 1 },
    ],
    "webCards": [
      { imageName:'brushes', title: '10% off on brushes', cols: 2, rows: 1 },
      { imageName:'lipstick', title: '2 for 1 deals on lipsticks storewide', cols: 1, rows: 1 },
      { imageName:'makeup', title: 'Flash sales in famous makeup brands', cols: 1, rows: 2 },
      { imageName:'skinCare', title: '5% off brand new skin care', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonRes)
});

module.exports = router;
