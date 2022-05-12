function selection(arr)
{
	let index=0;
	let i=0;
	let j=0;
	for(i=0;i<arr.length;i++)
	{
		index=i;
		for(j=i;j<arr.length;j++)
		{
			if(arr[index]>arr[j])
			{
				index=j;
			}
		}
		let temp=0;
		temp=arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
}

let prompt=require("prompt-sync")();
let iSize=parseInt(prompt("enter the size of array"));
let validnum=Number.isInteger(iSize);
if(validnum)
{
	if(iSize<0)
	{
		console.log("negative number is not allowed");
	}
	else
	{
		var arr=[];
		for(var i=0;i<iSize;i++)
		{
			arr[i]=parseInt(prompt("enter the array elements"));
		}
		//let no=parseInt(prompt("enter the given serching number"));
		selection(arr);
		console.log("after sorting array is:");
		for(var i=0;i<iSize;i++)
		{
			console.log(arr[i]);
		}
	}
	
}
else
{
	console.log("number is invalid");
}
