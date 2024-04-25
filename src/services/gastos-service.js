import Gastos from "../models/Gastos.js";

const findAll = async () => {
  return await Gastos.findAll();
};

const create = (newRoonmate) => {
  return Gastos.save(newRoonmate);
};

const update = (id, gasto) => {
  return Gastos.update(id, gasto);
};

const remove = async (id) => {
  return await Gastos.delete(id);
};

export default { findAll, create, update, remove };