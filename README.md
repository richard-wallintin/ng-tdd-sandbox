# Angular (16) TDD Sandbox

Use this sandbox project for playing with angular & testing without any legacy in the way.

## How this project was created

You may want to look at the git history of this branch for details. But this is a general overview to understand the project setup.

```sh
# initial raw angular project
npx -p @angular/cli@16 ng new ng-tdd-sandbox --prefix tdd --strict --routing --style scss --directory .
# ESLint
npx ng add @angular-eslint/schematics
# testing tools
npm install ng-mocks --save-dev
npm install ts-mockito --save-dev
npm install @testing-library/angular --save-dev
```


## Main Tasks

* Use `npm run start` to run the application
* Use `npm run test` to run the tests
* Use `npm run build` to build the application
* Use `npx ng ...` to work with the angular cli in general


