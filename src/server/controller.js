const User = require("./model");

exports.userCreate = (req, res, next) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    date: req.body.date
  });

  user.save(err => {
    if (err) {
      return next(err);
    }

    res.send({ message: "User created successfully" });
  });
};
