function DisplayFactors(no)
{
	var iCnt=0;
	for(iCnt=1;iCnt<no;iCnt++)
	{
		if((no%iCnt)==0)
		{
			console.log(iCnt);
		}
	}
}


let prompt=require("prompt-sync")();
let num=parseInt(prompt("enter the number"));

let ValidNum=Number.isInteger(num);
console.log(ValidNum);

if(ValidNum==true)
{
	if(num<0)
	{
		console.log("number is negative")
	}
	else
	{
		DisplayFactors(num);
	}
}
else
{
	console.log("number is not valid");
}