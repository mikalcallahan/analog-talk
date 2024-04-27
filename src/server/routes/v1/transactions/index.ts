import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  return [
    {
      id: 243,
    },
    {
      id: 543,
    },
    {
      id: 983,
    },
  ];
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ success: true });
  //   }, 2500);
  // });
});
