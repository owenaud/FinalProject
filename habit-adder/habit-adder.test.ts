import { beforeEach, describe, it, expect } from "@jest/globals";
import { HabitAdderComponent } from "./habit-adder.component";
import { bootstrap } from "@gsilber/webez";

describe("HabitAdderComponent Tests", () => {
  let habitAdder: HabitAdderComponent | undefined;

  beforeEach(() => {
    const testHtml: string = `<div>Testing Environment</div><div id='main-target'></div>`;
    habitAdder = bootstrap<HabitAdderComponent>(HabitAdderComponent, testHtml);
  });

  describe("Initialization", () => {
    it("should instantiate HabitAdderComponent", () => {
      expect(habitAdder).toBeInstanceOf(HabitAdderComponent);
    });
  });
});
