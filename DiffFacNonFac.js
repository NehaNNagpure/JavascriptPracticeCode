function Diff(no)
{
	var iCnt=0,iFSum=0,iNFSum=0,iDiff=0;
	for(iCnt=1;iCnt<no;iCnt++)
	{
		if((parseInt(no)%iCnt)==0)
		{
			iFSum=iFSum+iCnt;
		}
		else if(parseInt(no)%iCnt!=0)
		{
			iNFSum=iNFSum+iCnt;
		}
		
	}
	iDiff=iNFSum-iFSum;
	console.log(iDiff);
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
		Diff(num);
	}
}
else
{
	console.log("number is not valid");
}