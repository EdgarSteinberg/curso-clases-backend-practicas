import Business from '../dao/classes/businessDAO.js'

const businessService = new Business();

const responseError = {
    status: 'error',
    error: 'Something went wrong, try again later'
}

export const getBusiness = async (req, res) => {
    const result = await businessService.getBusiness();

    res.send({
        status: 'success',
        result
    });
}

export const getBusinessById = async (req, res) => {
    const { bid } = req.params
    const result = await businessService.getBusinessById(bid)

    if (!result) {
        return res.status(500).send(responseError);
    }
    res.send({
        status: 'success',
        result: result
    });
}

export const createBusiness = async (req, res) => {
    const business = req.body
    const result = await businessService.createBusiness(business)
    res.send({
        status: 'success',
        result: result
    });
}

export const addProduct = async (req, res) => {
    const product = req.body; // Obtener el producto del cuerpo de la solicitud
    const { bid } = req.params; // Obtener el business ID de los parámetros de la solicitud

    const business = await businessService.getBusinessById(bid); // Buscar el negocio por su ID
    if (!business) {
        return res.status(500).send(responseError); // Si no se encuentra el negocio, devolver un error 500
    }

    business.products.push(product); // Agregar el nuevo producto al array de productos del negocio

    // Actualizar el negocio en la base de datos
    // business._id: Pasas el ID del negocio(business._id) que quieres actualizar.
    // business: Pasas todo el objeto business actualizado.Este objeto incluye el nuevo producto en el array products.
    const result = await businessService.updateBusiness(business._id, business);

    if (!result) {
        return res.status(500).send(responseError); // Si la actualización falla, devolver un error 500
    }

    // Si todo sale bien, enviar una respuesta de éxito
    res.send({
        status: 'success',
        result: 'Business Updated!'
    });
}
