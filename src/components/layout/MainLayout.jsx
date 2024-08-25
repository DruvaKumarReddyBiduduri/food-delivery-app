import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  );
}
