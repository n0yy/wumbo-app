export default function FooterList({ title, ...lists }) {
  return (
    <div className="block">
      <h6 className="text-sm md:text-lg mb-4">{title}</h6>
      <ul>
        {lists.data.map((item, index) => (
          <li
            className="block text-xs md:text-sm mb-1.5 text-gray-300 hover:text-white"
            key={index}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
