import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description?: string;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default PageMeta;
