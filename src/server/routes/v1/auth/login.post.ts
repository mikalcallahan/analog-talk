import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log('login request - ', body);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2500);
  });
});
