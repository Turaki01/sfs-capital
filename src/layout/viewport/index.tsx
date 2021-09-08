import * as React from "react";
import { useMediaQuery } from "react-responsive";

interface ViewportContent {
  children: React.ReactElement;
}

export const MobileView = ({ children }: ViewportContent) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) return children;
  return null;
};

export const TabletView = ({ children }: ViewportContent) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) return children;
  return null;
};

export const LaptopView = ({ children }: ViewportContent) => {
  const isLaptop = useMediaQuery({ maxWidth: 1024 });

  if (isLaptop) return children;
  return null;
};

export const LaptopLView = ({ children }: ViewportContent) => {
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  if (isLaptop) return children;
  return null;
};
