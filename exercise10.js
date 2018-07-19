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
        }
        else if(num[i] === 'b'){
            // console.log( 'posisi b = ', i)
            tampungB.push(i)
        }
    
    }
    console.log(tampungA,'A')
    console.log(tampungB, 'B')

    for(var a = 0; a<tampungA.length; a++){
        console.log(tampungA[a])
        for(var b = 0; b< tampungB.length; b++){
            console.log(tampungB[b], ' ini adalah posisi B')
        }
    }
   
  }
  
  // TEST CASES
//   console.log(checkAB('lane borrowed')); // true
//   console.log('-----------------------------------')
//   console.log(checkAB('i am sick')); // false
//   console.log('-----------------------------------')
//   console.log(checkAB('you are boring')); // true
//   console.log('-----------------------------------')
  console.log(checkAB('barbarian')); // true
//   console.log('-----------------------------------')
//   console.log(checkAB('bacon and meat')); // false