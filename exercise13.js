function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    if (shoppers.length === 0){
        return shoppers
    }
    // var dataPembeli = ['name', 'product','amount']
    // var daftarTrans = []
    var bill = []
    // var stockSisa = 0
    // you can only write your code here!
    for(var i = 0; i<listBarang.length; i++){
        // console.log(listBarang[i])
        var splitBill = {}
        var pembeli = []
        var jumlah = 0
        
        for(var j = 0; j<shoppers.length; j++){
            
            var beli = listBarang[i]
            var trans = shoppers[j]
            var stock = 0
            if(beli[0] === trans.product && beli[2]-trans.amount >= 0){
                splitBill.product = beli[0]
                stock += beli[2]-trans.amount
                // console.log(stock, 'stock gudang', beli[2], trans.amount)
                beli.splice(2,1, beli[2] - trans.amount)
                jumlah += trans.amount * beli[1]
                
                // console.log(trans.name , ' --- ', trans.product,beli[2])

                // 
                pembeli.push(trans.name)
                

                
            }
            else{
                splitBill.product = beli[0]
                
                
            }
            
            
        }
        
        // console.log(beli[2])
        // console.log(pembeli)
        // console.log(jumlah, 'beli')
        // console.log(stockSisa)
             
            splitBill.shoppers = pembeli
            splitBill.leftOver = beli[2]
            splitBill.totalProfit = jumlah
            bill.push(splitBill)
        
        // console.log('-----------------------------------------')
    }
    return bill
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  console.log('----------------------------------------------------------')

  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log('----------------------------------------------------------')
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log('--------------------------------------------')

  console.log(countProfit([])); //[]