import { EventSubject, EzComponent } from "@gsilber/webez";
import html from "./habit-interface.component.html";
import css from "./habit-interface.component.css";
import {
    BindValue,
    BindValueToNumber,
    Click,
    Input,
    ValueEvent,
} from "@gsilber/webez";
import { HabitAdderComponent } from "../habit-adder/habit-adder.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { GraphComponent } from "../graph/graph.component";

export class HabitInterfaceComponent extends EzComponent {
    @BindValue("habitName")
    private habitName: string = "Code";
    @BindValueToNumber("goals")
    private goal: number = 7;
    @BindValueToNumber("counter", " habits added")
    count: number = 0;
    @BindValue("fail")
    fail: string = "";
    @BindValue("calendar")
    private date: string;
    private currentDate: Date = new Date();
    private checker: number = 0; //used for checking if habit exists
    dateEvent: EventSubject<string> = new EventSubject<string>();
    private graphs: GraphComponent[] = [];
    constructor() {
        super(html, css);
        this.date = this.modernDate(this.currentDate);
    }
    modernDate(date: Date): string {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return year + "-" + month + "-" + day;
    }
    /**
     *
     * @description changes date depending on "day" parameter, and checks to see if the habit was done for that day or not
     * @param day : function takes in the amount of days to remove or add to the date
     */
    private changeDate(day: number) {
        let newDate: Date = new Date(this.date);
        newDate.setDate(newDate.getDate() + day);
        this.date = newDate.toISOString().split("T")[0];
        for (let i = 0; i < this.tracking.length; i++) {
            this.tracking[i].currentDate = this.date;
        }
        for (let i = 0; i < this.tracking.length; i++) {
            for (let j = 0; j < this.tracking[i].getDates().length; j++) {
                console.log(this.tracking[i].getDates()[j], this.date);
                if (this.tracking[i].getDates()[j] == this.date) {
                    this.tracking[i].checked = true;
                    console.log(this.tracking[i].checked);
                    break;
                } else {
                    this.tracking[i].checked = false;
                    console.log(this.tracking[i].checked);
                }
            }
        }
    }
    @Input("calendar")
    onDateChange(e: ValueEvent) {
        this.date = e.value;
    }
    @Click("previous-week")
    onPreviousWeekClick() {
        this.changeDate(-7);
    }
    @Click("next-week")
    onNextWeekClick() {
        this.changeDate(7);
    }

    @Click("next-day")
    OnNextDayClick() {
        this.changeDate(1);
    }
    @Click("previous-day")
    onPreviousDayClick() {
        this.changeDate(-1);
    }
    @Input("habitName")
    onHabitNameChange(e: ValueEvent) {
        this.habitName = e.value;
    }
    @Input("goals")
    onGoalAmountChange(e: ValueEvent) {
        this.goal = +e.value;
    }
    items: HabitAdderComponent[] = [];
    tracking: CheckboxComponent[] = [];
    @Click("cancel-habit")
    onCancelHabitClick() {
        if (this.items.length > 0) {
            this.removeComponent(this.items[this.items.length - 1]);
            this.removeComponent(this.items[this.items.length - 1].checkbox);
            this.removeComponent(this.graphs[this.graphs.length - 1]);
            this.items.pop();
            this.tracking.pop();
            this.graphs.pop();
            this.count--;
        }
    }
    /**
     * @description : default gym habit button, adds the "gym" habit to the website
     *
     */
    @Click("gym")
    onGymClick() {
        this.checker = 0;
        let item: HabitAdderComponent = new HabitAdderComponent(
            "Gym",
            3,
            new GraphComponent("Gym"),
        );
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].getHabitName() == "Gym") {
                this.fail = "Habit already exists: " + item.getHabitName();
                this.checker = 1;
            }
        }
        if (this.checker == 0) {
            this.graphs.push(item.graph);
            this.addComponent(item.graph, "bar-graph");
            this.items.push(item);
            this.tracking.push(item.checkbox);
            this.addComponent(item, "habitDetails");
            this.addComponent(item.checkbox, "trackHabits");
            this.count++;
        }
    }
    /**
     * @description : default read habit button, adds the "read" habit to the website
     *
     */
    @Click("read")
    onReadClick() {
        this.checker = 0;
        let item: HabitAdderComponent = new HabitAdderComponent(
            "Read",
            3,
            new GraphComponent("Read"),
        );
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].getHabitName() == "Read") {
                this.fail = "Habit already exists: " + item.getHabitName();
                this.checker = 1;
            }
        }
        if (this.checker == 0) {
            this.graphs.push(item.graph);
            this.addComponent(item.graph, "bar-graph");
            this.items.push(item);
            this.tracking.push(item.checkbox);
            this.addComponent(item, "habitDetails");
            this.addComponent(item.checkbox, "trackHabits");
            this.count++;
        }
    }
    /**
     * @description : default study habit button, adds the "study" habit to the website
     *
     */
    @Click("study")
    onStudyClick() {
        this.checker = 0;
        let item: HabitAdderComponent = new HabitAdderComponent(
            "Study",
            3,
            new GraphComponent("Study"),
        );
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].getHabitName() == "Study") {
                this.fail = "Habit already exists: " + item.getHabitName();
                this.checker = 1;
            }
        }
        if (this.checker == 0) {
            this.graphs.push(item.graph);
            this.addComponent(item.graph, "bar-graph");
            this.items.push(item);
            this.tracking.push(item.checkbox);
            this.addComponent(item, "habitDetails");
            this.addComponent(item.checkbox, "trackHabits");
            this.count++;
        }
    }
    /**
     * @description : user-input habit button, adds user input habit along with goal amount to the website
     *
     */
    @Click("add-habit-button")
    onAddClick() {
        this.checker = 0;
        let item: HabitAdderComponent = new HabitAdderComponent(
            this.habitName,
            this.goal,
            new GraphComponent(this.habitName),
        );
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].getHabitName() == this.habitName) {
                this.fail = "Habit already exists: " + this.habitName;
                this.checker = 1;
            }
        }
        if (this.checker == 0) {
            this.graphs.push(item.graph);
            this.addComponent(item.graph, "bar-graph");
            this.items.push(item);
            this.tracking.push(item.checkbox);
            this.addComponent(item, "habitDetails");
            this.addComponent(item.checkbox, "trackHabits");
            this.count++;
        }
    }
}