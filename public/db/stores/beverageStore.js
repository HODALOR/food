const DataStore = require("nedb-promises");
const Ajv = require("ajv");
const isDev = require("electron-is-dev");
const beveragesSchema = require("../schemas/beveragesSchema");
const { app } = require("electron");
const path = require("path");

class beverageStore {
  constructor() {
    const ajv = new Ajv({
      allErrors: true,
      useDefaults: true
    });

    this.schemaValidator = ajv.compile(beveragesSchema);
    const userData = app.getAppPath("userData");
    const dbPath = path.join(
      isDev ? userData : process.resourcesPath,
      "DataStore/beverages.db"
    );
    this.db = DataStore.create({
      filename: dbPath,
      timestampData: true,
      autoload: true
    });
  }

  validate(data) {
    return this.schemaValidator(data);
  }

  create(data) {
    return this.db.insert(data);
  }

  read(_id) {
    return this.db.findOne({ _id }).exec();
  }

  readAll() {
    return this.db.find();
  }

  removeBeverage(_id) {
    return this.db.remove({ _id });
  }

  updateBeverage(beverageData) {
    return this.db.update({ _id: beverageData._id }, beverageData.data);
  }
}

module.exports = new beverageStore();
