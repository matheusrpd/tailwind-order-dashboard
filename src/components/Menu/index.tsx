type MenuProps = {
  groups: { name: string; icon: JSX.Element; }[][];
}

export function Menu({ groups }: MenuProps) {
  return (
    <>
      {groups.map((group, i) => (
        <ul key={i} className={`flex flex-col gap-y-5 pt-12 ${i === 0 ? 'flex-1' : ''}`}>
          {group.map(item => (
            <li key={item.name}>
              <a href="" className="flex gap-x-3 items-center group">
                {item.icon}
                <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-semibold">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}