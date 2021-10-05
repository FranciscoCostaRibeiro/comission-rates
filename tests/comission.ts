import { expect } from "chai";
import { rulesService } from "../src/services/rules-service";

describe("Commission tests", () => {
  it("Should equal 0.05", () => {
    const RulesService = new rulesService();
    expect(RulesService.client42(42)).to.equal(0.05);
  });
  it("Should equal null", () => {
    const RulesService = new rulesService();
    expect(RulesService.client42(11)).to.be.null;
  });
});