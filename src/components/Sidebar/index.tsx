import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as DesignIcon } from "../../assets/icons/design.svg";
import { ReactComponent as OrderIcon } from "../../assets/icons/order.svg";
import { ReactComponent as InventoryIcon } from "../../assets/icons/inventory.svg";
import { ReactComponent as TruckIcon } from "../../assets/icons/truck.svg";
import { ReactComponent as ContactIcon } from "../../assets/icons/contact.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as BillingIcon } from "../../assets/icons/billing.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as ChevronLeftIcon } from "../../assets/icons/chevron-left.svg";

import { Menu } from '../Menu/index';

const groupsMenu = [
  [
    { name: "Dashboard", icon: <DashboardIcon  className="icon-menu"/> },
    { name: "Design", icon: <DesignIcon  className="icon-menu"/> },
    { name: "Orders", icon: <OrderIcon  className="icon-menu"/> },
    { name: "Inventory", icon: <InventoryIcon  className="icon-menu"/> },
    { name: "Shipments", icon: <TruckIcon  className="icon-menu"/> },
    { name: "Contacts", icon: <ContactIcon  className="icon-menu"/> },
  ],
  [
    { name: "Profile", icon: <ProfileIcon  className="icon-menu"/> },
    { name: "Billing", icon: <BillingIcon  className="icon-menu"/> },
    { name: "Help", icon: <HelpIcon  className="icon-menu"/> },
    { name: "Logout", icon: <LogoutIcon className="icon-menu" /> },
  ]
];

export function Sidebar() {
  return (
    <aside className="flex flex-col py-4 px-6 w-52 border-r border-r-gray-200 relative">
      <button className="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200">
        <ChevronLeftIcon className="w-4 h-4 text-gray-400"/>
      </button>

      <a href="#">
        <img src="img/logo.png" alt="Swagup" className="w-24" />
      </a>

      <Menu groups={groupsMenu} />
    </aside>
  );
}