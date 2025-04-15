function trailingZeros(n) {
  //your JS code here. If required.
	let count =0;

	fot(let i=5;Math.floor(n/i)>=1;i*=5){
		count += Math.floor(n/i);
	}
	return count;
	
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
