const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./api/config");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//storing all connected users
var sockets = {};

io.on("connection", (socket) => {
  // connecting to waiters page
  socket.on("waiters", (data) => {
    console.log(data + " connected");
  });

  // connecting to kitchen page
  socket.on("kitchen", () => {
    console.log("connected to the kitchen");
  });

  //order listener
  socket.on("order", (order) => {
    const items = order.items;
    const packageData = order.packData;

    // separating dishes from drinks
    const kitchen = items.filter((item) => item.destination === "kitchen");
    const bar = items.filter((item) => item.destination === "bar");

    // creating kitchen data
    const forKitchen = {
      dishes: kitchen,
      data: packageData,
    };

    // creating bar data
    const forBar = {
      drinkable: bar,
      data: packageData,
    };

    socket.emit("kitchen_order", forKitchen);
    socket.emit("bar_order", forBar);
    console.log(order + " order received");

    //storing message in the database
    // Message(message); <-----
  });

  //disconnecting offline users
  socket.on("disconnect", (data) => {
    console.log(data + "is offline");
  });
});

const PORT = config.port;
httpServer.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
