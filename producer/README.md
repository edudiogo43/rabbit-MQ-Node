## Nodejs Producer app using RabbitMQ
This application is an single example of producing a message on RabbitMQ 

# How to install
Just clone the repository local

# How to run
`npm install`

# How does it works ?
This application simulates a generation of cryptocurrency by creating a random coin name and value.
To run the application just runs `npm run dev` and the application will trigger something like below:

```
Connected to RabbitMQ server successfully!
BitCoin IZY has a price of: 788.09
``` 

# What about RabbitMQ instance ?
This example uses a cloud instance located at cloudamqp.com host.
This host, user and password is defined on `.env` file, feel free to change if you want to.