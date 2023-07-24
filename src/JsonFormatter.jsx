import React, { useState } from "react";

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [transformedJson, setTransformedJson] = useState("");
  const [compressedJson, setCompressedJson] = useState("");

  const handleTransFormClick = () => {
    try {
      const parsedJson = JSON.parse(inputJson);
      const formattedObj = transformJsonKeys(parsedJson);
      setTransformedJson(JSON.stringify(formattedObj, null, 2));
    } catch (error) {
      setTransformedJson("Invalid JSON");
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

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
      setTransformedJson("");
      setCompressedJson("");
    } catch (error) {
      setFormattedJson("Invalid JSON");
      setTransformedJson("");
      setCompressedJson("");
    }
  };

  const transformJsonKeys = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(transformJsonKeys);
    }

    return Object.keys(obj).reduce((formattedObj, key) => {
      const formattedKey = key.replace(/_(.)/g, (_, letter) =>
        letter.toUpperCase()
      );
      formattedObj[formattedKey] = transformJsonKeys(obj[key]);
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

      <button onClick={handleFormatJson}>Format</button>
      <button onClick={handleTransFormClick}>Transform</button>
      <button onClick={handleCompressClick}>Compression</button>

      {formattedJson && (
        <div>
          <h3>Formatted JSON:</h3>
          <textarea
            value={formattedJson}
            readOnly
            style={{ width: "100%", height: "150px" }}
          />
        </div>
      )}

      {transformedJson && (
        <div>
          <h3>Transformed JSON:</h3>
          <textarea
            value={transformedJson}
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
