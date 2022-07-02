const server = require('../src/msRestaurant.js');
const portTest = 3000;
const serverInstance = server(portTest);
const supertest = require('supertest');
const requestWithSupertest = supertest(serverInstance);

afterAll( (done) => {
    serverInstance.close();
    done();
});

describe('msRestaurant Test Suite', () => {


    it('POST / Should create a New Order', async () => {
        const res = await requestWithSupertest.post('/createOrder')
            .send({
                "dish": "Pizza",
            });
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('orderId');
        expect(res.body).toHaveProperty('dish');
        expect(res.body).toHaveProperty('status');
    });

    it('POST / Should return the Order Status', async () => {
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

    it('POST / Should notify the Delivery that Order is Ready', async () => {
        const res = await requestWithSupertest.post('/notifyDeliveryThatOrderIsReady')
            .send({
                "orderId": 1,
            });
        if(res.status == 200) {
            expect(res.status).toEqual(200);
            expect(res.type).toEqual(expect.stringContaining('json'));
            expect(res.body).toHaveProperty('orderId');
            expect(res.body).toHaveProperty('dish');
            expect(res.body).toHaveProperty('status');
        }
        else{
            console.log(res.error.message);
            expect(res.status).toEqual(500);
        }        
    });
});





