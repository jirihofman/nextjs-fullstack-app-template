# Nextjs app template
Based on [alexeagleson/nextjs-fullstack-app-template](https://github.com/alexeagleson/nextjs-fullstack-app-template).

[![codecov](https://codecov.io/gh/jirihofman/nextjs-fullstack-app-template/branch/master/graph/badge.svg?token=JSVBDBBVR4)](https://codecov.io/gh/jirihofman/nextjs-fullstack-app-template)

## Removed
- typescript
- .vscode
- prettier
- storybook

## Added
- implement unit and end-to-end testing in a Nextjs app with Jest and Cypress
- create CI/CD pipeline with Github actions and Vercel
- internationalization using [next-translate](https://github.com/aralroca/next-translate)
- NextAuth
- connect a database to your Next.js app with MySQL using Knex
- code coverage

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
- [ ] run Knex migrations

## GitHub Actions

## .env files
TODO: rename command
