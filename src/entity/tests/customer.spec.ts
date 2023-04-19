import Address from "../address";
import Customer from "../customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "Jhon")
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "")
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        let customer = new Customer("123", "Jhon");

        customer.changeName("Peter");

        expect(customer.name).toBe("Peter");
    });

    it("should throw error when try change name passing empty", () => {
        let customer = new Customer("123", "Jhon");

        expect(() => {
            customer.changeName("");
        }).toThrowError("Name is required");
    });

    it("should activate customer", () => {
        const customer = new Customer("1", "Jhon");
        const address = new Address("Rua LO 11", 13, "77036-032", "Palmas");

        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Jhon");
        const address = new Address("Rua LO 11", 13, "77036-032", "Palmas");

        customer.Address = address;

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it("should throw error when address is undefined when you activate a customer", () => {
        const customer = new Customer("1", "Jhon");

        expect(() => {
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    })
});