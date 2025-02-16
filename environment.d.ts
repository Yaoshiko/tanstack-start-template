// Define environment variables types.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      // Emulated delay to explore TanStack SWR features.
      FETCH_TODOS_DELAY: number;
      FETCH_TODO_BY_ID_DELAY: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
