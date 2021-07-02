const userSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    userName: {
      type: "string",
    },
    userID: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

module.exports = userSchema;
