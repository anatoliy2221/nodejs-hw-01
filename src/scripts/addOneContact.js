import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {

    try {
        const fileContent = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        const newContact = createFakeContact();
        fileContent.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(fileContent), 'utf8');
        console.log('Контакт успішно додано.');
    } catch (error) {
        console.log(error);
    }
};


await addOneContact();
