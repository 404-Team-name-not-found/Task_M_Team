import express from 'express';
import routes from './routes/index.js';

export const app = express();
const PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});