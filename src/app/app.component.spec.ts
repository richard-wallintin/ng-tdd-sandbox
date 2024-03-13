import {AppComponent} from './app.component';
import {screen} from "@testing-library/angular";
import {TestBed} from "@angular/core/testing";

describe(AppComponent.name, () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent],
    teardown: {destroyAfterEach: false}
  }))

  it('should run tests', () => {
    TestBed.createComponent(AppComponent);
    screen.getByText("TDD anyone?")
  });
});
