import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:83Wn30FuFAthlWAy@alura.zfprghm.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;