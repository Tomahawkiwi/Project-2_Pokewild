export const getModuloType = (typeAttack) => {
  if (
    typeAttack.damage_relations.double_damage_to.filter(
      (doubleType) =>
        doubleType.name === opponent.types[0].type.name ||
        doubleType.name === opponent.types[1].type.name
    ).length > 0
  ) {
    return 2;
  } else if (
    typeAttack.damage_relations.half_damage_to.filter(
      (halftype) =>
        halftype.name === opponent.types[0].type.name ||
        halftype.name === opponent.types[1].type.name
    ).length > 0
  ) {
    return 0.5;
  } else if (
    typeAttack.damage_relations.no_damage_to.filter(
      (protectedType) =>
        protectedType.name === opponent.types[0].type.name ||
        protectedType.name === opponent.types[1].type.name
    ).length > 0
  ) {
    return 0;
  } else {
    return 1;
  }
};

export const hit = (
  powerOfAttack,
  attackOfAssailant,
  defenseOfReceiver,
  typeAttack,
  accurracy
) => {
  const damages =
    (0.5 *
      (powerOfAttack * (attackOfAssailant / defenseOfReceiver)) *
      getModuloType(typeAttack) +
      1) *
    0.5;
  const chanceToAttack = Math.floor(Math.random() * 100) + 1;
  const chanceToCritical = Math.floor(Math.random() * 8) + 1;
  const chanceToOneShot = Math.floor(Math.random() * 50) + 1;
  const getMessageModuloType = (t) => {
    if (getModuloType(t) === 2) {
      return "It is very effective ! ";
    }
    if (getModuloType(t) === 1) {
      return "It hits normally. ";
    }
    if (getModuloType(t) === 0.5) {
      return "It is not very effective... ";
    }
  };
  if (getModuloType(typeAttack) === 0) {
    console.log("There is no effect...");
    return 0;
  } else if (chanceToAttack <= accurracy) {
    if (chanceToOneShot === 1) {
      console.log(
        `${getMessageModuloType(
          typeAttack
        )}But incredible... this attack just doomed ${opponent.name} !`
      );
      return opponent.stats[0].base_stat;
    } else if (chanceToCritical === 1) {
      console.log(
        `${getMessageModuloType(typeAttack)}Lucky, it hit critical !`
      );
      return damages * 2;
    } else {
      console.log(`${getMessageModuloType(typeAttack)}`);
      return damages;
    }
  } else {
    console.log("It missed...");
    return 0;
  }
};
