import Customer from "../../entity/customer";
import Order from "../../entity/order";
import OrderItem from "../../entity/order_item";
import OrderService from "../order.service";

describe("Order serivice unit tests", () => {

    it("should place an order", () => {
        const customer = new Customer("c1", "Customer 1");
        const item1 = new OrderItem("o1", "Item 1", 10, "p1", 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("should get total of all orders", () => {
        const item1 = new OrderItem("1", "Item 1", 100, "p1", 1);
        const item2 = new OrderItem("2", "Item 2", 200, "p2", 2);

        const order1 = new Order("o1", "c1", [item1, item2]);
        
        const item3 = new OrderItem("3", "Item 3", 15, "p3", 1);
        const order2 = new Order("o2", "c2", [item3]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(515);

    });

});