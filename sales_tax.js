var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {

  let result = {};

  // loop through each data (company)
  for (let data of salesData) {

    // calculate totalSales
    let totalSales = 0;
    for (let sales of data.sales) {
      totalSales += sales;
    }

    // calculate taxRate
    let province = data.province;
    let rate = taxRates[province];
    let totalTaxes = totalSales * rate;

    if (result[data.name] === undefined) {
      result[data.name] = {
        totalSales: totalSales,
        totalTaxes: totalTaxes,
      }
    } else {
      result[data.name].totalSales += totalSales;
      result[data.name].totalTaxes += totalTaxes;
    }
  }

  return result;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
