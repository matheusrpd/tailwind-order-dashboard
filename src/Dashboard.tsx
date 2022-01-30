import { ReactComponent as ArrowLeftIcon } from "./assets/icons/arrow-left.svg";

import { Sidebar } from "./components/Sidebar";
import { ListProducts } from "./components/ListProducts";
// import ChevronRightIcon from "./assets/icons/chevron-right.svg";
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

      <main className="flex flex-col flex-1 py-4 px-10">
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
      </main>

      <aside className="w-72 border-l border-gray-200"></aside>
    </div>
  );
}