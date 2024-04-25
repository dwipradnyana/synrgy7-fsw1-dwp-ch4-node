const volume = (panjangAlas, tinggiAlas, tinggiPrisma) => {
  const luasAlas = 0.5 * panjangAlas * tinggiAlas;
  const volume = luasAlas * tinggiPrisma;
  return volume;
};

const luasPermukaan = (panjangAlas, tinggiAlas, tinggiPrisma) => {
  const luasAlas = 0.5 * panjangAlas * tinggiAlas;
  const kelilingAlas = 3 * panjangAlas;
  const luasSelimut = kelilingAlas * tinggiPrisma;
  const luasPermukaan = 2 * luasAlas * luasSelimut;
  return luasPermukaan;
};

module.exports = {
  volume,
  luasPermukaan,
};
