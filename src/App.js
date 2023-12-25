import "./styles.css";
import Header from "./Components/Header/Header";
import TeachingSection from "./Components/TeachingSection";
import DifferencesSection from "./Components/DifferencesSection";
import IntroSection from "./Components/IntroSection";
import TabsSection from "./Components/TabsSection";
import FeedbackSection from "./Components/FeedBackSection";
import EffectSection from "./Components/EffectSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
//отрисовка в зависимости от useState, а не от NavLink как в соц сети.
//onChange={(current) => setTab(current)} - колбэк из TabsSection который
//возвращает 'main'(и другие) в state(в tab) и происходит перерисовка.
