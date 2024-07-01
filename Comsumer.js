const amqp = require('amqplib')


async function connect(){
    try
     {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const result =  await channel.assertQueue("Jobs");
        channel.consume("Jobs", message =>{
            const input = JSON.parse(message.content.toString())
            console.log(`Recieved input with ${input.number}`)
            if(input == 7){
                channel.ack(message)
            }

        } )
        console.log("Wating for message..... ")
       
       
     }catch (error) {
        
    }
}

connect();
