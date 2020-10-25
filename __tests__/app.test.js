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
    it('status 200 and list of available endpoints and middleware', () => {
      return request(app)
        .get('/api')
        .expect(200)
        .then(({ body: { endpoints } }) => {
          expect(Object.keys(endpoints[0])).toEqual(
            expect.arrayContaining(['path', 'methods', 'middleware'])
          );
        });
    });
    it('status 405 when invalid method', () => {
      const invalidMethods = ['delete', 'post', 'patch', 'put'];
      const methodPromises = invalidMethods.map((method) => {
        return request(app)
          [method]('/api')
          .expect(405)
          .then(({ body: { msg } }) => {
            expect(msg).toBe('Method not allowed');
          });
      });
      return Promise.all(methodPromises);
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
    describe('/photos', () => {
      describe('/:location', () => {
        it('status 405 when invalid method', () => {
          const invalidMethods = ['delete', 'post', 'patch', 'put'];
          const methodPromises = invalidMethods.map((method) => {
            return request(app)
              [method]('/api/photos/Mars')
              .expect(405)
              .then(({ body: { msg } }) => {
                expect(msg).toBe('Method not allowed');
              });
          });
          return Promise.all(methodPromises);
        });
        describe('GET', () => {
          it('status 200 and object containing array of photo objects', () => {
            return request(app)
              .get('/api/photos/Mars')
              .expect(200)
              .then(({ body: { photos } }) => {
                expect(Object.keys(photos[0])).toEqual(
                  expect.arrayContaining([
                    'photo_id',
                    'url-tag',
                    'location',
                    'label',
                  ])
                );
                expect(photos[0].location).toBe('Mars');
              });
          });
          it("status 404 when location is valid but doesn't exist", () => {
            return request(app)
              .get('/api/photos/Pluto')
              .expect(404)
              .then(({ body: { msg } }) => {
                expect(msg).toBe('Location does not exist');
              });
          });
        });
      });
    });
  });
});
