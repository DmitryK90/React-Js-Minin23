export default function WayToTeach({ title, description }) {
  // деструктуризация массива.
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
