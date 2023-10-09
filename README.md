# Nextjs app template
Based on [alexeagleson/nextjs-fullstack-app-template](https://github.com/alexeagleson/nextjs-fullstack-app-template).

[![codecov](https://codecov.io/gh/jirihofman/nextjs-fullstack-app-template/branch/master/graph/badge.svg)](https://codecov.io/gh/jirihofman/nextjs-fullstack-app-template)

## Removed
Following features were removed from `alexeagleson/nextjs-fullstack-app-template`:
- typescript
- .vscode
- prettier
- storybook

## Added
Following features not in  `alexeagleson/nextjs-fullstack-app-template` were added into this template repository:
- implement unit and end-to-end testing in a Nextjs app with Jest and Cypress
- create CI/CD pipeline with Github actions and Vercel
- internationalization using [next-translate](https://github.com/aralroca/next-translate)
- Clerk
- connect a Postgres database to your Next.js app using Prisma and @vercel/postgress
- code coverage via [codecov.io](https://codecov.io)

## Code coverage notes

Added in order for Cypress to produce coverage into `cypress-coverage` folder instead of `coverage`. Note that the folder `cypress-coverage` is used for both component and e2e Cypress tests. That's why the coverage summary needs to be exported right after the first Cypress test (in this case component) finishes and before the other (e2e, see package.json scripts for ordering) begins.
```json
"nyc": {
    "report-dir": "cypress-coverage"
  },
```

In order to generate coverage for Cypress component testing, there needs to be istanbul plugin. Otherwise the coverage is not generated, hence the error: `cp: cannot stat 'cypress-coverage/coverage-final.json': No such file or directory`.
```js
	"plugins": [
		["istanbul", {
			"exclude": [
				"!**/node_modules/**",
				"**/test/**"
			]
		}, "some unique name"]
	]
```

# Steps after you use the template
Once you create a repository based on this template, you should do the following steps:
## `package.json`
- [ ] change name and displayName
- [ ] MIT license ok?
- [ ] keywords, homepage (hero, features)

## MySQL and Knex
- [ ] rename database
- [ ] run Prisma migrations with
```sh
npx prisma generate
npx prisma migrate dev
```

## GitHub Actions

## .env files
TODO: rename command

## Codecov
- [ ] In README.md replace `jirihofman/nextjs-fullstack-app-template` with `your-username/your-new-repository`

There is a plan to have this process automated, several options come to mind:
- GHA workflow that will remove all the template data from repo upon first commit in new repo
- interactive dialog when starting `npm run dev` for the first time in new repo
