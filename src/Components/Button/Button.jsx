import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  );
}
//children - передаём дрчерние элементы сразу на выход,
//, в данном случае - название кнопки 'Главная'(может передаваться
// как <Button>Главная</Button>)
//...props - все оставшиеся параметры
//поступают в него, будет объект props который мы можем развернуть в компонент.
