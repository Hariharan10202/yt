import StudioLayout from "@/modules/studio/ui/layout/studio-layout";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <StudioLayout>{children}</StudioLayout>;
};

export default Layout;
