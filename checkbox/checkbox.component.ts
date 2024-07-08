import {
    BindCheckedToBoolean,
    BindValue,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./checkbox.component.html";
import css from "./checkbox.component.css";
import { GraphComponent } from "../graph/graph.component";

export class CheckboxComponent extends EzComponent {
    @BindCheckedToBoolean("checkHabit")
    public checked: boolean = false;
    @BindValue("checkboxLabel")
    private checkLabel: string = "";
    public dates: string[] = [];
    public currentDate: string = this.modernDate(new Date());
    addGraph: EventSubject<number> = new EventSubject<number>();
    public graph: GraphComponent;
    constructor(checkLabel: string, graph: GraphComponent) {
        super(html, css);
        this.checkLabel = checkLabel;
        this.graph = graph;
    }
    /**
     * @description : converts the date parameter to today's date
     *
     * @param date : the date to be converted to today's date
     * @returns : today's date
     */
    modernDate(date: Date): string {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return year + "-" + month + "-" + day;
    }
    /**
     *
     * @description : checks and adds the current date to the array or unchecks and removes the current date
     */
    @Click("checkHabit")
    onCheckBoxClick() {
        this.checked = !this.checked;
        //this.addGraph.next(20);
        if (this.checked) {
            if (!this.dates.includes(this.currentDate)) {
                this.dates.push(this.currentDate);
                this.graph.graphIncrement(20);
            } else {
                let index: number = this.dates.indexOf(this.currentDate);
                if (index > -1) {
                    this.dates.splice(index, 1);
                }
            }
        }
        if (!this.checked && this.dates.includes(this.currentDate)) {
            let index: number = this.dates.indexOf(this.currentDate);
            this.dates.splice(index, 1);
            this.graph.graphIncrement(-20);
        }
        console.log("dates array: ", this.dates);
        console.log(this.checked);
    }
    getDates(): string[] {
        return this.dates;
    }
}