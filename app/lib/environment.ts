import 'dotenv/config';

export function useEnvironment() {
  const isServer = !!process.env;

  return {
    serverEnv: isServer ? process.env : undefined,
    clientEnv: !isServer ? import.meta.env : undefined
  };
}
