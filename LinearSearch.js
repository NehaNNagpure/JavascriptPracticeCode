function Linear(Brr,iNo)
{
	
	for(var iCnt=0;iCnt<Brr.length;iCnt++)
	{
		if(Brr[iCnt]==iNo)
		{
			return iCnt;
		}
	}
	return -1;
}

let prompt=require("prompt-sync")();
let num=parseInt(prompt("enter the array of size"));
let validnum=Number.isInteger(num);
if(validnum)
{
	if(num<0)
	{
		console.log("negative number is not allowed");
	}
	else
	{
		var arr=[];
		for(var i=0;i<num;i++)
		{
			arr[i]=parseInt(prompt("enter the array elements"));
		}
		let no=parseInt(prompt("enter the given serching number"));
		let iRet=Linear(arr,no);
		if(iRet==-1)
		{
			console.log("number is not found");
		}
		else
		{
			console.log("number is found in the position of:",iRet);
		}
	}
	
}
else
{
	console.log("number is invalid");
}
