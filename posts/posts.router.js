const express = require('express');
const PostsModel = require('./posts.model');

const postRouter = express.Router();

postRouter.get('/get/:postId',(req,res)=>{
    PostsModel.findById(req.params.postId)
        .populate('author','email fullName')
        .exec((error,data)=>{
            if(error){
                res.status(500).json({
                    success: false,
                    message: error.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: data,
                });
            }
        });
});

postRouter.post('/create', (req, res) => {
    if (req.session.currenUser && req.session.currenUser._id) {
        const newPost = {
            content: req.body.content,
            imageUrl: req.body.imageUrl,
            author: req.session.currenUser._id,
        };
        PostsModel.create(newPost, (error, data) => {
            if (error) {
                res.status(201).json({
                    success: true,
                    data: data,
                })
            }
        });
    } else {
        res.status(403).json({
            success: false,
            message: 'Unanthenticated',
        });
    }
});

module.exports = postRouter;