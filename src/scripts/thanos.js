import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    const parseContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    const filteredContacts = parseContacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts), 'utf8');
    console.log(filteredContacts);
};

await thanos();
