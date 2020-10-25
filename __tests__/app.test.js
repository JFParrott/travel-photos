const app = require('../app');
const request = require('supertest');
const connection = require('../db/connection');
const { expect } = require('@jest/globals');

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});

describe('app', () => {
  describe('/api', () => {
    it('returns list of available endpoints and middleware', () => {
      console.log('do this');
    });
    describe('/locations', () => {
      it('status 405 when invalid method', () => {
        const invalidMethods = ['delete', 'post', 'patch', 'put'];
        const methodPromises = invalidMethods.map((method) => {
          return request(app)
            [method]('/api/locations')
            .expect(405)
            .then(({ body: { msg } }) => {
              expect(msg).toBe('Method not allowed');
            });
        });
        return Promise.all(methodPromises);
      });
      describe('GET', () => {
        it('status 200 and object containing array of locations', () => {
          return request(app)
            .get('/api/locations')
            .expect(200)
            .then(({ body: { locations } }) => {
              expect(locations).toHaveLength(4);
              expect(locations[0]).toHaveProperty('name');
            });
        });
      });
    });
  });
});
