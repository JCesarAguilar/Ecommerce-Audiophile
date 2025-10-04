import { useAuth } from "@/context/AuthContext";
import { IOrder } from "@/interfaces/IOrder";
import { getAllOrders } from "@/services/orders.services";
import { useEffect, useState } from "react";
import Loading from "../common/Loading";

export default function OrderList() {
  const { dataUser } = useAuth();

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!dataUser?.token) {
        setOrders([]);
        return;
      }
      setIsLoading(true);
      setError(null);

      try {
        const ordersResponse = await getAllOrders(dataUser?.token);
        setOrders(ordersResponse);
      } catch (err) {
        console.error("Error al traer información", err);
        setError("Ups no pudimos cargar esta información");
        setOrders([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [dataUser?.token]);

  return (
    <div className="bg-white-smoke lg:px-30">
      <h2 className=" text-xl font-semibold py-4 text-center lg:text-2xl lg:py-6">
        Mis Órdenes
      </h2>

      {/* Estado de error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 ">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-sm underline hover:no-underline"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Estado de loading */}
      {isLoading ? (
        <Loading />
      ) : orders && orders.length > 0 ? (
        <div className="overflow-x-auto px-5">
          <table className="w-full text-sm">
            <thead className="bg-gray-soft">
              <tr className="text-[16px]">
                <th className="px-4 py-2 text-center">ID</th>
                <th className="px-4 py-2 text-center">Productos</th>
                <th className="px-4 py-2 text-center">Estado</th>
                <th className="px-4 py-2 text-center">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-soft">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 text-center lg:text-[15px]"
                >
                  <td className="px-4 py-3 ">{order.id}</td>
                  <td className="px-4 py-3">{order.products?.length || 0}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-orange-strong text-white-smoke rounded-full text-xs">
                      {order.status || "Procesada"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(order.date || Date.now()).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 bg-white-smoke rounded-lg">
          <p className="text-gray-dark">No tienes órdenes todavía</p>
        </div>
      )}
    </div>
  );
}
