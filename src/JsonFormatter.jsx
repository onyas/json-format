import React, { useState } from "react";

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [compressedJson, setCompressedJson] = useState("");

  const handleFormatClick = () => {
    try {
      const parsedJson = JSON.parse(inputJson);
      const formattedObj = formatJsonKeys(parsedJson);
      setFormattedJson(JSON.stringify(formattedObj, null, 2));
    } catch (error) {
      setFormattedJson("Invalid JSON");
    }
  };

  const handleCompressClick = () => {
    try {
      const compressedJsonStr = inputJson.replace(/\s/g, "");
      setCompressedJson(compressedJsonStr);
    } catch (error) {
      setCompressedJson("Invalid JSON");
    }
  };

  const formatJsonKeys = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(formatJsonKeys);
    }

    return Object.keys(obj).reduce((formattedObj, key) => {
      const formattedKey = key.replace(/_(.)/g, (_, letter) =>
        letter.toUpperCase()
      );
      formattedObj[formattedKey] = formatJsonKeys(obj[key]);
      return formattedObj;
    }, {});
  };

  return (
    <div>
      <textarea
        placeholder="Enter JSON here"
        value={inputJson}
        onChange={(e) => setInputJson(e.target.value)}
        style={{ width: "100%", height: "150px" }}
      />

      <button onClick={handleFormatClick}>Transform</button>
      <button onClick={handleCompressClick}>Compression</button>

      {formattedJson && (
        <div>
          <h3>Transformed JSON:</h3>
          <textarea
            value={formattedJson}
            readOnly
            style={{ width: "100%", height: "150px" }}
          />
        </div>
      )}

      {compressedJson && (
        <div>
          <h3>Compressed JSON:</h3>
          <textarea
            value={compressedJson}
            readOnly
            style={{ width: "100%", height: "150px" }}
          />
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;
