import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return console.log(JSON.parse(data));
    } catch (error) {
        console.log(error);
    }
};

await getAllContacts();
