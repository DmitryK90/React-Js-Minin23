import React from "react";
import "../styles.css";
import Button from "./Button/Button";
import { useState, useRef } from "react";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  }); // три state которые ниже объединили в один.

  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("help");
  // const [hasError, setHasError] = useState(true); // пустое поле input name крысным

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    })); //hasError вернёт true/false если что-то забито - false.
  }
  // function handleNameChange(event) {
  //   setName(event.target.value);
  //   setHasError(event.target.value.trim().length === 0);
  // } // старая версия с отд. state

  // function toggleError() {
  //   setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Toggle Error</Button> */}
      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(prev) => ({ ...prev, reason: event.target.value })}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}

//Старая версия:
// return (
//   <section>
//     <h3>Обратная связь</h3>
//     <Button onClick={toggleError}>Toggle Error</Button>
//     <form>
//       <label htmlFor="name">Ваше имя</label>
//       <input
//         type="text"
//         id="name"
//         className="control"
//         value={name}
//         style={{ border: hasError ? "1px solid red" : null }}
//         onChange={handleNameChange}
//       ></input>
//       <label htmlFor="reason">Причина обращения</label>
//       <select
//         id="reason"
//         className="control"
//         value={reason}
//         onChange={(event) => setReason(event.target.value)}
//       >
//         <option value="error">Ошибка</option>
//         <option value="help">Нужна помощь</option>
//         <option value="suggest">Предложение</option>
//       </select>
//       <Button disabled={hasError} isActive={!hasError}>
//         Отправить
//       </Button>
//     </form>
//   </section>
// );
