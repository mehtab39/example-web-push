import { useEffect, useRef } from "react";
import "./App.css";
import WebPushSDK from "sdk-web-push";

function App() {
  const webPushRef = useRef<null | WebPushSDK>(null);

  useEffect(() => {
    webPushRef.current = new WebPushSDK({
      userID: "mehtab-gill",
      webPushKey: import.meta.env.VITE_WEB_PUSH_SERVER_KEY,
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button id="subscribe-button">Subscribe</button>
    </div>
  );
}

export default App;
