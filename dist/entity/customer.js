"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, name) {
        this._name = "";
        this._active = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get Address() {
        return this._address;
    }
    set Address(address) {
        this._address = address;
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    changeAddress(address) {
        this._address = address;
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    isActive() {
        return this._active;
    }
}
exports.default = Customer;
