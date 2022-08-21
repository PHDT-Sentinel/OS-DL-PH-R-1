const Joi = require('joi');

const validate = Joi.object().keys({
    id: Joi.string().required(),
    collection: Joi.string().required(),
    item: Joi.object().unknown(true),
  });

module.exports = {
    validate,
}