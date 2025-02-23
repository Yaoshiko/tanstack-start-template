# TODO

- [x] Dependency bump
- [x] Replace auth with BetterAuth
  - [ ] Implement auth middleware: provide user context
- [ ] Implement Login/Register forms template: with shadcn + TanStack Form (or zod)
- [ ] Add ReactScan dependency
- [ ] Deploy:

  - [ ] Evaluate provider (Netlify vs Vercel vs Cloudflare pages)
  - [ ] Create free-tier DB (Neon Postgres? Cloudflare R2?)

- [x] Configure EsLint
- [x] Configure prettier
- [x] Migrate Prisma to Drizzle
  - [x] Postgres docker compose for local development
  - [x] Schema and migrations management
  - [x] Seed data (and reset status) scripts
  - [x] Data layer APIs and usage example
- [ ] Configure data layer with createIsomorphicFn to combine SSR and client APIs: https://discordapp.com/channels/719702312431386674/1340798353679843469
- [x] Type-safe environment variables
- [ ] Manage abort controllers
