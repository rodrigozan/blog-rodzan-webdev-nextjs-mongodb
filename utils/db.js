import mongoose from "mongoose";

const { MONGODB_HOST, MONGODB_NAME, MONGODB_USER, MONGODB_PASS } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_NAME}`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

export default db;
