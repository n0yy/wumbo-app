import { useState } from "react";
export default function MenuItem({ ...items }) {
  const [menu, setMenu] = useState([items]);

  return (
    <>
      {menu.map((item) => (
        <li key={item.id}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </>
  );
}
