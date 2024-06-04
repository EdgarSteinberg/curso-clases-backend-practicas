import Bisness from '../dao/classes/bisnessDAO.js'

const bisnesService = new Bisness();

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
}

export const getBisness = async (req, res) => {
    const result = await bisnesService.getBisness();
    res.send({
        status: 'success',
        result
    });
}

export const getBisnessById = async (req, res) => {
    const { bid } = req.params;
    const result = await bisnesService.getBisnessById(bid);

    if (!result) {
        res.status(500).send(responseError);
    }
    res.send({
        status: 'success',
        result
    });
}

export const createBisness = async (req, res) => {
    const bisness = req.body;
    const result = await bisnesService.createBisness(bisness);

    if (!result) {
        res.status(500).send(responseError);
    }
    res.send({
        status: 'success',
        result
    });
}

export const updateBisness = async (req, res) => {
    const product = req.body;
    const { bid } = req.params;

    const bisness = await bisnesService.getBisnessById(bid);
    if (!bisness) {
        res.status(500).send(responseError);
    }

    bisness.products.push(product)

    const result = await bisnesService.updateBisness(bisness._id, bisness)

    res.send({
        status: 'error',
        result: 'Bisness Update!'
    })
}