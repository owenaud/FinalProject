import { beforeEach, describe, it, expect } from "@jest/globals";
import { GraphComponent } from "./graph.component";
import { bootstrap } from "@gsilber/webez";

describe("GraphComponent Tests", () => {
  let graphComponent: GraphComponent | undefined;

  beforeEach(() => {
    const testHtml: string = `<div>Testing Environment</div><div id='main-target'></div>`;
    graphComponent = bootstrap<GraphComponent>(GraphComponent, testHtml);
  });

  describe("Initialization", () => {
    it("should instantiate GraphComponent", () => {
      expect(graphComponent).toBeInstanceOf(GraphComponent);
    });
  });
});
