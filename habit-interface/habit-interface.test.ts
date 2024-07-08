import { describe, expect, test, beforeAll } from "@jest/globals";
import { HabitInterfaceComponent } from "./habit-interface.component";
import { bootstrap } from "@gsilber/webez";

describe("HabitInterfaceComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<HabitInterfaceComponent>(
            HabitInterfaceComponent,
            html,
        );
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(HabitInterfaceComponent);
        });
    });
});