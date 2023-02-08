import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./sanity2/schemas/pageInfo";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo]),
});