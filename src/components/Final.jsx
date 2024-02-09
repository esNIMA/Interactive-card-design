import "/src/sass/main.scss";

export default function Final({
  setProceed,
  setHolderName,
  setCardNumber1,
  setCardNumber2,
  setCardNumber3,
  setCardNumber4,
  setExpMonth,
  setExpYear,
  setCvc,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    setProceed(false);
    setHolderName("");
    setCardNumber1("");
    setCardNumber2("");
    setCardNumber3("");
    setCardNumber4("");
    setExpMonth("");
    setExpYear("");
    setCvc("");
  }
  return (
    <div className="container">
      <div className="final">
        <svg
          width="80"
          height="80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#a)" />
          <path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3" />
          <defs>
            <linearGradient
              id="a"
              x1="-23.014"
              y1="11.507"
              x2="0"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6348FE" />
              <stop offset="1" stopColor="#610595" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="final--heading"> Thank You!</h1>
        <p className="final--caption">we&apos;ve added your card details</p>
        <button className="forms--button" onClick={handleSubmit}>
          continue
        </button>
      </div>
    </div>
  );
}
