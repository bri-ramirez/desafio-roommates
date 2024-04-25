import { JsonFileStorage } from "./JsonFileStorage.js";

class Gastos extends JsonFileStorage {
  constructor() {
    super('gastos');
  }
}

export default new Gastos();