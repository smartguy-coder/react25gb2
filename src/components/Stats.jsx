import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default function Stats({ text }) {
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharacrsLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharacrsLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;
  return (
    <section className="stats">
      <Stat label={"Words"} number={numberOfWords} />
      <Stat label={"Characters"} number={numberOfCharacters} />
      <Stat label={"Instagram"} number={instagramCharacrsLeft} />
      <Stat label={"Facebook"} number={facebookCharacrsLeft} />
    </section>
  );
}
