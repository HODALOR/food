const DataStore = require("nedb-promises");
const Ajv = require("ajv");
const isDev = require("electron-is-dev");
const liqureSchema = require("../schemas/liqureSchema");
const { app } = require("electron");
const path = require("path");

class liqureStore {
  constructor() {
    const ajv = new Ajv({
      allErrors: true,
      useDefaults: true
    });

    this.schemaValidator = ajv.compile(liqureSchema);
    const userData = app.getAppPath("userData");
    const dbPath = path.join(
      isDev ? userData : process.resourcesPath,
      "DataStore/liqure.db"
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

  removeLiqure(_id) {
    return this.db.remove({ _id });
  }

  updateLiqure(liqureData) {
    return this.db.update({ _id: liqureData._id }, liqureData.data);
  }
}

module.exports = new liqureStore();
