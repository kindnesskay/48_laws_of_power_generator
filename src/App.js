import QouteCard from "./components/qoute";
import "./App.css";
import Button from "./components/button";
import { useState, useEffect } from "react";
const laws = {
  1: {
    title: "Never Outshine the Master",
    summary:
      " Ensure that those above you always feel superior. Go out of your way to make your bosses look better and feel smarter than anyone else. Everyone is insecure, but an insecure boss can retaliate more strongly than others can",
    id: 1,
  },
};

function App() {
  const [qoute, setQoute] = useState(laws[1]);

  async function getQoute() {
    const rand = Math.floor(Math.random() * 48) + 1;
    let site = "./laws.json";
    const response = await fetch(site)
      .then((res) => res.json())
      .then((res) => setQoute(res[rand]));
  }
  useEffect(() => {
    getQoute();
  }, []);
  return (
    <div className="App">
      <QouteCard data={qoute} />
      <Button handleClick={getQoute} />
    </div>
  );
}

export default App;
