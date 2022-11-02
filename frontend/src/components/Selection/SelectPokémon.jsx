import axios from "axios";
import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";

function SelectPokémon() {
  const statMax = {
    pv: 250,
    attack: 134,
    defense: 180,
    attackSp: 154,
    defenseSp: 125,
    speed: 150,
  };
  const heightStatFull = 120;
  // créer ici la constante pour faire l'appel API.

  function getHeight(statFull, statChosen) {
    return (statChosen * heightStatFull) / statFull;
  }
  const heightPvChosen = getHeight(statMax.pv, 80);
  return (
    <div
      className={`${bgGradLightGrey} w-screen h-full flex flex-col justify-center align-middle`}
    >
      <div>PV max = {statMax.pv}</div>
      <div>Attack max = {statMax.attack}</div>
      <div>Defense max = {statMax.defense}</div>
      <div>Special Attack max = {statMax.attackSp}</div>
      <div>Special Defense max = {statMax.defenseSp}</div>
      <div>Speed max = {statMax.speed}</div>
      <div className={`flex justify-around h-[${heightStatFull.toString()}px]`}>
        <div className="w-6 h-full rounded-full bg-customLightGrey-lighter relative">
          <div
            className={`w-6 h-[${heightPvChosen}%] rounded-full bg-green-600 absolute bottom-0`}
          />
        </div>
      </div>
      <button type="button">Choose</button>
    </div>
  );
}

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
//
//
//
//
// const getData = () => {
//   const array = [];

//   for (let i = 0; i < 151; i += 1) {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon?limit=151")
//       .then((response) => response.data.results)
//       .then((results) => {
//         array.push(results[i].url);
//       });
//   }
//   console.log(array);
// };

// const [data, setData] = useState([]);

// const getData = async () => {
//   const dataPv = new Array(151).fill(null).map(async (1, i) => {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
//     return res.data;
//   });

//   console.log(dataPv);
//   return dataPv;
// };
// useEffect(() => {
//   getData();
// }, []);
