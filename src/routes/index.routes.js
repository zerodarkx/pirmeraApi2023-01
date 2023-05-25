const { Router } = require('express');

const router = Router();

router.get('', (req, res) => {

    const { param1, param2 } = req.query;
    res.json(
        {
            "mensaje": "Hola Chicos",
            "param1": param1,
            "param2": param2
        }
    );
});

module.exports = router;