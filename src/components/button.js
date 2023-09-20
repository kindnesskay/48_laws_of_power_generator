import "./comp.css";

export default function Button({ handleClick }) {
  return (
    <button onClick={handleClick} className="get_random_button">
      Inspire Me
    </button>
  );
}
