import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../db/sequelize/model/product.model";
import Product from "../../../domain/entity/product";
import ProductRepository from "../product.repository";

describe("Product repository test", () => {

    let sequileze: Sequelize;

    /* Executa antes de cada teste */
    beforeEach(async () => {
        sequileze = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: {
                force: true
            }
        });

        sequileze.addModels([ProductModel]);
        await sequileze.sync();
    });

    afterEach(async () => {
        await sequileze.close();
    });

    it("should create a product", async() => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" }});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });
    });

    it("should update a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);

        await productRepository.create(product);

        product.changeName("Product updated");
        product.changePrice(200);

        productRepository.update(product);

        const productModel = await ProductModel.findOne({ where: { id: "1"}});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product updated",
            price: 200
        });
    });

    it("should find a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const foundProduct = await productRepository.find(product.id);

        expect(product).toStrictEqual(foundProduct);
    });

    it("should find all products", async () => {
        const productRepository = new ProductRepository();

        let listOfProducts: Product[] = [];
        listOfProducts.push(new Product("1", "Product 1", 100));
        listOfProducts.push(new Product("2", "Product 2", 200));
        listOfProducts.push(new Product("3", "Product 3", 300));
        listOfProducts.push(new Product("4", "Product 4", 400));
        listOfProducts.push(new Product("5", "Product 5", 500));

        listOfProducts.forEach(async (product: Product) => {
            await productRepository.create(product)
        });

        const foundsProducts = await productRepository.findAll();
        expect(listOfProducts).toStrictEqual(foundsProducts);
        
    })
});