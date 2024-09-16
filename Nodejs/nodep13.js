function greet()
{
    console.log("Hello World");
}
const timoutId=setTimeout(greet,5000);

function cancelTimeout()
{
    clearTimeout(timoutId);
    console.log("Timeout has been cleared")
}

setTimeout(cancelTimeout,6000)

console.log("This Message appears immediately...")