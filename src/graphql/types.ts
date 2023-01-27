import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const GiftType = new GraphQLObjectType({
  name: "GiftType",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLInt,
    },
    unit: {
      type: GraphQLString,
    },
  },
});

export const GuestType = new GraphQLObjectType({
  name: "GuestType",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    attend: {
      type: GraphQLBoolean,
    },
    companion: {
      type: GraphQLInt,
    },
    gifts: {
      type: new GraphQLList(GiftType),
    },
  },
});
