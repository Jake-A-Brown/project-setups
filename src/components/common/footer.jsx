import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <p>&copy; {currentYear} All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        width: "100%",
        height: '10vh',
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#222",
        color: "#fff",
    }
};

export default Footer;
