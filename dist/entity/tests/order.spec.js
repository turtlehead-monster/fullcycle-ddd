"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("../order"));
const order_item_1 = __importDefault(require("../order_item"));
describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new order_1.default("", "123", []);
        }).toThrowError("Id is required");
    });
    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new order_1.default("123", "", []);
        }).toThrowError("CustomerId is required");
    });
    it("should throw error when items are empty", () => {
        expect(() => {
            let order = new order_1.default("123", "12", []);
        }).toThrowError("Items do not be empty");
    });
    it("should calculate total", () => {
        const item = new order_item_1.default("1", "Item 1", 199.50, "p1", 2);
        const item2 = new order_item_1.default("2", "Item 2", 100.00, "p2", 2);
        const order = new order_1.default("1", "123", [item]);
        expect(order.total()).toBe(399);
        const order2 = new order_1.default("3", "123", [item, item2]);
        expect(order2.total()).toBe(599);
    });
    it("should throw error when quantity is less or equal 0", () => {
        expect(() => {
            const item = new order_item_1.default("1", "Item 1", 199.50, "p1", 0);
            const order = new order_1.default("1", "123", [item]);
        }).toThrowError("Quantity must be greater than 0");
    });
});
