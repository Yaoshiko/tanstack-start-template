// Define environment variables types.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Better-auth.
      BETTER_AUTH_SECRET: string;
      BETTER_AUTH_URL: string;
      /** Auth cookies duration in seconds. */
      BETTER_AUTH_COOKIE_CACHE: number;

      // Data layer.
      DATABASE_URL: string;

      // App-specific.
      // Emulated delay to explore TanStack SWR features.
      FETCH_RECIPES_DELAY: number;
      FETCH_RECIPE_DELAY: number;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
