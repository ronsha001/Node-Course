const expect = require("chai").expect;
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../models/user");
const Post = require("../models/post");

const FeedController = require("../controllers/feed");

const USER_ID = "62e40258687aca40e4cd0d3b";

describe("Feed Controller", function () {
  before(function (done) {
    mongoose
      .connect(process.env.MONGODB_TEST_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((result) => {
        const user = new User({
          email: "test@test.com",
          password: "1234",
          name: "test",
          posts: [],
          _id: USER_ID,
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  // beforeEach(function() {
  //  ...will run before each 'it' test
  // });

  // afterEach(function() {
  //  ...will run after each 'it' test
  // });

  it("should add a created post to the posts of the creator", function () {
    const req = {
      body: {
        title: "Test Post",
        content: "A Test Post",
      },
      file: {
        path: "abc",
      },
      userId: USER_ID,
    };

    const res = {
      status: function () {
        return this;
      },
      json: function () {},
    };

    FeedController.createPost(req, res, () => {}).then((savedUser) => {
      expect(savedUser).to.have.property("posts");
      expect(savedUser.posts).to.have.length(1);
      done();
    });
  });

  after(function (done) {
    User.deleteMany({})
      .then(() => {
        return Post.deleteMany({});
      })
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
