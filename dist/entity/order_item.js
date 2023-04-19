"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, name, price, productId, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._productId = productId;
        this.validate();
    }
    orderItemTotal() {
        return this._price * this._quantity;
    }
    validate() {
        if (this._quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }
        return true;
    }
}
exports.default = OrderItem;
