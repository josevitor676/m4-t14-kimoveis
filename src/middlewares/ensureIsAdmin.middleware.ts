import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

const ensureIsAdminMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {

    const admin = req.user.admin

    if(!admin) {
        throw new AppError(`You don't have permission for this feature`, 401)
    }

    return next()
}

export default ensureIsAdminMiddleware