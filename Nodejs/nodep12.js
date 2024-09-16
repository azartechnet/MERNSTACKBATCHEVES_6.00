let count=0
const intervalId=setInterval(()=>{
    if(count==5)
    {
        clearInterval(intervalId)
        console.log("Time Up!!!")
    }
    else
    {
        const now=new Date();
        const hour=now.getHours();
        const minute=now.getMinutes();
        const second=now.getSeconds();
        const time=hour+":"+minute+":"+second;
        console.log(time)
        count++;
    }
},2000)