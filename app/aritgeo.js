const aritGeo = (arr)=>{
  //I would take the first two values 
  //as reference point to check
  let arithmeticChecker = arr[1]-arr[0]
  let geometricChecker = arr[1]/arr[0]
  //this Booleans will change incase the looped
  //values are not arithmetic or Geometric,
  //as I would not want to terminate the loop
  let isArith = true
  let isGeo = true
  if(arr.length === 0){
    return 0;
  }
  for(i=0;i < arr.length -1;i++){
    let isGeoChecker = arr[i+1]/arr[i]
    let isArithChecker = arr[i+1]-arr[i]
    if (geometricChecker !== isGeoChecker ){
        isGeo = false
    }
    if(arithmeticChecker !== isArithChecker){
      isArith = false
    }
  }
  /*so depending on what i have in my isArith and isGeo variables,
  I return the accurate result.
  */
  if(isGeo === true){
    return "Geometric"
  }else if(isArith === true){
    return "Arithmetic"
  }else if(isGeo === false && isArith === false){
    return -1
  }
}

exports.aritGeo = aritGeo