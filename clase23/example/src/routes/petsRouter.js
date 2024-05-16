import { Router } from 'express';

const router = Router();

const pets = []

router.param('pet', async (req, res, next, petName) => {
    
    const pet = pets.find(pet => pet.name === petName);

    if(!pet) {
        return res.status(404).send({
            status: 'error',
            message: 'Pet Not Found'
        })
    }
    req.pet = pet;
    next();
});

router.post('/' , (req, res) => {
    const { name, specie } = req.body

    if(!name || !specie ) {
        return res.status(400).send({
            status: 'error',
            message: 'Please provide both name and specie for the pet'
        })
    }
    
    const newPets = { name, specie }
    pets.push(newPets)
   res.status(201).send({ newPets })

});

router.get('/:pet([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)', async(req, res) => {
   const petName = req.pet
   
   res.send({petName})
});

router.put('/:pet', (req, res) => {
    const petName = req.params.pet

    if(!petName) {
        res.status(400).send({
            status: 'error',
            message: 'Pet name is required'
        })
    }

    const pet = pets.find(pet => pet.name == petName)

    if(!pet){
        res.status(404).send({
            status : 'error',
            message: ' Pet Not Exist'
        })
    }

    pet.adopted = true;
    res.status(200).send({
        status: 'succes',
        pet
    })
})
export default router;