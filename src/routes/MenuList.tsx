import { Routes } from "./routes-constants";

export interface MenuListInterface {
  path: string;
  name: string;
  icon: any;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.Dashboard,
    name: "Dashboard",
    icon: ""
  }
];
