import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        const parseContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        return console.log('Кількість контактів в db:', parseContacts.length);
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
