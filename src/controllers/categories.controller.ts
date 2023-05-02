import { Request, Response } from "express"
import { ICreateCategories } from "../interfaces/categories.interfaces"
import createCategoriesService from "../services/Categories/createCategories.service"
import listCategoriesService from "../services/Categories/listCategories.service"
import listCategoriesByRealStateService from "../services/Categories/listCategoriesByRealState.service"

const createCategorieController = async (req:Request, res: Response): Promise<Response> => {

    const dataCategory: ICreateCategories = req.body

    const newCategory = await createCategoriesService(dataCategory)

    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    
    const allCategories = await listCategoriesService()

    return res.json(allCategories)
}

const listCategoriesByRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const idCategory: number = parseInt(req.params.id)

    const categoryByRealState = await listCategoriesByRealStateService(idCategory)

    return res.json(categoryByRealState)
}

export {
    createCategorieController,
    listCategoriesController,
    listCategoriesByRealStateController
}