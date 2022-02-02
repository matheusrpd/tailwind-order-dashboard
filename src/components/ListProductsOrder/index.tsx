import { formatMoney } from "../../utils/formatMoney";

type Order = {
  productName: string;
  price: number;
  quantity: number;
}

type ListProductsOrderProps = {
  orders: Order[];
}

export function ListProductsOrder({ orders }: ListProductsOrderProps) {
  return (
    <>
      {orders.map(order => (
        <li key={order.productName} className="py-2 border-b border-gray-200 last:border-none">
          <strong className="block mt-2 text-sm font-semibold text-gray-800">{order.productName}</strong>
          <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
            <span>{formatMoney(order.price)} x {order.quantity}</span>
            <span className="font-bold text-gray-800">{formatMoney(order.price * order.quantity)}</span>
          </div>
          <a href="" className="inline-block mt-3 text-xs font-semibold leading-relaxed text-blue-500 hover:text-blue-600">Edit breakdown</a>
        </li>
      ))}
    </>
  );
}