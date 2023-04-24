import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

const address = new Address("Rua", 13, "77032145", "São Paulo");

let customer = new Customer("125", "");
customer.changeAddress(address);
customer.activate();


const item1  = new OrderItem("12", "Livro", 100.00, "p1", 2);
const item2 = new OrderItem("11", "Caderno", 50.00, "p2", 1);
const order = new Order("1", "125", [item1, item2]);