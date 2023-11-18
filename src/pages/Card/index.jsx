import './style.css';
import { useRef } from 'React';

export const HomePage = () => {
  const numRef1 = useRef();
  const numRef2 = useRef();
  const numRef3 = useRef();
  const numRef4 = useRef();

  const numChange = (e) => {
    if (e.target.value.length == 4) {
      if (e.target == numRef1.current) numRef2.current.focus();
      if (e.target == numRef2.current) numRef3.current.focus();
      if (e.target == numRef3.current) numRef4.current.focus();
    }
  };

  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Card</h1>
      </header>
      <main>
        <p>
          <input
            ref={numRef1}
            size="4"
            maxLength="4"
            className="cardNumber"
            type="text"
            onChange={numChange}
          />
          -
          <input
            ref={numRef2}
            size="4"
            maxLength="4"
            className="cardNumber"
            type="text"
            onChange={numChange}
          />
          -
          <input
            ref={numRef3}
            size="4"
            maxLength="4"
            className="cardNumber"
            type="text"
            onChange={numChange}
          />
          -
          <input
            ref={numRef4}
            size="4"
            maxLength="4"
            className="cardNumber"
            type="text"
            onChange={numChange}
          />
        </p>
      </main>
      <footer></footer>
    </div>
  );
};
