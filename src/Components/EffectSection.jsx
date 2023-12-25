import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState, useEffect, useCallback } from "react";
import useInput from "../Hooks/useInput";

export default function EffectSection() {
  const input = useInput(); //кастомный хук(вернёт объект с value и onChange методом).
  const [modal, setModal] = useState(false); // всплывающее окно.
  const [loading, setLoading] = useState(false); // отображение надписи пока идёт загрузка с бекэнда.
  const [users, setUsers] = useState([]); //массив юзеров с бекэнда.

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []); // пустой массив при старте.
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); //fetchUsers - зависимость.

  return (
    <section>
      <Button onClick={() => setModal(true)}>Открыть информацию</Button>
      <Modal open={modal}>
        <h3>Hellow from modal</h3>
        <p>akajksjdkajshkdjsa</p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input}></input>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
//useCallback - хэширует типо объект, и он не меняется.
//{...input} - value={input.value} onChange={.....} Разворачиваем объект.

//вариант через useEffect:
//   useEffect(() => {
//     async function fetchUsers() {
//       setLoading(true);
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const users = await response.json();
//       setUsers(users);
//       setLoading(false);
//     }

//     fetchUsers();
//   }, []); // функция fetchUsers вызывается один раз при инициализации, имеет
//больше не вызывается при перерисовке, т.к. в втором арг. нет зависимостей.
