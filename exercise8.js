function urutkanAbjad(str) {
    // you can only write your code here!   
    // return str.split('').sort(function(a,b){return a>b}).join('')
    var tampung = ''
    var listHuruf = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < listHuruf.length; i++){
        for(var j = 0; j < str.length; j++){
            if(listHuruf[i] === str[j]){
                // console.log(listHuruf[i])
                tampung += listHuruf[i]

            }
        }
    }
    return tampung
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'