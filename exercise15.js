function changeVocals (str) {
    //code di sini
    // console.log(str)
    var ubahKata = 'bBcCdDfFgGhHjJkKlLmMn NpPqQrRsStTvVwWxXyYzZ'
    var vocal = 'aAiIuUeEoO'
    var pengganti = 'bBjJvVfFpP'
    var temp = ''

    for(var i = 0; i<str.length; i++){
        for(var j = 0; j<ubahKata.length; j++){
            if(ubahKata[j] === str[i]){
                temp += str[i]
                // console.log(str[i])
            }
            else if(vocal[j] === str[i]){
                temp += pengganti[j]
                // console.log(pengganti[j])
            }
        }
    }   
    
    // console.log(temp)
    return temp
  }
  
  function reverseWord (str) {
    //code di sini
    // console.log(str)
    var tempt = ''
    for(var i = 1; i <= str.length; i++){
        tempt += str[str.length - i]
    }
    // console.log(tempt)
    return tempt
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    // console.log(str)
    temp = ''
    for(var i = 0; i< str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            temp += str[i].toUpperCase()
        }
        else{
            temp += str[i].toLowerCase()
        }
    }
    // console.log(temp)
    return temp
  }
  
  function removeSpaces (str) {
    //code di sini
    // console.log(str)
    temp = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            temp += str[i]
            // console.log(str[i])
        }
    }
    // console.log(temp)
    return temp
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return "\'Minimal karakter yang diinputkan adalah 5 karakter\'"

    }


    var step1 = changeVocals(name)
    var step2 = reverseWord(step1)
    var step3 = setLowerUpperCase(step2)
    return removeSpaces(step3)
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log('----------------------------------------------')
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log('----------------------------------------------')

  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log('----------------------------------------------')

  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'