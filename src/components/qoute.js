import "./comp.css";
import { useState } from "react";
export default function QouteCard({ data }) {
  const [readmore, setReadMore] = useState(false);
  return (
    <div className="qoute_card">
      <div className="qoute_card_text">
        <h1 className="law">{data.title}</h1>
      </div>
      <div className="qoute_card_ref">
        <p className="law_number">law {data.id}</p>
      </div>
    </div>
  );
}
