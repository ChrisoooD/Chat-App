import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID= "1501218f-e751-4570-8896-2549d6c65eaf"
            userName="admin"
            userPassword="admin"
        />
    );
}

export default App;