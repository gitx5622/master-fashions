import bcrypt from "bcryptjs";

const users = [
  {
    name: "George Gitau",
    email: "gitau.bd@gmail.com",
    password: bcrypt.hashSync("foxx1998@", 10),
    isAdmin: true,
  },
  {
    name: "Alfred Gitau",
    email: "alfy.bd@gmail.com",
    password: bcrypt.hashSync("foxx1998@", 10),
  },
  {
    name: "Eunice Gitau",
    email: "euny.bd@gmail.com",
    password: bcrypt.hashSync("foxx1998@", 10),
  },
  {
    name: "Ann Gitau",
    email: "ann.bd@gmail.com",
    password: bcrypt.hashSync("foxx1998@", 10),
  },
];

export default users;
