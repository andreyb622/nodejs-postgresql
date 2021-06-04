import * as express from 'express';
import * as config from 'config';
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';

const PORT = config.get('PORT');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
