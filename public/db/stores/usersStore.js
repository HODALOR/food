const DataStore = require("nedb-promises");
const Ajv = require("ajv");
const isDev = require("electron-is-dev");
const userSchema = require("../schemas/usersSchema");
const { app } = require("electron");
const path = require("path");

class userStore {
  constructor() {
    const ajv = new Ajv({
      allErrors: true,
      useDefaults: true,
    });

    this.schemaValidator = ajv.compile(userSchema);
    const userData = app.getAppPath("userData");
    const dbPath = path.join(
      isDev ? userData : process.resourcesPath,
      "DataStore/users.db"
    );
    this.db = DataStore.create({
      filename: dbPath,
      timestampData: true,
      autoload: true,
    });
  }

  validate(data) {
    return this.schemaValidator(data);
  }

  create(data) {
    return this.db.insert(data);
  }

  read(userName) {
    return this.db.findOne({ userName }).exec();
  }

  readAll() {
    return this.db.find();
  }

  removeUser(_id) {
    return this.db.remove({ _id });
  }

  updateUser(userData) {
    return this.db.update({ _id: userData._id }, userData.data);
  }
}

module.exports = new userStore();
