import axios from "axios";
axios
  .post(
    "http://localhost:1336/api/auth/local/register",
    {
      username: "Kapman",
      email: "test@test.com",
      password: "Password",
    },
    {
      headers: {
        Authorization:
          "Bearer 5445d542e95c7e6bb964d9265201711e3b1739adb193d3f25bda0a1dbc81a55ee5bd798d625eded8fc7ce352d44e806273f712d032e74b7a4d71c66ffeb035028aa3a21440368c23cb6da025eaf6183e57d2738d99f8d7a817b96d9b4d6720bde46993db1584460697bf32ba91aeb3d81b6d6e0fbb501da9ac4c828e1e834223",
      },
    }
  )
  .then((response) => {
    console.log("User profile", response.data.user);
    console.log("User token", response.data.jwt);
  })
  .catch((error) => {
    console.log("An error occurred:", error.response);
  });
