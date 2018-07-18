
function hitungHuruf(kata) {
    // you can only write your code here!
    var arrKata = kata.split(' ')
    // console.log(arrKata)
    var arrCounter =[]

    for(var i=0; i<arrKata.length;i++){
        // console.log('-------------')
        counter = 0
        for(var j=0;j<arrKata[i].length;j++){
            // console.log(arrKata[i][j])
            for(var k=j+1;k<arrKata[i].length;k++){
                if(arrKata[i][j] === arrKata[i][k]){
                    counter++
                }
            }
        }
        // console.log('nilai kata yang kembar', counter)
        arrCounter.push(counter)
    }
    var max = 0
    for(var l=0;l<arrCounter.length;l++){
        if(arrCounter[l] > max){
            max = l
            // console.log(max, 'nilai max')
        }
       
    }
    return arrKata[max]
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau