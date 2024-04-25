import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export class JsonFileStorage {
  filePath;

  constructor(entityName) {
    this.filePath = `./src/data/${entityName}.json`;
    this.verifyFile();
  }

  async verifyFile(){
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '[]');
    }
  }

  async read() {
    return JSON.parse(await fs.promises.readFile(this.filePath, 'utf8'));
  }

  async write(data) {
    await fs.promises.writeFile(this.filePath, JSON.stringify(data, null, 2));
  }

  async findAll() {
    return this.read();
  }

  async findOne(id) {
    const data = await this.read();
    return data.find((item) => item.id === id);
  }

  async save(newData) {
    const data = await this.read();

    const newItem = {
      id: uuidv4(),
      ...newData,
    };

    data.push(newItem);
    await this.write(data);

    return newItem;
  }

  async update(id, newData) {
    const data = await this.read();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Item not found');
    }
    data[index] = { ...data[index], ...newData };
    await this.write(data);
    return data[index];
  }

  async delete(id) {
    const data = await this.read();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Item not found');
    }
    const deletedItem = data.splice(index, 1);
    await this.write(data);
    return deletedItem;
  }
}