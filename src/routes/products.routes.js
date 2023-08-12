import { Router } from "express"
import { createProduct, getProduct } from "../controllers/products.controller.js"

const productsRouter = Router()

productsRouter.post("/product", createProduct)
productsRouter.get("/product/:id", getProduct)

export default productsRouter 