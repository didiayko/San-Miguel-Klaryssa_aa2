for(let f = 1, j = 1; f <= 4108; f=f*2+j, j=j-1){
	document.write(parseInt(f));
	if (f < 4108){
		document.write(", ")
	}
}