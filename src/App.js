import "./App.css";

import { Helmet } from "react-helmet";

import JsonFormatter from "./JsonFormatter";

function App() {
  return (
    <div>
      <Helmet>
        <title>Json formatting, transform and compression</title>
        <meta
          name="description"
          content="Json formatting, json conversion, json compress"
        />
        {/* Other meta tags */}
      </Helmet>
      <h1>JSON Formatter</h1>
      <JsonFormatter />
    </div>
  );
}

export default App;
