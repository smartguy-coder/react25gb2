function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default function Stats({ text }) {
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharacrsLeft = 280 - numberOfCharacters;
  const facebookCharacrsLeft = 2200 - numberOfCharacters;
  return (
    <section className="stats">
      <Stat label={"Words"} number={numberOfWords} />
      <Stat label={"Characters"} number={numberOfCharacters} />
      <Stat label={"Instagram"} number={instagramCharacrsLeft} />
      <Stat label={"Facebook"} number={facebookCharacrsLeft} />
    </section>
  );
}
