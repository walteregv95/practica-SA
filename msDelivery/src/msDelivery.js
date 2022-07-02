//8080 -> msRestaurant
//8081 -> msClient
//8083 -> msDelivery
//9500 -> msLogin

const express = require('express');
const app = express();
const port = 8083;


const isProd = false;

const host = "http://localhost"
var msRestaurantURI = "http://182.18.7.5:8085";
var msClientURI     = "http://182.18.7.10:8081";
var msDeliveryURI   = "http://182.18.7.15:8083";

const initURIS = () => {
    if(!isProd){
        msRestaurantURI = "http://localhost:8085";
        msClientURI     = "http://localhost:8081";
        msDeliveryURI   = "http://localhost:8083";
    }
};
initURIS();



const microService = "msDelivery";
var cors = require('cors');
app.use(cors());

const status = ["Received","On the way", "Delivered"];

var orders = [
   {
      "orderId": 1,
      "dish": "Pizza",
      "status": "Received",
   }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send({ status: microService + ' is Runnig at http://182.18.7.15:' + port + ' modificado en practica 3 .'});
});

// Marcar como entregado
app.post('/markOrderAsDelivered', function (req, res) {
   let orderId = req.body.orderId;
   let order = orders.find(o => o.orderId == orderId);
   order.status = "Delivered";
   res.send(order);
});

// Recibir pedido del restaurante
app.post('/receiveOrderFromRestaurant', (req, res) => {
   let order = req.body;
   order['status']="Received";
   orders.push(order);
   res.send(order);
});

// Informar estado del pedido al cliente
app.post('/orderStatus', function (req, res) {
   let orderId = req.body.orderId;
   let order = orders.find(o => o.orderId == orderId);
   res.send(order);
});

const server = (testPort) => {
   return app.listen(testPort, () => {
      console.log(microService + ' is Runnig at http://182.18.7.15:' + testPort);
   });
}

const productionStart = async () => {
   const tmp = process.argv.slice(2);
   if (tmp[0] == "prod") {
      return app.listen(port, () => {
         console.log(microService + ' is Runnig at http://182.18.7.15:' + port);
      });
   }
}

productionStart();

module.exports = server;




