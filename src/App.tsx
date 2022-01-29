import { Sidebar } from "./components/Sidebar";
// import ChevronLeftIcon from "./assets/icons/chevron-left.svg";
// import ArrowLeftIcon from "./assets/icons/arrow-left.svg";
// import BoxIcon from "./assets/icons/box.svg";
// import TShirtIcon from "./assets/icons/t-shirt.svg";
// import ChevronRightIcon from "./assets/icons/chevron-right.svg";
// import InfoIcon from "./assets/icons/info.svg";

export function Dashboard() {
  return (
    <div className="flex w-full h-screen font-sans text-gray-900 bg-white">
      <Sidebar />
    </div>
  );
}