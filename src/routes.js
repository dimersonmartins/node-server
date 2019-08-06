const express = require('express');
const router = router();

router.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});
