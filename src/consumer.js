const amqp = require("amqplib");
const config = require("../config/config");

/**
 * Steps to consume message
 * step 1 : connect to rabbitmq server 
 * step 2 : create a channel
 * step 3 : create exchange
 * step 4 : Create a Queue
 * step 5 : Bind the Queue to the exchange
 * step 4 : consume the message from the queue
 */

async function messageConsumer() {
  // connect to rabbitmq server
  const connection = await amqp.connect(config.rabbitMQ.url);
  // create a channel
  const channel = await connection.createChannel();
  const exchangeName = config.rabbitMQ.exchangeName;
  // create exchange
  await channel.assertExchange(exchangeName, "direct");
  // Create a Queue
  const q = channel.assertQueue(config.rabbitMQ.queueName) 
  // Bind the Queue to the exchange
  await channel.bindQueue(q.queue, exchangeName, "info");
  // consume the message from the queue
  await channel.consume(q.queue, (msg)=>{
    const data = JSON.parse(msg.content)
    console.log(data);
    //sending acknowledgement back
    channel.ack(msg);
  });
}

module.exports = {messageConsumer}