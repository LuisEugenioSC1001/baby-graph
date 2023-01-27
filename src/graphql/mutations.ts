import { GraphQLFieldConfig } from "graphql";
import { Gift, Guest } from "../models";
import { GiftType, GuestType } from "./types";

export const createGift: GraphQLFieldConfig<any, any, any> = {
  type: GiftType,
  resolve: async (_: any, { data }: any) => {
    const newGift = new Gift(data);
    const gift = await newGift.save();
    return gift;
  },
};

export const createGuest: GraphQLFieldConfig<any, any, any> = {
  type: GuestType,
  resolve: async (_: any, { data }: any) => {
    const newGuest = new Guest(data);
    const guest = await newGuest.save();
    return guest;
  },
};

export const updateGift: GraphQLFieldConfig<any, any, any> = {
  type: GiftType,
  resolve: async (_: any, { id, data }: any) => {
    const gift = await Gift.updateOne({ _id: id, ...data });
    return gift;
  },
};

export const updateGuest: GraphQLFieldConfig<any, any, any> = {
  type: GuestType,
  resolve: async (_: any, { id, data }: any) => {
    const guest = await Guest.updateOne({ _id: id, ...data });
    return guest;
  },
};
