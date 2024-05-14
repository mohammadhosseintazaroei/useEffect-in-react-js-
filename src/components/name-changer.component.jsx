import { useEffect, useState } from "react";
import "./name-changer.styles.css";

function NameChanger() {
  const [fullName, setFullName] = useState();
  const [changedNumber, setChangedNumber] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFullName(e.target.elements.fullName.value);
  };
  useEffect(() => {
    if (fullName) {
      setChangedNumber(changedNumber + 1);
    }
  }, [fullName]);
  const disableInput = !!(changedNumber >= 3);
  return (
    <>
      <div className="container">
        <h1 className="title">
          {fullName
            ? `hey ${fullName}, have a good day`
            : "please enter your name"}
        </h1>
        <form onSubmit={handleFormSubmit} className="form-container">
          <input
            name="fullName"
            className="input"
            placeholder="enter your name ..."
            disabled={disableInput}
          />
          {disableInput ? (
            <>you cant change your name </>
          ) : (
            <>you have {3 - changedNumber} time for change your name</>
          )}
          <button type="submit" className="button">
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NameChanger;
