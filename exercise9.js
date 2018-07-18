function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufKecil = hurufBesar.toLowerCase()
    var arr = kalimat.split(' ')
    var tampung = []

    
    for(var a = 0; a<arr.length; a++){
        tampung.push([])
        for(var b = 0; b < arr[a].length ; b++){
            
            // console.log(kalimat[i])
            for(var j = 0; j<hurufBesar.length; j++){
                // console.log(hurufBesar[j])
                if(arr[a][b] === hurufBesar[j]){
                    console.log(hurufBesar[j].toLowerCase())
                    tampung[a].push(hurufBesar[j].toLowerCase())
                }
                else if(arr[a][b] === hurufKecil[j]){
                    console.log(hurufBesar[j])
                    tampung[a].push(hurufBesar[j])

                }
            }
        
        }
        
    }
    console.log(tampung)
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
//   console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
//   console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
//   console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
//   console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"