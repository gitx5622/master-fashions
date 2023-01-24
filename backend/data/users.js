import bcrypt from "bcryptjs";

const users = [
  {
    name: "George Gitau",
    email: "gitau@gmail.com",
    password: bcrypt.hashSync("foxx1998", 10),
    isAdmin: true,
  },
  {
    name: "Alfred Gitau",
    email: "alfy@gmail.com",
    password: bcrypt.hashSync("foxx1998", 10),
  },
  {
    name: "Eunice Gitau",
    email: "euny@gmail.com",
    password: bcrypt.hashSync("foxx1998", 10),
  },
  {
    name: "Ann Gitau",
    email: "ann@gmail.com",
    password: bcrypt.hashSync("foxx1998", 10),
  },
];

export default users;
