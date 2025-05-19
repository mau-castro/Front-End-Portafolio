import TopFooter from "./TopFooter/TopFooter";
import { useState } from "react";

const Footer = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return ( 
        <footer className="footer">
            <TopFooter />

        </footer>
    );
}
 
export default Footer;