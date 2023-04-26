import { Request, Response } from "express"
import { ICreateCategories } from "../interfaces/categories.interfaces"
import createCategoriesService from "../services/Categories/createCategories.service"
import listCategoriesService from "../services/Categories/listCategories.service"

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

    return res.json()
}

export {
    createCategorieController,
    listCategoriesController,
    listCategoriesByRealStateController
}