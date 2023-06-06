const BlogsModel = require("../Models/Blogs");

function blogs(app) {
  app.post("/blogs", async (req, res) => {
    try {
      const newBlog = new BlogsModel({
        title: req.body.title,
        keywords: req.body.keywords,
        emailAuthor: req.body.emailAuthor,
        authorName: req.body.authorName,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        image: req.body.image,
        date: req.body.date,
      });
      const blogData = await newBlog.save();
      res.status(201).send({ blogData });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.get("/blogs", async (req, res) => {
    try {
      const readData = await BlogsModel.find();
      if (readData) {
        return res.status(200).send(readData);
      } else {
        return res.status(404).send({
          message: "Blog no encontrado",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.delete("/blogs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deleteBlog = await BlogsModel.deleteOne({ _id: id });
      if (deleteBlog) {
        return res.status(200).send({
          message: "Delete successfully",
        });
      } else {
        return res.status(404).send({
          message: "Blog no se pudo eliminar",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.put("/blogs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updateBlog = await BlogsModel.updateOne(
        { _id: id },
        {
          $set: {
            title: req.body.title,
            keywords: req.body.keywords,
            emailAuthor: req.body.emailAuthor,
            authorName: req.body.authorName,
            description: req.body.description,
            category: req.body.category,
            status: req.body.status,
            image: req.body.image,
            date: req.body.date,
          },
        }
      );
      if (updateBlog) {
        return res.status(200).send(updateBlog);
      } else {
        return res.status(404).send({
          message: "Blog no se pudo actualizar",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.get("/blogs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const readData = await BlogsModel.findOne({ _id: id });
      if (readData) {
        return res.status(200).send(readData);
      } else {
        return res.status(404).send({
          message: "Blog no encontrado",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.get("/blogs/search/:search", async (req, res) => {
    try {
      const search = req.params.search;
      const readData = await BlogsModel.find({
        $or: [
          { title:        { $regex: search } },
          { keywords:     { $regex: search } },
          { emailAuthor:  { $regex: search } },
          { authorName:   { $regex: search } },
          { description:  { $regex: search } },
          { category:     { $regex: search } },
          { status:       { $regex: search } },
          { image:        { $regex: search } },
          { date:         { $regex: search } },
        ],
      });
      if (readData) {
        return res.status(200).send(readData);
      } else {
        return res.status(404).send({
          message: "Blog no encontrado",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
}

module.exports = blogs;
