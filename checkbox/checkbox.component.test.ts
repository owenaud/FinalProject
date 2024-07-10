import { beforeEach, describe, it, expect } from "@jest/globals";
import { CheckboxComponent } from "./checkbox.component";
import { bootstrap } from "@gsilber/webez";

describe("CheckboxComponent Tests", () => {
  let component: CheckboxComponent | undefined;

  beforeEach(() => {
    const testHtml: string = `<div>Testing Environment</div><div id='main-target'></div>`;
    component = bootstrap<CheckboxComponent>(CheckboxComponent, testHtml);
  });

  describe("Initialization", () => {
    it("should instantiate the component", () => {
      expect(component).toBeInstanceOf(CheckboxComponent);
    });
  });
});
