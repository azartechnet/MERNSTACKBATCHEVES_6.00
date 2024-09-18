for(i=0;i<=5;i++)
{
    setTimeout(()=>{
        console.log("Inside setTimeout")
    },30000)
    console.log("My Number is::"+i)
}
console.log("Print Immediatly..")