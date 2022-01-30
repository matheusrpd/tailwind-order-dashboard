import { ReactComponent as ArrowLeftIcon } from "./assets/icons/arrow-left.svg";
import { ReactComponent as ChevronRightIcon } from "./assets/icons/chevron-right.svg";

import { Sidebar } from "./components/Sidebar";
import { ListProducts } from "./components/ListProducts";
// import InfoIcon from "./assets/icons/info.svg";

const products = [
  {
    name: "Preset Pack",
    imgUrl: "/img/preset-pack.png",
    status: "In-Design",
    color: "Blue",
    category: "Pack",
  },
  {
    name: "Swag Pack",
    imgUrl: "/img/swag-pack.png",
    status: "In-Design",
    color: "Custom",
    category: "Pack",
  },
  {
    name: "Bulk Swag",
    imgUrl: "/img/bulk-swag.png",
    status: "Ready to review",
    color: "Custom",
    category: "Bulk",
  },
];

export function Dashboard() {
  return (
    <div className="flex w-full h-screen font-sans text-gray-900 bg-white">
      <Sidebar />

      <main className="overflow-y-scroll flex-1">
        <div className="flex flex-col flex-1 py-4 px-10">
          <button className="flex items-center gap-x-1 text-gray-400">
            <ArrowLeftIcon className="h-4 w-4 fill-current" />
            <span className="inline-block pt-0.5 text-sm leading-6">Back to Order</span>
          </button>

          <section className="pt-6">
            <h1 className="text-2xl font-bold text-gray-900 ">Products</h1>
            <div className="grid grid-cols-3 gap-x-6 py-6">
              <ListProducts products={products} />
            </div>
          </section>

          <section className="py-5">
            <h1 className="text-2xl font-bold text-gray-900">Shipping & Storage</h1>
            <div className="grid grid-cols-2 gap-x-6 pt-6">
              <div className="p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h3 className="font-semibold">Ship Swag to Recipients</h3>
                  <a 
                    href="" 
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View Shipments</span>
                    <ChevronRightIcon className="h-4 w-4 fill-current"/>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">Shipments Created</div>
                    <div className="pt-2 text-lg font-semibold">2</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Shipment</div>
                    <div className="pt-2 text-lg font-semibold">$30.00</div>
                  </div>
                </div>
                <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed rounded-full text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
                  Create Shipment
                </button>
                <img src="img/shipment.png" alt="Shipment" className="absolute right-0 bottom-0 w-28" />
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h3 className="font-semibold">Send Swag to Storage</h3>
                  <a 
                    href="" 
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View SwagUp Storage</span>
                    <ChevronRightIcon className="h-4 w-4 fill-current"/>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">Sending to Storage</div>
                    <div className="pt-2 text-lg font-semibold">300</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Storage</div>
                    <div className="pt-2 text-lg font-semibold">$1,400.00</div>
                  </div>
                </div>
                <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed rounded-full text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
                  Update Storage
                </button>
                <img src="img/storage.png" alt="Shipment" className="absolute right-0 bottom-0 w-28" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <aside className="w-72 border-l border-gray-200"></aside>
    </div>
  );
}