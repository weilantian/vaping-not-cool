import Head from "next/head";
import DynamicNavBar from "./dynamicNavBar";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Vaping is not cool</title>
      </Head>
      {children}
      <div className="fixed z-30 bottom-0 w-full">
        <DynamicNavBar />
      </div>
    </div>
  );
};

export default Layout;
