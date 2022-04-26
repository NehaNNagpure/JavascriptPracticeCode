function CheckEven(no)
{
	if(no%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

let prompt=require("prompt-sync")();
let num=parseInt(prompt("enter the number"));

let validNum=Number.isInteger(num);
console.log(validNum);
if(validNum==true)
{
	if(num<0)
	{
		console.log("number is negative");
	}
	else
	{
		Reve=CheckEven(num);
		if(Reve==true)
		{
			console.log("even number");
		}
		else
		{
			console.log("odd number");
		}
	}
}
else
{
	console.log("number is not found");
}

