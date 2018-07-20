function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000
    
    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member'

    }
    else if(memberId !== '' && money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    else if(memberId !== '' ){
        
        // return memberId + '\n' + money
        var lp = []
        // var uang = money - sisa
        while(money >= 50000){
            if(money  > 1500000){
                lp.push('Sepatu Stacattu')
                money = money - 1500000
            } 
            else if(money > 500000){
                lp.push('Baju Zoro')
                money = money - 500000
            }
            else if(money > 250000){
                lp.push('Baju H&N')
                money = money - 250000
            }
            else if(money > 175000){
                lp.push('Sweater Uniklooh')
                money = money - 175000
            }
            else if(money >= 50000 ){
                lp.push('Casing Handphone')
                money = money - 50000
                break;
            }
        }
        // var dataPembeli = ['memberId', 'money', 'lp', 'changeMoney']
        var dataPembeli =  {
            'memberId' : memberId,
            'money' : money,
            'listPurchased' : lp,
            'changeMoney' : money
        }
        return dataPembeli
    }
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