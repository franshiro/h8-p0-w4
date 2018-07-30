function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000

    var dataProduk = [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000],['Sweater Uniklooh', 175000],['Casing Handphone', 50000]]
    
    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member'

    }
    else if(memberId !== '' && money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    else if(memberId !== '' ){
      var dataPembelian = {
        memberId : memberId,
        money : money
      }
      var tampung = []
      for(var i = 0; i < dataProduk.length ; i++){
        var harga = dataProduk[i][1]
        var namaProduk = dataProduk[i][0]
        // console.log(dataProduk[i])

        if(money >= harga){
          
          money -= harga
          tampung.push(namaProduk)
          
        }
      }
      dataPembelian.listPurchased = tampung
      dataPembelian.changeMoney = money
    }
    return dataPembelian
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    // { memberId: '1820RzKrnWn08',
//     money: 2475000,
//     listPurchased:
//      [ 'Sepatu Stacattu',
//        'Baju Zoro',
//        'Baju H&N',
//        'Sweater Uniklooh',
//        'Casing Handphone' ],
//     changeMoney: 0 }
console.log('-------------------------------------------------------------')
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
