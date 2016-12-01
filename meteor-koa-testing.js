import supertest from 'supertest';

export const createRequest = function (app) {
  return supertest.agent(app.listen());
};
