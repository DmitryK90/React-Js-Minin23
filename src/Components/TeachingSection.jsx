import WayToTeach from "./WayToTeach";
import { ways } from "../Base";

export default function TeachingSection() {
  return (
    <section>
      <h3>Тестовый текст</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
          // <WayToTeach title={way.title} description={way.description} /> //аналог
        ))}
      </ul>
    </section>
  );
}
