import { Router } from 'express';
import studentModel from '../models/studentModel.js'

const router = Router();


router.get("/", async (req, res) => {
    let page = parseInt(req.query.page)
    if (!page) page = 1

    const result = await studentModel.paginate({}, { page, limit: 5, lean: true });
    //console.log(result)

    const baseURL = "http://localhost:8080/"
    result.title = "CoderHouse"
    result.style = "index.css"
    result.prevLink = result.hasPrevPage ? `${baseURL}?page=${result.prevPage}` : "";
    result.nextLink = result.hasNextPage ? `${baseURL}?page=${result.nextPage}` : "";
    result.isValid = !(page <= 0 || page > result.totalPages);

    res.render(
        "index",
        result
    )

});

export default router;