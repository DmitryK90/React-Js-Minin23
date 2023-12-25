import "./Modal.css";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
}
//dialog - html тег,  у него есть доп. функционал связ. с модальными окнами.
//так же он имеет методы https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog
//createPortal - помогает вставлять в dom дерево(в div с классов 'modal') в index.html.
//useEffect - принимает два параметра, первый - колбак, второй - массив зависимостей
//т,е, от чего должен зависетьэтот эффект, через него можно асинхр. орбащ. к бэкэнду.
