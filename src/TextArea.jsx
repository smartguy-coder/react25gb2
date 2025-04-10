export default function TextArea() {
  return (
    <textarea
      onChange={(e) => console.log(e.target.value)}
      className="textarea"
      placeholder="Type your text here..."
      spellCheck="false"
    />
  );
}
