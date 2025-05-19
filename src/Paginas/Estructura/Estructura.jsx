import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Estructura = () => {
    return ( 
        <section className="Estructura">
            <Header/>
            <Outlet/>
            <Footer/>
        </section>
     );
}
 
export default Estructura;