const router = require("express").Router();
const db = require("../models");

//getting the last workout


//creating a workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", ({ body }, res) => {
    db.Workout.find()
        .then(newWorkout => {
            res.json(newWorkout)
        })
})
// adding an exercise

router.put("/api/workouts/:id", (req, res) => {
    const _id = req.params.id
    db.Workout.update(
        { _id: _id },
        { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
})

    // getting workout range
    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });





    module.exports = router;