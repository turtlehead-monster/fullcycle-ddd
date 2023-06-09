"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    validate() {
        if (this._id.length === 0) {
            throw Error("Id is required");
        }
        if (this._name.length === 0) {
            throw Error("Name is required");
        }
        if (this._price < 0) {
            throw Error("Price must be greater than zero");
        }
        return true;
    }
    changeName(newName) {
        this._name = newName;
        this.validate();
    }
    changePrice(newPrice) {
        this._price = newPrice;
        this.validate();
    }
}
exports.default = Product;
