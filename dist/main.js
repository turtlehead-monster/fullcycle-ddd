"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./entity/address"));
const customer_1 = __importDefault(require("./entity/customer"));
const order_1 = __importDefault(require("./entity/order"));
const order_item_1 = __importDefault(require("./entity/order_item"));
const address = new address_1.default("Rua", 13, "77032145", "São Paulo");
let customer = new customer_1.default("125", "");
customer.changeAddress(address);
customer.activate();
const item1 = new order_item_1.default("12", "Livro", 100.00, "p1", 2);
const item2 = new order_item_1.default("11", "Caderno", 50.00, "p2", 1);
const order = new order_1.default("1", "125", [item1, item2]);
