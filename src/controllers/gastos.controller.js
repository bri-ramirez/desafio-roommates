import { errorMessage } from '../helpers/message.js';
import gastosService from '../services/gastos-service.js';
import roommateService from '../services/roommate-service.js';
import { validateGasto } from '../helpers/validate.js';

export const create = async (req, res) => {
  try {
    validateGasto(req);

    const { roommate, descripcion, monto } = req.body;

    const user = await gastosService.create({
      roommate,
      descripcion,
      monto,
    });

    return res.status(201).json(user);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const gastos = await gastosService.findAll();
    const roommates = await roommateService.findAll();

    const result = gastos.map((gasto) => {
      const roommate = roommates.find((roommate) => roommate.id === gasto.roommate);
      return {
        id: gasto.id,
        roommate_id: roommate.id,
        roommate: roommate.nombre,
        descripcion: gasto.descripcion,
        monto: gasto.monto,
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.query;
    await gastosService.remove(id);
    return res.status(204).end();
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.query;
    const { roommate, descripcion, monto } = req.body;
    await gastosService.update(id, { roommate, descripcion, monto });
    return res.status(204).end();
  } catch (error) {
    errorMessage(error.message);
    errorMessage(error);
    return res.status(500).json({ message: error.message });
  }
}