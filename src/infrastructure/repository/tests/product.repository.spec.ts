import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../db/sequelize/model/product.model";
import Product from "../../../domain/entity/product";

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

        const productModel = await ProductRepository.findOne({ where: {id: "1"}});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Product 1",
            price: 100
        });
    })
});