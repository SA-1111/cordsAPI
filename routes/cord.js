const express = require('express');
const router = express.Router();

const blocks ={
    blockA:{
        name:'blockA',
        imageUrl:"https//wehawt/iamges",
        cords:{
            latitude:203032.323,
            longitude:23324.42,
        },
    },
    blockB:{
        name:'blockB',
        imageUrl:"https//wehawt/iamges",
        cords:{
            latitude:203032.323,
            longitude:23324.42,
        },
    },
    blockC:{
        name:'blockC',
        imageUrl:"https//wehawt/iamges",
        cords:{
            latitude:203032.323,
            longitude:23324.42,
        },
    }
}

router.get('/getblocks',(req,res)=>{
    const blockList = Object.keys(blocks);
    res.json(blockList);
});

// uses query to get block name
router.get('/getblockinfo',(req,res)=>{
    const {block} = req.query;

    if(!blocks[block],(req,res)=>{
        return res.status(404).json({error:'Block not found'},)
    });  

    res.json(blocks[block]);
});

module.exports = router;