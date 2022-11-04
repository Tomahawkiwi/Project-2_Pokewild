const setNumber = (pokemon) => {
  if (pokemon.id.toString().length === 1) {
    return <div>#00{pokemon.id}</div>;
  }
  if (pokemon.id.toString().length === 2) {
    return <div>#0{pokemon.id}</div>;
  }
  return <div>#{pokemon.id}</div>;
};
export default setNumber;
