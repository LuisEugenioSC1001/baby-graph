import express from "express";
import { graphqlHTTP } from "express-graphql";
import config from "./config";
import connect from "./db/server";
import schema from "./graphql/schema";

connect();
const app = express();
app.use(
  "/gql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(config.PORT);