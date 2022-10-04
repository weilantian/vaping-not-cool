import DynamicNavBar from "./dynamicNavBar";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      {children}
      <div className="fixed bottom-0 w-full">
        <DynamicNavBar />
      </div>
    </div>
  );
};

export default Layout;
