const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse request body
app.use(bodyParser.json());

// Sample in-memory "database" for to-do items
let todos = [];
app.get('/', (req, res) => {
  res.send('Welcome to the app!');
});

// Route to get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route to create a new to-do item
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    task: task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Route to update a to-do item (mark as completed)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  todo.completed = completed;
  res.json(todo);
});

// Route to delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  todos.splice(index, 1);
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do app listening at http://localhost:${port}`);
});
