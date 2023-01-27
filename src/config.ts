import { config } from "dotenv";

config();

export default {
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://admin:NStIQ4Gr6awTRvPY@cluster0.smxhltd.mongodb.net/baby_shower?retryWrites=true&w=majority",
  PORT: process.env.PORT || 3000,
};
