"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("../address"));
const customer_1 = __importDefault(require("../customer"));
describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new customer_1.default("", "Jhon");
        }).toThrowError("Id is required");
    });
    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new customer_1.default("123", "");
        }).toThrowError("Name is required");
    });
    it("should change name", () => {
        let customer = new customer_1.default("123", "Jhon");
        customer.changeName("Peter");
        expect(customer.name).toBe("Peter");
    });
    it("should throw error when try change name passing empty", () => {
        let customer = new customer_1.default("123", "Jhon");
        expect(() => {
            customer.changeName("");
        }).toThrowError("Name is required");
    });
    it("should activate customer", () => {
        const customer = new customer_1.default("1", "Jhon");
        const address = new address_1.default("Rua LO 11", 13, "77036-032", "Palmas");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should deactivate customer", () => {
        const customer = new customer_1.default("1", "Jhon");
        const address = new address_1.default("Rua LO 11", 13, "77036-032", "Palmas");
        customer.Address = address;
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
    it("should throw error when address is undefined when you activate a customer", () => {
        const customer = new customer_1.default("1", "Jhon");
        expect(() => {
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});
