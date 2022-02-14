function sumTheElements(theArray){
	
	var suma = 0;
    for (let i=0; i<=theArray.length-1; i++){
        suma = suma + theArray[i]
    }

	return suma;
}
sumTheElements([2,13,34,5])