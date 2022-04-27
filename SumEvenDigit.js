function SumE(iNo)
{
	var iDigit=0,iSum=0;
	while(parseInt(iNo)>0)
	{
		iDigit=parseInt(iNo)%10;
		if(iDigit%2==0)
		{
			iSum=iSum+iDigit;
		}
		iNo=parseInt(iNo)/10;
		
	}
	console.log(iSum);
	
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
		SumE(num);
		//console.log("count of digit is :",iRet);
	}
}
else
{
	console.log("number is not valid");
}