export default class Product {

    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;

        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
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

    public changeName(newName: string) {
        this._name = newName;
        this.validate();
    }

    public changePrice(newPrice: number) {
        this._price = newPrice;
        this.validate();
    }
}