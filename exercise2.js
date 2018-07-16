function fpb(angka1, angka2) {
    var tampung1 = []
    var tampung2 = []
    // you can only write your code here!
    for(var i=1;i<= angka1;i++){
        if(angka1%i === 0){
            // console.log(i)
            tampung1.push(i)
        }
    }

    for(var j=1;j<= angka2;j++){
        if(angka2%j === 0){
            // console.log(j)
            tampung2.push(j)
        }
    }
    var fpb = []
    for(var k=0; k<tampung1.length;k++){
        for(var l=0; l<tampung2.length;l++){
            if(tampung1[k] === tampung2[l]){
                fpb.push(tampung1[k])            
            }
        }
    }
    fpb.sort(function(a,b){return b-a})
    return fpb[0]
    // console.log(tampung1)
    // console.log(tampung2)
    // console.log(fpb)
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1