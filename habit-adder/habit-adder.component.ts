import { EzComponent, BindValue, BindValueToNumber } from "@gsilber/webez";
import html from "./habit-adder.component.html";
import css from "./habit-adder.component.css";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { GraphComponent } from "../graph/graph.component";

export class HabitAdderComponent extends EzComponent {
    @BindValue("habits")
    private habitName: string;
    @BindValueToNumber("goal-per-week")
    private goalNumber: number;
    public checkbox: CheckboxComponent;
    public graph: GraphComponent;
    constructor(habitName: string, goalNumber: number, graph: GraphComponent) {
        super(html, css);
        this.habitName = habitName;
        this.goalNumber = goalNumber;
        this.checkbox = new CheckboxComponent(this.habitName, graph);
        this.graph = graph;
    }
    /**
     *
     * @returns the habit name as it is private and can't be accessed directly
     */
    getHabitName(): string {
        return this.habitName;
    }
}