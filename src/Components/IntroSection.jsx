import React from "react";

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">Res University</h1>
//       <h3 className="centered" style={{ color: "#666" }}>
//         Унив. frontend-разработки.
//       </h3>
//     </section>
//   );
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { className: "centered", key: 1 },
      "Res University"
    ),
    React.createElement(
      "h3",
      { className: "centered", style: { color: "#666", key: 2 } },
      "Унив. frontend-разработки."
    ),
  ]);
}
