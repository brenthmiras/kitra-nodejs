const Joi = require('joi');

export const retrieve = {
  query: {
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    distance: Joi.allow(1, 10).required(),
  },
};
