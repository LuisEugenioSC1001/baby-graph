import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
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

export const GiftInputType = new GraphQLInputObjectType({
  name: "GiftInputType",
  fields: {
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

export const GuestInputType = new GraphQLInputObjectType({
  name: "GuestInputType",
  fields: {
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
      type: GraphQLString,
    },
  },
});

export const GuestPartialInputType = new GraphQLInputObjectType({
  name: "GuestPartialInputType",
  fields: {
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
      type: GraphQLString,
    },
  },
});

export const GiftPartialInputType = new GraphQLInputObjectType({
  name: "GiftPartialInputType",
  fields: {
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
