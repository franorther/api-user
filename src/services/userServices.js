import fs from 'fs';

export const getAllUsers = () => {
    try {
        const readFile = JSON.parse(fs.readFileSync('text-file.json', 'utf-8'));
        return readFile
    } catch (error) {
        return error;
    }
};

export const createOneUser = (data) => {
    try {
        const readFile = JSON.parse(fs.readFileSync('text-file.json', 'utf-8'));
        let arrayObj;
        if (Array.isArray(readFile)) {
            arrayObj = readFile
        } else {
            arrayObj = [];
            arrayObj.push(readFile);
        }
        const duplicateIndex = arrayObj.findIndex(user => user.identificacion === data.identificacion);
        if (duplicateIndex !== -1) {
            return 'Usuario ya existe'
        }
        arrayObj.push(data);
        const jsonData = JSON.stringify(arrayObj);
        fs.writeFileSync('text-file.json', jsonData);
        return  'Usuario creado con éxito'

    } catch (error) {
        return error
    }

}

export const updateOneUser = (data) => {
    try {
        const readFile = JSON.parse(fs.readFileSync('text-file.json', 'utf-8'));
        let arrayObj;
        if (Array.isArray(readFile)) {
            arrayObj = readFile
        } else {
            arrayObj = [];
            arrayObj.push(readFile);
        }
        const duplicateIndex = arrayObj.findIndex(user => user.identificacion === data.identificacion);
        if (duplicateIndex !== -1) {
            arrayObj[duplicateIndex] = { ...arrayObj[duplicateIndex], ...data };
            const jsonData = JSON.stringify(arrayObj);
            fs.writeFileSync('text-file.json', jsonData);
            return 'Usuario editado con éxito'
        }
        return 'Usuario no existe'
    } catch (error) {
        return error
    }

}

export const deleteOneUser = (data) => {
    try {
        const readFile = JSON.parse(fs.readFileSync('text-file.json', 'utf-8'));
        let arrayObj;
        if (Array.isArray(readFile)) {
            arrayObj = readFile
        } else {
            arrayObj = [];
            arrayObj.push(readFile);
        }
        const duplicateIndex = arrayObj.findIndex(user => user.identificacion === data.identificacion);
        if (duplicateIndex !== -1) {
            arrayObj.splice(duplicateIndex, 1);
            const jsonData = JSON.stringify(arrayObj);
            fs.writeFileSync('text-file.json', jsonData);
            return 'Usuario eliminado con éxito'
        }
        return 'Usuario no existe'
    } catch (error) {
        return error
    }
}


