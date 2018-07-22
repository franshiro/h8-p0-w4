function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str = String(angka)
    if(str.length === 1){
        return str[0]
    }
    return kaliTerusRekursif(Number(str[0]) * kaliTerusRekursif(Number(str.slice(1, str.length))))
    
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6