import {AppComponent} from './app.component';
import {MockBuilder, MockRender} from "ng-mocks";
import {screen} from "@testing-library/angular";

describe(AppComponent.name, () => {

  beforeEach(() => MockBuilder(AppComponent))

  it('should run tests', () => {
    MockRender(AppComponent)
    screen.getByText("TDD anyone?")
  });
});
