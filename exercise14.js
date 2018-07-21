  function sorting(arrNumber) {
      // var sortArr = arrNumber.sort(function(a,b){return a-b})
      // console.log(sortArr)
    // code di sini
    for(var i = 0 ; i < arrNumber.length; i++){
        // console.log(arrNumber[i], 'bandingkan')
        for(var j = 0; j < arrNumber.length; j++){
          var x = arrNumber[i] 
          if(arrNumber[i] > arrNumber[j]){
            arrNumber[i] = arrNumber[j]
            arrNumber[j] = x
          }
          
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    //code di sini
    if(arrNumber[0] === undefined){
      return ' '
    }
    // console.log(arrNumber)
  
    
    var countHighest = 0;
    for (var j=0; j<arrNumber.length+1; j++){
      if (arrNumber[0] === arrNumber[arrNumber.length-j] ){ 
        countHighest++;
        // console.log(arrNumber[arrNumber.length-j])
      }
    }
  // console.log(countHighest, 'angka terbesar')
  return "\'angka paling besar adalah " + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + countHighest + " kali\'"
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
//   //''