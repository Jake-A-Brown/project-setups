import React from "react";
import ReactPrerequisite from "../../components/common/reactprerequisite";
import TerminalCard from "../../components/terminalcard/terminalcard";

const ReactSetup = () => {

    return(
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <h1>Basic React Setup</h1>
            <ReactPrerequisite />

            <h2>Step 1: Create a React App</h2>
            <p><strong>1: </strong>Create an empty folder to store your React project.</p>
            <TerminalCard terminaltext={["Example folder name: ReactProjectFolder"]} />

            <p><strong>2: </strong>Open Visual Studio Code (VSCode).</p>

            <p><strong>3: </strong>In VSCode, navigate to <strong>File → Open Folder</strong>, then select the folder you created.</p>

            <p><strong>4: </strong>Run the following command in the terminal to create a new React project:</p>
            <TerminalCard terminaltext="npx create-react-app name-of-app" />
            <p>Replace <code>name-of-app</code> with your actual project name.</p>

            <p><strong>Important Notes:</strong></p>
            <ul>
                <li>The project name must be all lowercase.</li>
                <li>This process may take a few minutes as it installs the necessary dependencies.</li>
            </ul>

            <p><strong>5: </strong>After running the command, your folder structure should look like this:</p>
            <TerminalCard terminaltext={["ReactProjectFolder", "    ├── name-of-app"]} />

            <h2>Step 2: Navigate to the Project Directory</h2>
            <p>Once the setup is complete, navigate to your newly created project folder.</p>
            <p><strong>Option 1:</strong> Run the following command in the terminal:</p>
            <TerminalCard terminaltext="cd name-of-app" />

            <h4>Or</h4>

            <p><strong>Option 2:</strong> In VSCode, go to <strong>File → Open Folder</strong> and select the newly created folder.</p>

            <h2>Step 3: Start the Development Server</h2>
            <p>Now, start your development server by running:</p>
            <TerminalCard terminaltext="npm start" />
            <p>This will open your browser at <code>http://localhost:3000/</code>, displaying your running React app.</p>

            <TerminalCard terminaltext={["Congratulations!", "You just created your first React app! 🤓"]} />
        </div>
    );
}

export default ReactSetup;