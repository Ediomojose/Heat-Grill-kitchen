import React, { ReactNode } from "react";
import WebNavigation from "../Navigation/WebNavigation";
import WebpageFooter from "../Footer/WebpageFooter";

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <main className={`scroll-smooth`}>
      <WebNavigation />
      <section className="2xl:px-48 2xl:bg-white">{children}</section>
      <WebpageFooter />
    </main>
  );
};

export default Template;
