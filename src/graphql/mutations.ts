import { GraphQLFieldConfig, GraphQLID } from "graphql";
import { omit } from "lodash";
import { Gift, Guest } from "../models";
import {
  GiftInputType,
  GiftPartialInputType,
  GiftType,
  GuestInputType,
  GuestPartialInputType,
  GuestType,
} from "./types";

export const createGift: GraphQLFieldConfig<any, any, any> = {
  type: GiftType,
  args: {
    data: { type: GiftInputType! },
  },
  resolve: async (_: any, { data }: any) => {
    const newGift = new Gift(data);
    const gift = await newGift.save();
    return gift;
  },
};

export const createGuest: GraphQLFieldConfig<any, any, any> = {
  type: GuestType,
  args: {
    data: { type: GuestInputType! },
  },
  resolve: async (_: any, { data }: any) => {
    const newGuest = new Guest(data);
    const guest = await newGuest.save();
    return guest;
  },
};

export const updateGift: GraphQLFieldConfig<any, any, any> = {
  type: GiftType,
  args: {
    data: { type: GiftPartialInputType! },
    id: { type: GraphQLID! },
  },
  resolve: async (_: any, { id, data }: any) => {
    await Gift.updateOne({ _id: id, ...data });
    const gift = await Gift.findById(id);
    return gift;
  },
};

export const updateGuest: GraphQLFieldConfig<any, any, any> = {
  type: GuestType,
  args: {
    data: { type: GuestPartialInputType! },
    id: { type: GraphQLID! },
  },
  resolve: async (_: any, { id, data }: any) => {
    await Guest.updateOne({
      _id: id,
      ...{
        ...omit(data, "gifts"),
        gifts: JSON.parse(data?.gifts ?? "[]"),
      },
    });
    const guest = await Guest.findById(id);
    return guest;
  },
};
