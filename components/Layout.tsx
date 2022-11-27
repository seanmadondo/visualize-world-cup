import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode; //The Website Pages
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Visualize World Cup</title>
        <meta name="description" content="World Cup Viz" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <section>{children}</section>
    </>
  );
};

export default Layout;
