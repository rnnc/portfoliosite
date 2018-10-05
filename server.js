const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.get('/', (req, res)=>{
  res.send(`Invalid Enpoint\n`);
})

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
})