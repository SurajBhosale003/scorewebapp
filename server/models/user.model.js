import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true
    },
    type: {
        type: String,
        required: false,
        default: "Free",
      },
  }, { timestamps: true });

  const User = mongoose.model('User', userSchema)

  export default User;