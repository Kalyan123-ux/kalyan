const mongoose = require('mongoose')

describe('MongoDB connection',()=>{
    beforeAll(async ()=>{
        const url= 'mongodb+srv://baduguakhil2004:lFEAjh3yuv8VD1mG@cluster0.w5qqa6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(url);
    });
    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});