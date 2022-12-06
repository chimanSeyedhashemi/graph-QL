import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.listen(4000, () => {
  // tslint:disable-next-line:no-console
  console.log("now listening for requests on port 4000");
});
