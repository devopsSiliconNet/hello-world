The `layout.tsx` file itself is valid — this error comes from Node.js trying to directly parse a `.tsx` file without a TypeScript loader. The fix isn't in the file content, it's in the project config. The `next.config.ts` being TypeScript can trigger this on some Next.js 15 versions.

Let me convert it to JavaScript:

The fix is done. The `layout.tsx` file was fine — the root cause was `next.config.ts`. Node.js 22 with Next.js 15 can choke on a TypeScript config file when it triggers ESM resolution that cascades into checking `.tsx` files. Replaced `next.config.ts` with `next.config.mjs` (plain JavaScript ESM), which avoids the `ERR_UNKNOWN_FILE_EXTENSION` entirely.