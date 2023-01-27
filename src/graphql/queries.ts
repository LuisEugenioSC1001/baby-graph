import { GraphQLFieldConfig, GraphQLID, GraphQLList } from "graphql";
import { Gift, Guest } from "../models";
import { GiftType, GuestType } from "./types";

export const gift: GraphQLFieldConfig<any, any, any> = {
  type: GiftType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, obj: any) => {
    const { id } = obj;
    const giftResp = await Gift.findById(id);
    return giftResp;
  },
};

export const gifts: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(GiftType),
  resolve: async (_: any, _obj: any) => {
    const giftsResp = await Gift.find({});
    return giftsResp;
  },
};

export const guest: GraphQLFieldConfig<any, any, any> = {
  type: GuestType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_: any, obj: any) => {
    const { id } = obj;
    const guestResp = await Guest.findById(id);
    return guestResp;
  },
};

export const guests: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(GuestType),
  resolve: async (_: any, _obj: any) => {
    const guestsResp = await Guest.find({});
    return guestsResp;
  },
};
