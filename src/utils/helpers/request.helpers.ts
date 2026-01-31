import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
  correlationId: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = (): string => {
  const asyncStore = asyncLocalStorage.getStore();
  return asyncStore?.correlationId || "no-correlation-id";
};

export const setCorrelationId = (correlationId: string, callback: () => void): void => {
  asyncLocalStorage.run({ correlationId }, callback);
};