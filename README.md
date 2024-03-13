# Angular (17) TDD Sandbox

Use this sandbox project for playing with angular & testing without any legacy in the way.

## How this project was created

You may want to look at the git history of this branch for details. But this is a general overview to understand the project setup.

```sh
# initial raw angular project
npx -p @angular/cli@17 ng new ng-tdd-sandbox --prefix tdd --strict --routing --standalone --style scss --ssr false --directory .
# ESLint
npx ng add @angular-eslint/schematics
# testing tools
npm install ng-mocks --save-dev
npm install ts-mockito --save-dev
npm install @testing-library/angular --save-dev
```

### Theming

The global "styles.scss" defines some css variables to be used in components for following a standard color scheme.

## Main Tasks

* Use `npm run start` to run the application
* Use `npm run test` to run the tests
* Use `npm run build` to build the application
* Use `npx ng ...` to work with the angular cli in general


