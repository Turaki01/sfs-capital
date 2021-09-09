import { Routes } from "./routes-constants";

//Menu Icons import
import OverviewIcon from "../assets/svg/overview.svg";
import InvestmentIcon from "../assets/svg/file-chart.svg";
import TransactionsIcon from "../assets/svg/export-solid.svg";
import ShareIcon from "../assets/svg/share-solid.svg";
import DownloadIcon from "../assets/svg/download.svg";

export interface MenuListInterface {
  path: string;
  name: string;
  icon: string;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.Dashboard,
    name: "Overview",
    icon: OverviewIcon,
  },
  {
    path: Routes.Investment,
    name: "Investment",
    icon: InvestmentIcon,
  },
  {
    path: Routes.Transactions,
    name: "Transactions",
    icon: TransactionsIcon,
  },
  {
    path: Routes.InviteFriends,
    name: "Invite Friends",
    icon: ShareIcon,
  },
  {
    path: Routes.Statement,
    name: "Download statement",
    icon: DownloadIcon,
  },
];
