function checkAB(num) {
    // you can only write your code here!
    var tampungA =[]
    var tampungB = []
    var A = 0
    var B = 0
    for(var i=0; i<num.length; i++){
        
        // console.log(num[i])
        if(num[i] === 'a'){
            // console.log( 'posisi a =', i)
            tampungA.push(i)
            A++
        }
        else if(num[i] === 'b'){
            // console.log( 'posisi b = ', i)
            tampungB.push(i)
            B++
        }
    
    }
    // console.log(tampungA,'A')
    // console.log(tampungB, 'B')
    // var hasilAB = []
    // var hasilBA = []
    var hitungHasil = 0
    for(var a = 0; a<tampungA.length; a++){
        // console.log(tampungA[a], ' A')
        for(var b = 0; b< tampungB.length; b++){
            // console.log(tampungB[b], ' ini adalah posisi B')
            if(tampungA[a] > tampungB[b] && (tampungA[a] - tampungB[b]) >= 3){
              // console.log(tampungA[a] - tampungB[b], 'hasil', tampungA[a],'-', tampungB[b])
              // hasilAB.push(tampungA[a] - tampungB[b])
              hitungHasil++
            }
            else if(tampungA[a] < tampungB[b] && (tampungB[b]-tampungA[a]) >= 3){
              // console.log(tampungB[b] - tampungA[a], 'hasil B-A')
              // hasilBA.push(tampungB[b] - tampungA[a])
              hitungHasil++
            }
        }
    }

//    console.log(A, B) 
  //  return hitungHasil>0
    if( A === B || (A-B) ===1 || (B-A) ===1){
      
      return hitungHasil>0
    }
    else{
      return false
    }
  }




  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log('-----------------------------------')
  console.log(checkAB('i am sick')); // false
  console.log('-----------------------------------')
  console.log(checkAB('you are boring')); // true
  console.log('-----------------------------------')
  console.log(checkAB('barbarian')); // true
  console.log('-----------------------------------')
  console.log(checkAB('bacon and meat')); // false