function firstWord(s) {
  // your code here
	if(s==""){
		return `' '`
		}
		
	else{
		let ans=s.trim().split(" ")
	
	return `${ans[0]}`
	}
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
