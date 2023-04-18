import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", ()=>{
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("CustomerId is required");
    })

    it("should throw error when items are empty", () => {
        expect(() => {
            let order = new Order("123", "12", []);
        }).toThrowError("Items do not be empty");
    })

    it("should calculate total", () => {
        const item = new OrderItem("1", "Item 1", 199.50, 1);
        const item2 = new OrderItem("2", "Item 2", 100.00, 1);
        const order = new Order("1", "123", [item]);

        expect(order.total()).toBe(199.50);

        const order2 = new Order("3", "123", [item, item2]);

        expect(order2.total()).toBe(299.50);
    })
});