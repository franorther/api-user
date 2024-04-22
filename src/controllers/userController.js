import { getAllUsers, createOneUser, updateOneUser, deleteOneUser } from '../services/userServices.js';

export const getUsers = (req, res) => {
    const result = getAllUsers();
    res.status(200).json(result);
}

export const createUser = (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = createOneUser(dataJson);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(500).json({
            error: "Usuario ya existe"
        })
    }
}

export const updateUser = (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = updateOneUser(dataJson);
    res.status(200).json(result);
}

export const deleteUser = (req, res) => {
    const data = JSON.stringify(req.body);
    const dataJson = JSON.parse(data)
    const result = deleteOneUser(dataJson);
    res.status(200).json(result);
}