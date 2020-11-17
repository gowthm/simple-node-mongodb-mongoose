const mongoose = require('mongoose');
const connection = 'mongodb://localhost:27017/store';
const express = require('express');
const bookSchema = require('../model/book');
const router = express.Router();
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true}, function(error, client) {
if (error) {
    console.log('Error', error);
}
}
);
router.post('/save', function(req, res) {
    const BookSchema = new bookSchema
    BookSchema.name = req.body.name;
    BookSchema.quantity = req.body.quantity;
    console.log(BookSchema);
    BookSchema.save(function(err, data) {
        if(err) {
            console.log('err', err);
        } else {
            console.log(data);
        }
    });
})
router.get('/list', function(req, res) {
   // const arr = [];
   bookSchema.find().exec((err, books) => {
    if (books) {
        const successRes = {
             message: 'successfully get data',
             data: books,
            }
        return res.send(successRes);
    }
  });
})
router.get('/list/:id', function(req, res) {
    const id = req.params.id;
    console.log(id);
    bookSchema.findOne({'_id': id}).exec((err, singleData) => {
        if(singleData) {
            console.log(singleData);
            const successRes = {
                message: 'Successfully get data',
                data: singleData,
            }
            return res.send(successRes);
        } else {
            res.send(err);
        }
    })
})
module.exports = router;
