import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as treasureController from '../controllers/treasure/treasure.controller';
import * as treasureValidator from '../controllers/treasure/treasure.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);
router.get(
  '/treasures',
  validate(treasureValidator.retrieve),
  treasureController.retrieve,
);

module.exports = router;
