# TODO

- [x] Dependency bump
- [ ] Replace auth with BetterAuth
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

# Notes:

It seems that from versions 1.81+ of Tanstack are building the app differently, causing the _dist/\_workers/index.js_ to contain import to node module, which are not present. This breaks Cloudflare deployment.

The problem has been reproduced on this repo, where bumping those dependencies cause the issue: https://github.com/matthewdavi/minesweeper.

However, downgrading to 1.81 would constrain me on a specific version and require to re-adapt the code.
By now, I'm moving to a different serverless provider.
