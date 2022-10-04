import DynamicNavBar from "./dynamicNavBar";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      {children}
      <DynamicNavBar />
    </div>
  );
};

export default Layout;
