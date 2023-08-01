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

### Karma and TestBed optimizations

To customize karma we need to make some configuration explicit that is otherwise "hidden" in Angular 16:

```sh
npx ng generate config karma
```

This creates the karma.conf.js which can then be tuned (there is a separate commit for these):

* to include the global stylesheet 
* and optimize commandline reporting (`npm install karma-mocha-reporter --save-dev`)

In a next commit, we also re-introduce an explicit "test.ts", which has also been "hidden" in Angular 16:

* the disable automatic testbed teardown after each test to allow visual inspection during development

### Theming

The global "styles.scss" defines some css variables to be used in components for following a standard color scheme.

## Main Tasks

* Use `npm run start` to run the application
* Use `npm run test` to run the tests
* Use `npm run build` to build the application
* Use `npx ng ...` to work with the angular cli in general


