const amqp = require('amqplib')

const msg = {number: 2}
async function connect(){
    try
     {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const result =  await channel.assertQueue("Jobs");
        channel.sendToQueue("Jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`)

       
     }catch (error) {
        
    }
}

connect();
