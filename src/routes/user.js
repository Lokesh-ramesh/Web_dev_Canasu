import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => {
  const { username, name, lang, phone, skills, password, type } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, name, lang, phone, skills, password: hashedPassword, type });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.get("/getmentor", async (req, res) => {
  try {
    const user = await UserModel.find({type: "mentor"});
    res.status(201).json({ user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/register1", async (req, res) => {
  const { username, name, lang, phone, skills, password, type } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, name, lang, skills, phone, password: hashedPassword, type });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.get("/:userID", async (req, res) => {
  try {
    const result = await UserModel.findById(req.params.userID);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id , type: user.type});
});

export { router as userRouter };

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
