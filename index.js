const kubus = require("./kubus");
const balok = require("./balok");
const prismaSegitiga = require("./prismaSegitiga");


const volumeKubus = kubus.volume(3)
console.log("Volume Kubus: ", volumeKubus)

const luasPermukaanKubus = kubus.luasPermukaan(3)
console.log("Luas Permukaan Kubus: ", luasPermukaanKubus)

const volumeBalok = balok.volume(2,3,4)
console.log("Volume Balok: ", volumeBalok)

const luasPermukaanBalok = balok.luasPermukaan(2,3,4)
console.log("Luas Permukaan Balok: ", luasPermukaanBalok)

const volumePrismaSegitiga = prismaSegitiga.volume(2,3,4)
console.log("Volume Prisma Segitiga: ", volumePrismaSegitiga)

const luasPermukaanPrismaSegitiga = prismaSegitiga.luasPermukaan(2,3,4)
console.log("Luas Permukaan Prisma Segitiga: ", luasPermukaanPrismaSegitiga)
