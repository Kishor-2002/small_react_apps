import { useEffect, useState } from "react";
import Stepper from "./component/Stepper";
import "./styles.css";

export default function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentage((val) => (val < 100 ? val + 1 : val));
    }, [100]);
  });

  return (
    <div className="App">
      <Stepper percentage={percentage} />
      {/* <div>{percentage}</div> */}
    </div>
  );
}
