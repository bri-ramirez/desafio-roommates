import { errorMessage } from '../helpers/message.js';
import roommateService from '../services/roommate-service.js';

export const create = async (req, res) => {
  try {
    const userApi = await roommateService.getRandomUser();

    const user = await roommateService.create({
      name: userApi.name.first,
      lastName: userApi.name.last,
      email: userApi.email,
    });

    return res.status(201).json(user);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await roommateService.findAll();
    return res.status(200).json(users);
  } catch (error) {
    errorMessage(error.message);
    return res.status(500).json({ message: error.message });
  }
};