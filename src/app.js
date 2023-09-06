const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./models/Todo');
const db = require('./utils/db');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/todos', async (req, res) => {
  const todos = await Todo.findAll(); 
  res.json(todos);
});


app.get('/todos/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id); 
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});


app.post('/todos', async (req, res) => {
  const { title, description } = req.body;
  const todo = await Todo.create({ title, description }); 
  res.json(todo);
});


app.put('/todos/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  const updatedTodo = await Todo.update(
    { title, description, completed },
    { where: { id: req.params.id }, returning: true }
  );
  res.json(updatedTodo[1][0]);
});


app.delete('/todos/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (todo) {
    await todo.destroy();
    res.json({ message: 'Tarea eliminada' });
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
});


db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
});
