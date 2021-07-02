const dishesSchema = {
  type: "object",
  properties: {
    dishName: {
      type: "string",
    },
    price: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
};

module.exports = dishesSchema;
