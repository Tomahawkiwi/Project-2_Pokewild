import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../tools/constants";
import Select1Pokemon from "./Select1Pokemon";

function SelectPokémon({ allData }) {
  return (
    <div className="flex justify-center">
      <div className={`w-10/12 ${bgGradLightGrey} rounded-xl shadow-custom`}>
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto ">
          <Select1Pokemon
            imagePokemon="src/assets/combat-selection/unknown_pokemon.png"
            namePokemon="unknown"
            width="w-5"
          />
          {allData.map((pokemon) => (
            <Select1Pokemon
              key={pokemon.name}
              imagePokemon={pokemon.sprites.front_default}
              namePokemon={pokemon.name}
              width="w-14"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectPokémon.propTypes = {
  allData: PropTypes.arrayOf.isRequired,
};

export default SelectPokémon;

// const [stats, setStats] = useState({
//   pv: [],
//   attack: [],
//   defense: [],
//   attackSp: [],
//   defenseSp: [],
//   speed: [],
// });

// const getDatas = async () => {
//   const allPokemons = (
//     await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
//   ).data.results;

//   const infos = await Promise.all(
//     allPokemons.map(async (pokemon) => {
//       const { data } = await axios.get(pokemon.url);
//       return data.stats;
//     })
//   );

//   const sorted = (index) => {
//     const newInfos = infos.map((pokemon) => pokemon);
//     const newInfosMapped = newInfos.map((stati) => stati[index].base_stat);
//     return newInfosMapped.sort((a, b) => b - a);
//   };

//   setStats({
//     pv: sorted(0)[0],
//     attack: sorted(1)[0],
//     defense: sorted(2)[0],
//     attackSp: sorted(3)[0],
//     defenseSp: sorted(4)[0],
//     speed: sorted(5)[0],
//   });
// };

// console.log("je suis synchrone");

// useEffect(() => {
//   getDatas();
// }, []);

// if (stats.pv < 1) return <div>Loading...</div>;

// return (
//   <div>
//     <div>PV max = {stats.pv}</div>
//     <div>Attack max = {stats.attack}</div>
//     <div>Defense max = {stats.defense}</div>
//     <div>Special Attack max = {stats.attackSp}</div>
//     <div>Special Defense max = {stats.defenseSp}</div>
//     <div>Speed max = {stats.speed}</div>
//     <div className="w-6 h-20 bg-black">
//       <div></div>
//     </div>
//     <button type="button">?</button>
//   </div>
// );
// //
// //
// //
// //
// // const getData = () => {
// //   const array = [];

// //   for (let i = 0; i < 151; i += 1) {
// //     axios
// //       .get("https://pokeapi.co/api/v2/pokemon?limit=151")
// //       .then((response) => response.data.results)
// //       .then((results) => {
// //         array.push(results[i].url);
// //       });
// //   }
// //   console.log(array);
// // };

// // const [data, setData] = useState([]);

// // const getData = async () => {
// //   const dataPv = new Array(151).fill(null).map(async (1, i) => {
// //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
// //     return res.data;
// //   });

// //   console.log(dataPv);
// //   return dataPv;
// // };
// // useEffect(() => {
// //   getData();
// // }, []);
