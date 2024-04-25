import { JsonFileStorage } from "./JsonFileStorage.js";

class Roommate extends JsonFileStorage {
  constructor() {
    super('roommates');
  }
}

export default new Roommate();