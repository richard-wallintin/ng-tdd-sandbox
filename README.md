# Angular TDD Sandbox

How this project was created:

```sh
npx -p @angular/cli ng new ng-tdd-sandbox --prefix tdd --strict --routing --style scss
cd ng-tdd-sandbox
npx ng add @angular-eslint/schematics
npm install ng-mocks --save-dev
npm install ts-mockito --save-dev
npm install @testing-library/angular@10 --save-dev 
```

The latest testing-library (v11) was not compatible with Angular v12.

## Development server

Run `npx ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npx ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npx ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
