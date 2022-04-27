
function Count(iNo)
{
	var iDigit=0,iCnt=0;
	while(parseInt(iNo)>0)
	{
		iDigit=parseInt(iNo)%10;
		iCnt=iCnt+1;
		iNo=parseInt(iNo)/10;
		
	}
	console.log(iCnt);
	
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
		Count(num);
		//console.log("count of digit is :",iRet);
	}
}
else
{
	console.log("number is not valid");
}