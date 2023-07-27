import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  lang: { type: String, required: true},
  phone: { type: String, required: true},
  skills: [
    {
      type: String,
      required: true,
    },
  ], 
  password: { type: String, required: true },
  type: { type: String, required: true },
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  // savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);
