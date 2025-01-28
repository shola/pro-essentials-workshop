# Blocking Your Dev Server with TypeScript

## Learning Goals

- Understand how to see TypeScript errors in your dev server
- Reach a conclusion for whether this is a good idea or not
- - Wiring up vite-plugin-checker for typescript shows the errors in the UI!!!
- Understand how to use `vite-plugin-checker`
- Understand how to use `npm-run-all`
- - It's better to have a separate npm script that runs `tsc`, called `"dev:tsc"`, and then running
that and ` "dev:vite"` script in parallel: `"dev": "run-p dev:*"`. Nice pattern to use a wildcard to
run multiple "dev" scripts with a single command.

## Problem

You'll notice that if you make a TypeScript error in your code, the dev server will still run.

This is because the dev server _doesn't_ run the TypeScript command line `tsc` on your code. It just runs the dev server.
