import React, { useState } from "react";
import TerminalCard from "../../components/terminalcard/terminalcard";
import "./home.css";
import ReactSetup from "../reactsetup/reactsetup";
import ThreeFiberSetup from "../threefibersetup/threefibersetup";
import MernSetup from "../mernsetup/mernsetup";

const docLinks = [
    { name: "React Official Docs", url: "https://react.dev" },
    { name: "Three.js Fiber Docs", url: "https://docs.pmnd.rs/react-three-fiber" },
    { name: "MERN Stack Docs", url: "https://www.mongodb.com/mern-stack" },
    { name: 'Star Wars Api Docs', url: "https://swapi.py4e.com/"},
    { name: 'Lord of the Rings Api Docs', url: 'https://the-one-api.dev/'},
];

const setupGuides = [
    { name: "Basic React App Setup", key: "react", component: <ReactSetup /> },
    { name: "React Three Fiber Setup", key: "threeFiber", component: <ThreeFiberSetup /> },
    { name: "M.E.R.N. Setup Guide", key: "mern", component: <MernSetup /> },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState(null); // Manages which tab is open
    const [selectedSetup, setSelectedSetup] = useState(null); // Manages selected guide

    const toggleTab = (tabName) => {
        setActiveTab(activeTab === tabName ? null : tabName); // Toggle between active tab or close
    };

    return (
        <div className="home">
            <div className="side-menu">
                {/* Toggle Different React Setups */}
                <button onClick={() => toggleTab("setups")}>Different React Setups</button>

                {activeTab === "setups" && (
                    <ul>
                        {setupGuides.map((setup) => (
                            <li 
                                key={setup.key} 
                                className="menu-item" 
                                onClick={() => setSelectedSetup(selectedSetup === setup.key ? null : setup.key)}
                            >
                                {setup.name}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Toggle Doc-Links */}
                <button onClick={() => toggleTab("docs")}>Doc-Links</button>

                {activeTab === "docs" && (
                    <ul>
                        {docLinks.map((doc, index) => (
                            <li key={index} className="menu-item">
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                    {doc.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="display">
                <h1>Project Setup Guides</h1>
                <TerminalCard terminaltext={["Complete Project setup guide's step by step", "Just for you 🫶"]} />

                {/* Dynamically render the selected guide */}
                {setupGuides.find((setup) => setup.key === selectedSetup)?.component}
            </div>
        </div>
    );
};

export default Home;
