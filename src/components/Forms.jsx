import { useEffect, useRef, useState } from "react";
// import "/src/sass/main.scss";
function Forms({
  holderName,
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  expMonth,
  expYear,
  cvc,
  setCvc,
  setHolderName,
  setCardNumber1,
  setCardNumber2,
  setCardNumber3,
  setCardNumber4,
  setExpMonth,
  setExpYear,
  setProceed,
}) {
  const [validName, setValidName] = useState("standby");
  const [validCard1, setValidCard1] = useState("standby");
  const [validCard2, setValidCard2] = useState("standby");
  const [validCard3, setValidCard3] = useState("standby");
  const [validCard4, setValidCard4] = useState("standby");
  const [validExpM, setValidExpM] = useState("standby");
  const [validExpY, setValidExpY] = useState("standby");
  const [validCvc, setValidCvc] = useState("standby");
  function validateHolderName(holderName) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(holderName);
  }
  function validateCardNumbers(input) {
    const regex = /^\d{4}$/;
    return regex.test(input);
  }
  function validateExpM(input) {
    const regex = /^(0[1-9]|1[0-2])$/;
    return regex.test(input);
  }
  function validateExpY(input) {
    const regex = /^\d{2}$/;
    return regex.test(input);
  }
  function validateCvc(input) {
    const regex = /^\d{3}$/;
    return regex.test(input);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setValidName(validateHolderName(holderName));
    setValidCard1(validateCardNumbers(cardNumber1));
    setValidCard2(validateCardNumbers(cardNumber2));
    setValidCard3(validateCardNumbers(cardNumber3));
    setValidCard4(validateCardNumbers(cardNumber4));
    setValidExpM(validateExpM(expMonth));
    setValidExpY(validateExpY(expYear));
    setValidCvc(validateCvc(cvc));
  }
  useEffect(() => {
    if (
      validName === true &&
      validCard1 === true &&
      validCard2 === true &&
      validCard3 === true &&
      validCard4 === true &&
      validExpM === true &&
      validExpY === true &&
      validCvc === true
    ) {
      setProceed(true);
    } else {
      setProceed(false);
    }
  }, [
    validName,
    validCard1,
    validCard2,
    validCard3,
    validCard4,
    validExpM,
    validExpY,
    validCvc,
    setProceed,
  ]);
  const nextCardRef1 = useRef("null");
  const nextCardRef2 = useRef("null");
  const nextCardRef3 = useRef("null");
  const expMRef = useRef("null");
  const expYRef = useRef("null");
  const cvcRef = useRef("null");
  const handleCardChange1 = (cardNumber1, setCardNumber1) => {
    setCardNumber1(cardNumber1);
    if (cardNumber1.length >= 4) {
      nextCardRef1.current.focus();
    }
  };
  const handleCardChange2 = (cardNumber2, setCardNumber2) => {
    setCardNumber2(cardNumber2);
    if (cardNumber2.length >= 4) {
      nextCardRef2.current.focus();
    }
  };
  const handleCardChange3 = (cardNumber3, setCardNumber3) => {
    setCardNumber3(cardNumber3);
    if (cardNumber3.length >= 4) {
      nextCardRef3.current.focus();
    }
  };
  const handleCardChange4 = (cardNumber4, setCardNumber4) => {
    setCardNumber4(cardNumber4);
    if (cardNumber4.length >= 4) {
      expMRef.current.focus();
    }
  };
  const handleExpMChange = (expMonth, setExpMonth) => {
    setExpMonth(expMonth);
    if (expMonth.length >= 2) {
      expYRef.current.focus();
    }
  };
  const handleExpYChange = (expYear, setExpYear) => {
    setExpYear(expYear);
    if (expYear.length >= 2) {
      cvcRef.current.focus();
    }
  };
  return (
    <div className="forms">
      <div className="forms--name u--margin-bottom__small">
        <h2 className="u--margin-bottom__very-small u--capitalize u--font-size">
          Card holder name
        </h2>
        <input
          className={validName ? "forms--name__input" : "forms--name__error"}
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setHolderName(e.target.value)}
        />
        <h4
          className={
            validName ? "forms--name__no-error" : "forms--name__error-text"
          }
        >
          please enter a valid name
        </h4>
      </div>
      <div className="forms--card-number u--margin-bottom__small">
        <h2 className="u--margin-bottom__very-small u--capitalize u--font-size">
          Card number
        </h2>
        <input
          className={
            validCard1
              ? "forms--card-number__input"
              : "forms--card-number__error"
          }
          placeholder="0000"
          type="text"
          maxLength="4"
          value={cardNumber1}
          onChange={(e) => handleCardChange1(e.target.value, setCardNumber1)}
        />
        <input
          className={
            validCard2
              ? "forms--card-number__input"
              : "forms--card-number__error"
          }
          placeholder="0000"
          type="text"
          maxLength="4"
          value={cardNumber2}
          onChange={(e) => handleCardChange2(e.target.value, setCardNumber2)}
          ref={nextCardRef1}
        />
        <input
          className={
            validCard3
              ? "forms--card-number__input"
              : "forms--card-number__error"
          }
          placeholder="0000"
          type="text"
          maxLength="4"
          onChange={(e) => handleCardChange3(e.target.value, setCardNumber3)}
          ref={nextCardRef2}
        />
        <input
          className={
            validCard4
              ? "forms--card-number__input"
              : "forms--card-number__error"
          }
          placeholder="0000"
          type="text"
          maxLength="4"
          onChange={(e) => handleCardChange4(e.target.value, setCardNumber4)}
          ref={nextCardRef3}
        />
        <h4
          className={
            validCard1 && validCard2 && validCard3 && validCard4
              ? "forms--card-number__no-error"
              : "forms--card-number__error-text"
          }
        >
          Card Number should only contain digits
        </h4>
      </div>
      <div className="u--flex__noMQ">
        <div className="forms--expire u--margin-bottom__small">
          <h2 className="u--margin-bottom__very-small u--capitalize u--font-size">
            exp. date (MM/YY)
          </h2>
          <input
            className={
              validExpM ? "forms--expire__input" : "forms--expire__error"
            }
            placeholder="MM"
            type="text"
            maxLength="2"
            onChange={(e) => handleExpMChange(e.target.value, setExpMonth)}
            ref={expMRef}
          />
          <input
            className={
              validExpY ? "forms--expire__input" : "forms--expire__error"
            }
            placeholder="YY"
            type="text"
            maxLength="2"
            onChange={(e) => handleExpYChange(e.target.value, setExpYear)}
            ref={expYRef}
          />
          <h4
            className={
              validExpM && validExpY
                ? "forms--expire__no-error"
                : "forms--expire__error-text"
            }
          >
            Invalid Expire {validExpM ? "" : "month"}{" "}
            {validExpY === false && validExpM === false ? " and " : ""}{" "}
            {validExpY ? "" : "year"}
          </h4>
        </div>
        <div className="forms--cvc u--margin-bottom__small">
          <h2 className="u--margin-bottom__very-small u--capitalize u--font-size">
            cvc
          </h2>
          <input
            className={validCvc ? "forms--cvc__input" : "forms--cvc__error"}
            placeholder="Eg. 123"
            type="text"
            maxLength="3"
            onChange={(e) => setCvc(e.target.value)}
            ref={cvcRef}
          />
          <h4
            className={
              validCvc ? "forms--cvc__no-error" : "forms--cvc__error-text"
            }
          >
            Invalid cvc
          </h4>
        </div>
      </div>
      <div>
        <button className="forms--button u--capitalize" onClick={handleSubmit}>
          confirm
        </button>
      </div>
    </div>
  );
}

export default Forms;
