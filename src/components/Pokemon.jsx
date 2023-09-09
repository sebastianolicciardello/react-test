import  LevelButton from "./LevelButton"

function Pokemon({ poke , levelUp}) {
  return (
    <li>
      {poke.name} - {poke.type} - lv: {poke.level}
      <LevelButton levelUp={() => levelUp(poke.name)} />
    </li>
  );
}

export default Pokemon;
