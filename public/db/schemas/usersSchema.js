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
    role: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

module.exports = userSchema;
