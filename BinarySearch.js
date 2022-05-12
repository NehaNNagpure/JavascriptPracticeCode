function Binary(Brr,iNo)
{
		
	    var low=0;
		var high=Brr.length-1;
		//console.log(high);
		while(low<=high)
		{
			
			
			let mid=parseInt((low+high)/2);
			//console.log(mid);
			if(iNo==Brr[mid])
			{
				return mid;
			}
			else if(iNo>Brr[mid])
			{
				low=mid+1;
			}
			else
			{
				high=mid-1;
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
		let iRet=Binary(arr,no);
		//console.log(iRet);
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
