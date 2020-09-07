
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    // default value 
    default: new Date().setDate(new Date().getDate())
  },
  exercises: Array
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
