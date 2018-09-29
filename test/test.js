import chai from "chai";
import { addTwo } from "../addTwo";

let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

describe("test the addition of two numbers", function() {
  it("should return 2 when given 1 and 1", function() {
    expect(addTwo(1, 1)).to.be.equal(2);
  });
  it("should not return 3 when given 1 and 1", function() {
    addTwo(1, 1).should.not.be.equal(3);
  });
  it("should return 2 when given 1 and 1", function() {
    assert.equal(addTwo(1, 1), 2);
  });
});
