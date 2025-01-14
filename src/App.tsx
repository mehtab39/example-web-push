import { useEffect, useRef } from "react";
import "./App.css";
import WebPushSDK from "sdk-web-push";

function App() {
  const webPushRef = useRef<null | WebPushSDK>(null);

  useEffect(() => {
    webPushRef.current = new WebPushSDK({
      userID: "mehtab-gill",
     // webPushKey: import.meta.env.VITE_WEB_PUSH_SERVER_KEY,
      webPushKey: 'john_doe'
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button id="subscribe-button">Subscribed</button>
    </div>
  );
}

export default App;
