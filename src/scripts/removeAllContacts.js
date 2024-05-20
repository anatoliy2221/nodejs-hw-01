import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => { };
try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Дані успішно вилучено');
} catch (error) {
    console.log(error);
}
await removeAllContacts();
