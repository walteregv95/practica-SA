const server = require('../src/msLogin.js');
const portTest = 3000;
const serverInstance = server(portTest);
const supertest = require('supertest');
const requestWithSupertest = supertest(serverInstance);

afterAll( (done) => {
    serverInstance.close();
    done();
});

describe('msLogin Test Suite', () => {
    it('GET / Should return Health Check', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('status')
    });

    it('POST / Should generate a New Token', async () => {
        const res = await requestWithSupertest.post('/login')
            .send({
                "role": "delivery",
            });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('token');
        console.log(res.body.token);
    });
});