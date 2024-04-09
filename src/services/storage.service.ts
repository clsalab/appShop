import { Storage } from "../interfaces/storage.interface";
import storageModel from "../models/storage.model";



const registerUpload = async ({ fileName, idUser, path }: Storage) => {
    const responseItem = await storageModel.create({ fileName, idUser, path });
    return responseItem;
};

export {  registerUpload };
