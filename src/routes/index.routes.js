import { Router } from "express"
import productsRouter from "./products.routes.js"
import userRouter from "./user.routes.js"

const router = Router()

router.use(userRouter)
router.use(productsRouter)

export default router