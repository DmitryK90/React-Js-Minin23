import logo from "../../../public/logo.jpg";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  // height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval); //чистим таймер при скрытии header(нет утечек памяти).
    };
  }, []);
  return (
    <HeaderContainer>
      <img src={logo}></img>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
