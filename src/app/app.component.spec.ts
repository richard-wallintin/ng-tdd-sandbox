import {MockBuilder, MockRender} from "ng-mocks";
import {AppComponent} from "./app.component";
import {AppModule} from "./app.module";
import {screen} from "@testing-library/angular";

describe('AppComponent', () => {

  beforeEach(() => MockBuilder(AppComponent, AppModule))

  it('can run tests', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture).toBeDefined();
    screen.getByText("TDD anyone?")
  })
});
