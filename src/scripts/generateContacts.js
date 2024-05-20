import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const parseContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));

    for (let i = 0; i < number; i += 1) {
        parseContacts.push(createFakeContact());
    }
    const stringifyContacts = JSON.stringify(parseContacts);
    await fs.writeFile(PATH_DB, stringifyContacts, 'utf8');
};

await generateContacts(5);
