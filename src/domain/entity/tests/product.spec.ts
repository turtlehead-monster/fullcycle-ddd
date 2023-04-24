import Product from "../product";

describe("Product unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let product = new Product("", "Product 1", 100);
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let product = new Product("123", "", 100);
        }).toThrowError("Name is required");
    })

    it("should throw error when price is less than zero", () => {
        expect(() => {
            let product = new Product("123", "Produto 1", -1);
        }).toThrowError("Price must be greater than zero");
    });

    it("should be change name", () => {
        let product = new Product("123", "Produto 1", 100);
        product.changeName("Novo Nome Produto");

        expect(product.name).toBe("Novo Nome Produto")
    });

    it("should not change name to empty", () => {
        let product = new Product("123", "Produto 1", 100);
        expect(() => {
            product.changeName("");
        }).toThrowError("Name is required")
    });

    it("should change price", () => {
        let product = new Product("123", "Produto 1", 100);
        product.changePrice(150.0);
        expect(product.price).toBe(150.0);
    });

    it("should not change price to less than zero", () => {
        let product = new Product("123", "Produto 1", 100);

        expect(() => {
            product.changePrice(-150.0);
        }).toThrowError("Price must be greater than zero");
    });
});