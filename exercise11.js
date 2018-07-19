function changeMe(arr) {
    // you can only write your code here!
    // console.log(arr.length)
    var strObj = ['firstName', 'lastName', 'gender', 'age']
    var hasilObj = {}
    var tampung = []
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i])
        tampung.push([])
        
        for(var j = 0; j < strObj.length; j++){
            // console.log(strObj[j])
            for(var k = j; k< strObj.length; k++){
                if(j === k && strObj[j] !== 'age'){
                    console.log(strObj[j], ' : ', arr[i][k])
                                      
                }
                else if(strObj[j] === 'age' && arr[i][k] < 2018){
                    console.log(strObj[j], ' : ', (2018 - arr[i][k]))
                }
                else if(strObj[j] === 'age' && arr[i][k] === undefined  ){
                    console.log(strObj[j], ' : ', 'invalid')
                }
                else if(strObj[j] === 'age' &&  arr[i][k] >= 2018 ){
                    console.log(strObj[j], ' : ', 'invalid')
                }
            }
        }
        
    }
//     console.log(tampung, 'ini tampung')
//     console.log(hasilObj, 'ini object')
//   }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', 2019]]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""