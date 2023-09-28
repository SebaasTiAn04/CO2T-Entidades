import Footer from "../components/Footer";
/* import NavbarMain from "../components/NavbarMain"; */
import { Outlet } from "react-router-dom";
const LayoutMain = () => {
  return (
    <div>
{/*       <NavbarMain /> */}
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;