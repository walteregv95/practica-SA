const server = require('../src/msDelivery.js');
const portTest = 3000;
const serverInstance = server(portTest);
const supertest = require('supertest');
const requestWithSupertest = supertest(serverInstance);

afterAll( (done) => {
    serverInstance.close();
    done();
});

describe('msDelivery Test Suite', () => {

    it('GET / Should return Health Check', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('status')
    });

    it('POST / Should mark Order as Delivered', async () => {
        const res = await requestWithSupertest.post('/markOrderAsDelivered')
            .send({
                "orderId": 1,
            });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('orderId');
        expect(res.body).toHaveProperty('dish');
        expect(res.body).toHaveProperty('status');
    });

    it('POST / Should receive Order from Restaurant', async () => {
        const res = await requestWithSupertest.post('/receiveOrderFromRestaurant')
            .send({
                "orderId": 1,
                "dish": "Pizza",
            });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('orderId');
        expect(res.body).toHaveProperty('dish');
        expect(res.body).toHaveProperty('status');
    });

    it('POST / Should notify about Order Status', async () => {
        const res = await requestWithSupertest.post('/orderStatus')
            .send({
                "orderId": 1,
            });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('orderId');
        expect(res.body).toHaveProperty('dish');
        expect(res.body).toHaveProperty('status');
    });

});


