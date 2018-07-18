function digitPerkalianMinimum(angka) {
    // you can only write your code here!

    var nilaiTampung = []
    for(var i=1; i<=angka; i++){
        // console.log(i)
        var tampung = ''
        if(angka%i === 0){
            // console.log(i, '--------' ,angka/i)
            tampung = String(i) + String(angka/i)

            // console.log(tampung, 'nilai tampung')
            nilaiTampung.push(tampung)
        }
    }
    // console.log(nilaiTampung)
    var max = nilaiTampung[0].length
    var hasil = 0
    for(var j=0; j<nilaiTampung.length; j++){
        
        // if(max = nilaiTampung[j].length){
        //     max = nilaiTampung[j].length
        //     console.log(max, 'sama', nilaiTampung[j])
        // }
        // else if(max > nilaiTampung[j].length){
        //     max = nilaiTampung[j].length
        //     console.log(max, 'lebih')
        // }
        if(max >= nilaiTampung[j].length){
            max = nilaiTampung[j].length
            // console.log(max, 'kurang --')
            hasil = max
        }
        else{
            // console.log('kosong')
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
