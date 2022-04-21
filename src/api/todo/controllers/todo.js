// "use strict";

const { createCoreController } = require("@strapi/strapi").factories;

// const { toRegressedEnumValue } = require("@strapi/utils/lib");
// const { hoursToSeconds } = require("date-fns");
const { sanitizeEntity } = require("strapi-utils");
const todo = require("../services/todo");

module.exports = {
  async find(ctx) {
    let entities;

    ctx.query = {
      ...ctx.query,
      status: "published",
    };

    if (ctx.query._q) {
      entities = await strapi.services.todo.search(ctx.query);
    } else {
      entities = await strapi.services.todo.find(ctx.query);
    }
    delete createdAt;
    return entities.map(function (entities) {
      delete createdAt;
      const todo = sanitizeEntity(entity, { model: strapi.models.todo });
      delete createdAt;
    });
  },
};

module.exports = createCoreController("api::todo.todo");
