// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p>© {year} Organika. All rights reserved.</p> {/* I'll use © as it's standard */}
            <p>Made with ❤️ by Adrian</p>
        </footer>
    );
}
export default Footer;