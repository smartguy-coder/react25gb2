import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("Script tag detected!");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setWarningText("Email detected!");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        spellCheck="true"
      />
      <Warning warningText={warningText} />
    </div>
  );
}
