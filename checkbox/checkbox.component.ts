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
  public isChecked: boolean = false;

  @BindValue("checkboxLabel")
  private label: string = "";

  private completionDates: Set<string> = new Set();
  private today: string;
  private graphUpdater: EventSubject<number> = new EventSubject<number>();
  private graphComponent: GraphComponent;

  constructor(label: string, graphComponent: GraphComponent) {
    super(html, css);
    this.label = label;
    this.graphComponent = graphComponent;
    this.today = this.formatDate(new Date());
  }

  private formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  @Click("checkHabit")
  private toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.addCompletionDate();
    } else {
      this.removeCompletionDate();
    }
    console.log("Completion Dates: ", Array.from(this.completionDates));
    console.log("Checkbox State: ", this.isChecked);
  }

  private addCompletionDate() {
    if (!this.completionDates.has(this.today)) {
      this.completionDates.add(this.today);
      this.graphComponent.graphIncrement(20);
    }
  }

  private removeCompletionDate() {
    if (this.completionDates.has(this.today)) {
      this.completionDates.delete(this.today);
      this.graphComponent.graphIncrement(-20);
    }
  }

  public getCompletionDates(): string[] {
    return Array.from(this.completionDates);
  }
}
