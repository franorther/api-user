import  app from './server.js';
import dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env;

app.listen(PORT, () => {
    console.log('Server runnig in port ', PORT);
})

