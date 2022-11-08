const {Router} = require('express');
const {getAllCountrys} = require('../middlewares/countries');
const router = Router();

router.get('/', async(req, res) => {
    try {
        const allCountrys = await getAllCountrys();
        return res.status(200).send(allCountrys);

    } catch (error) {
        return res.status(404).send(error);
    }
});

module.exports = router;