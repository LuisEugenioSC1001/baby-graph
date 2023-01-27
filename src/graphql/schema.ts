import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { createGift, createGuest, updateGift, updateGuest } from "./mutations";
import { gift, gifts, guest, guests } from "./queries";

export const QueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: {
    gift,
    gifts,
    guest,
    guests,
  },
});
export const MutationType = new GraphQLObjectType({
  name: "MutationType",
  fields: {
    createGift,
    createGuest,
    updateGift,
    updateGuest,
  },
});

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
