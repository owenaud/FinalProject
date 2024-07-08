import {
    BindStyleToNumberAppendPx,
    BindValue,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./graph.component.html";
import css from "./graph.component.css";

export class GraphComponent extends EzComponent {
    @BindValue("habit-name")
    private habitName: string;
    //@BindValueToNumber("goal-count")
    private count: number = 0;
    @BindStyleToNumberAppendPx("bar-element", "width")
    public size: number = 25;
    addGraph: EventSubject<number> = new EventSubject<number>();
    constructor(habitName: string) {
        super(html, css);
        this.habitName = habitName;
    }
    /**
     *
     * @param amount : the pixels to remove or add to the graph according to the checkbox
     */
    public graphIncrement(amount: number) {
        this.size += amount;
    }
}
