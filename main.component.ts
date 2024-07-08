import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { HabitInterfaceComponent } from "./habit-interface/habit-interface.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    public addHabit = new HabitInterfaceComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.addHabit, "add-habit");
    }
}