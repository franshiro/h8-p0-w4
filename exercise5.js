function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var tampungKata = ''
    for(var i=0; i< kata.length;i++){
        for(var j=0;j<alphabet.length;j++){
            if(kata[i] === alphabet[j]){
                // console.log(j,' ------- ', alphabet[j+1])
                tampungKata += alphabet[j+1]
            }
        }
    }
    return tampungKata
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu