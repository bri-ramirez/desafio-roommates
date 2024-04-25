import {Roommate, Gastos} from "../models/index.js";

const findAll = async () => {

  const roommates = await Roommate.findAll();

  const gastos = await Gastos.findAll();

  const gastosTotal = gastos.reduce((acc, curr) => acc + curr.monto, 0);

  const roommateGastos = roommates.map((roommate) => {
    // gasto que tiene el roommate
    const gastosRoommate = gastos.filter((gasto) => gasto.roommate === roommate.id);

    // suma de los gastos del roommate
    const sumaGastos = gastosRoommate.reduce((acc, curr) => acc + curr.monto, 0);

    return {
      id: roommate.id,
      nombre: roommate.name +" "+ roommate.lastName,
      debe: (gastosTotal / roommates.length) - (sumaGastos / roommates.length),
      recibe: sumaGastos / roommates.length,
    };
  });

  return roommateGastos;
};

export const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data.results[0];
}

const create = (newRoonmate) => {
  return Roommate.save(newRoonmate);
};

const getById = async (id) => {
  return await Roommate.findOne(id);
}



export default { findAll, getById, getRandomUser, create };