const Mongoose = require("mongoose");
const Joigoose = require("joigoose")(Mongoose);
const Joi = require("joi");

var joiUserSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(30)
    .required(),
  password: Joi.string()
    .min(4)
    .max(100)
    .required(),
  admin: Joi.boolean().meta({ default: false })
});

var mongooseUserSchema = new Mongoose.Schema(Joigoose.convert(joiUserSchema));

module.exports = User = Mongoose.model("users", mongooseUserSchema);
 
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   admin: {
//     type: Boolean,
//     default: false
//   }
// });

// module.exports = User = mongoose.model("users", userSchema);
