function cariMedian(arr) {
    // you can only write your code here!
    var meanGanjil = (arr.length-1)/2
    var meanGenap = ((arr.length)/2)-1
    if(arr.length%2 !== 0){
        // console.log(arr.length)
       return arr[meanGanjil]
    }
    else{
        return (arr[meanGenap] + arr[meanGenap + 1])/2
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5