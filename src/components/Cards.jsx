import "/src/sass/main.scss";
export default function Cards({
  holderName,
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  expMonth,
  expYear,
  cvc,
}) {
  return (
    <div className="cards">
      <div className="cards--front">
        <img
          className="cards--front__image"
          src="/src/assets/images/card-logo.svg
          "
          alt="card-logo"
        />
        <p className="cards--front__number">
          {cardNumber1} {cardNumber2} {cardNumber3} {cardNumber4}
        </p>
        <p className="cards--front__name">{holderName}</p>
        <p className="cards--front__expire">
          {expMonth}/{expYear}
        </p>
      </div>
      <div className="cards--behind">
        <p className="cards--behind__cvc">{cvc}</p>
      </div>
    </div>
  );
}
