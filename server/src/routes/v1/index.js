import express from 'express';
import messages from './messages';

const router = express.Router();

router.use('/messages', messages);

export default router;