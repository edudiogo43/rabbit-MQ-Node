## Nodejs Consumer app using RabbitMQ
This application is an single example of consuming a message on RabbitMQ 

# How to install
Just clone the repository local

# How to run
`npm install`

# How does it works ?
This application will consuming the messages generated on Producer app and prints the results of the message collected
on sysout. To run the application just runs `npm start` and the application will trigger something like below:

```
Message received
[ { symbol: 'IZY', value: '788.09' } ]
``` 

# What about RabbitMQ instance ?
This example uses a cloud instance located at cloudamqp.com host.
This host, user and password is defined on `.env` file, feel free to change if you want to.