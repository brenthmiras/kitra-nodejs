const Joi = require("joi");

export const retrieve = {
  query: {
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    distance: Joi.allow(1, 10).required(),

    // Accept $10 to $30
    // Only whole numbers are accepted
    prize: Joi.number().min(10).max(30),
  },
};
