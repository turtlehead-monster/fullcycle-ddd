import Order from "../entity/order";

export default class OrderService {

    static total(orders: Order[]){
        return orders.reduce((acc, order: Order) => acc + order.total(), 0);
    }
}