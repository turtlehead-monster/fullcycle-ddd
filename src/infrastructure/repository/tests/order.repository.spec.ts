import { Sequelize } from "sequelize-typescript";

import CustomerModel from "../../db/sequelize/model/customer.model"
import OrderModel from "../../db/sequelize/model/order.model";
import OrderItemModel from "../../db/sequelize/model/order-item.model";
import ProductModel from "../../db/sequelize/model/product.model";
import CustomerRepository from "../customer.repository";
import Customer from "../../../domain/entity/customer";
import Address from "../../../domain/entity/address";
import OrderItem from "../../../domain/entity/order_item";
import ProductRepository from "../product.repository";
import Product from "../../../domain/entity/product";
import Order from "../../../domain/entity/order";

describe("Order repository test", () => {
  let sequelize: Sequelize;
    
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create a new order', async() => {
    const customerRepository = new  CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Rua 10", 10, "77652369", "Palmas"); 
    customer.changeAddress(address);
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);
    const orderItem = new OrderItem("1", product.name, product.price, product.id, 2);

    const order = new Order("1", customer.id, [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: {id: order.id},
      include: ["items"]
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: "1",
      customer_id: "123",
      total: order.total(),
      items: [{
        id: orderItem.id,
        name: orderItem.name,
        price: orderItem.price,
        quantity: orderItem.quantity,
        order_id: "1"
      }]
    });

  })
  
});