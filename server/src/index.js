import jsonServer from "json-server";

import getUserProfile from "./mocks/getUserProfile.js";
import getOtherProfiles from "./mocks/getOtherProfiles.js";

const addDelay = (delay = 0) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

// GET /getUserProfile
server.get("/getUserProfile", async (req, res) => {
  await addDelay(300);
  await res.send(getUserProfile);
});

// GET /getOtherProfiles
server.get("/getOtherProfiles", async (req, res) => {
  await addDelay(300);
  await res.send(getOtherProfiles);
});

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
