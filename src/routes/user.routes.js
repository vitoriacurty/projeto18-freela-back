import { Router } from "express"
import { getUser, signIn, signUp } from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.post("/signup", signUp)
userRouter.post("/signin", signIn)
userRouter.get("/users", getUser)

export default userRouter