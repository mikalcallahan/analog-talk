// /server/routes/v1/transactions/[id].get.ts
import { createError, defineEventHandler, getRouterParam } from 'h3';
import { Transaction } from 'src/app/core/types';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!idIsValid(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID invalid',
    });
  }

  // @NOTE: here we are simulating a db call
  const transaction = getTransactionById(id);
  return transaction;
});

const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;
const idIsValid = (value: string | undefined): value is string =>
  isDefined(value) && !value.startsWith('4');
const getTransactionById = (value: string): Transaction => ({
  id: value,
  amount: 200,
  status: 'POSTED',
});
