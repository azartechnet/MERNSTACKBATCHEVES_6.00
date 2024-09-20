const {MongoClient}=require('mongodb')
var url="mongodb+srv://admin:admin@cluster0.q4fm4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url)

async function run()
{
    try
    {
        const db=client.db("priyadb")
        const collection=db.collection("mycol")
        var obj={name:"azar",age:34,salary:10000};
        await collection.insertOne(obj);
        console.log("Data Inserted..")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)