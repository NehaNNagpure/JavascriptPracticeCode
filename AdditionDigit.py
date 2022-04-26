def AdditionDigit(iNo):
    print(iNo)
    iSum=0
    iDigit=0
    while iNo>0:
        iDigit=iNo%10
        iSum=iSum+iDigit
        iNo=iNo//10
        
    return iSum
    


def main():
    try:
        no=int(input("enter the number"))
        validNum=isinstance(no,int);
        
        if(no<0):
            print("negative numbers not allowed")
        else:
            iRet=AdditionDigit(no)
            print("Addition of digit is: ",iRet)
    except:
        print("invalid number")

    

if __name__=="__main__":
    main()