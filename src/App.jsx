import "./sass/main.scss";
import Cards from "./components/Cards";
import Forms from "./components/Forms";
import { useState } from "react";
import Final from "./components/Final";
function App() {
  const [holderName, setHolderName] = useState("");
  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
  const [cardNumber3, setCardNumber3] = useState("");
  const [cardNumber4, setCardNumber4] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [proceed, setProceed] = useState(false);
  return (
    <div className="u--flex">
      <Cards
        holderName={holderName}
        cardNumber1={cardNumber1}
        cardNumber2={cardNumber2}
        cardNumber3={cardNumber3}
        cardNumber4={cardNumber4}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
      {proceed ? (
        <Final
          setProceed={setProceed}
          setHolderName={setHolderName}
          setCardNumber1={setCardNumber1}
          setCardNumber2={setCardNumber2}
          setCardNumber3={setCardNumber3}
          setCardNumber4={setCardNumber4}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
        />
      ) : (
        <Forms
          holderName={holderName}
          cardNumber1={cardNumber1}
          cardNumber2={cardNumber2}
          cardNumber3={cardNumber3}
          cardNumber4={cardNumber4}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc}
          setHolderName={setHolderName}
          setCardNumber1={setCardNumber1}
          setCardNumber2={setCardNumber2}
          setCardNumber3={setCardNumber3}
          setCardNumber4={setCardNumber4}
          setExpMonth={setExpMonth}
          setExpYear={setExpYear}
          setCvc={setCvc}
          setProceed={setProceed}
        />
      )}
    </div>
  );
}

export default App;
