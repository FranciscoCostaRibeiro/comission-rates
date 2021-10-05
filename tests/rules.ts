import { expect } from "chai";
import { rulesService } from "../src/services/rules-service";

describe("Rules client 42", () => {
  it("Should equal 0.05", () => {
    const RulesService = new rulesService();
    expect(RulesService.client42(42)).to.equal(0.05);
  });
  it("Should equal null", () => {
    const RulesService = new rulesService();
    expect(RulesService.client42(11)).to.be.null;
  });
});

describe("Rules default", () => {
  it("Should equal 5", () => {
    const RulesService = new rulesService();
    expect(RulesService.default(1000)).to.equal(5);
  });
  it("Should equal 10", () => {
    const RulesService = new rulesService();
    expect(RulesService.default(2000)).to.equal(10);
  });
});
