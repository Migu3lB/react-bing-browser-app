import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WebBrowser from "./WebBrowser";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-100 p-5 text-white bg-dark border rounded-3">
          <h2>Web Browser</h2>
          <p>This is a web browser based on the Microsoft Bing Api.</p>
        </div>
      </div>
      <WebBrowser />
    </>
  );
}
