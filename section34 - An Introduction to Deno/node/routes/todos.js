const express = require("express");

const router = express.Router();

let todos = [];

router.get("/todos", (req, res, next) => {
  res.json({ todos: todos });
});

router.post("/todos", (req, res, next) => {
  const newTodo = { id: new Date().toISOString(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json({message: "todo created!", todo: newTodo});
});

router.put("/todos/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex(todo => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
  res.status(200).json({message: "todo updated!", todo: newTodo});
});

router.delete("/todos/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  todos = todos.filter(todo => todo.id !== tid);
  res.status(200).json({message: "todo deleted!", todo: newTodo});
});

module.exports = router;