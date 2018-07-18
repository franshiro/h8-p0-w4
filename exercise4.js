function cariModus(arr) {
    // you can only write your code here!
    var simpan = []
    var saringArr = []
    var counter  = 0
    for(var i=0; i<arr.length; i++){
        // console.log('ini adalah i ke', i)
        for(var j=i+1; j<arr.length; j++){
            // console.log(j)
            if(arr[i] === arr[j]){
                // console.log(arr[i], 'ini kembar')
                simpan.push(arr[i])
                counter++
                // console.log(counter)
            }
            else{
                ('kosong')
            }
        }
    }
    if(counter > arr.length || counter === 0){
        return '-1'
    }
    else if(counter < arr.length){
        return simpan[0]
    }
    // console.log(counter,'ini counter')
    // return simpan[0]
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1