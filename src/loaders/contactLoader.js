import { getContacts } from "../Contact";

export async function getContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}


