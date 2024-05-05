# RabbitMQ Event Consumption Guide
# Introduction
This guide aims to provide a comprehensive overview of how to publish events using RabbitMQ. RabbitMQ is a powerful message broker that enables efficient and reliable communication between different components of a distributed system.

# Getting Started
To begin publishing events using RabbitMQ, follow these steps:

**Install RabbitMQ:** If you haven't already, install RabbitMQ on your system. You can download it from the official website or use a package manager for your operating system.

**Setup RabbitMQ:** After installation, configure RabbitMQ according to your requirements. You may need to set up users, virtual hosts, and permissions using the RabbitMQ management interface or command-line tools.

**Choose a Programming Language:** RabbitMQ offers client libraries for various programming languages, including Python, Java, JavaScript, and more. Choose the one that best suits your project's requirements.(we are using JS in this Project)

# Consuming Events
Once RabbitMQ is set up and running, you can start consuming events. Here's a basic outline of the process:

**1.Establish Connection:**
Connect to RabbitMQ from your application using the appropriate client library.

**2.Create Channel:**
Create a channel on the connection you established in the last step.

**3.Declare Exchange:**
Declare an exchange on RabbitMQ. Exchanges receive messages from producers and route them to queues based on routing rules.

**4.Declare Queue:** 
Declare a queue to receive messages from RabbitMQ. Queues are where messages are stored until they are processed by consumers.

**5.Bind Queue to Exchange:**
Bind the queue to one or more exchanges. Exchanges route messages to queues based on routing rules.

**6.Consume Messages:**
Start consuming messages from the queue. Messages will be delivered to your application as they arrive in the queue.

**7.Process Messages:**
Process the received messages according to your application's logic. This may involve parsing message data, performing business logic, and updating application state.

## Run Locally

**Run the cmds**
- git clone https://github.com/KaranNegi-Work/consumer-service.git
- npm start

# Contributing
Contributions to this guide are welcome! If you have suggestions, improvements, or additional examples, feel free to open an issue or pull request on GitHub.