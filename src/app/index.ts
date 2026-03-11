import express from "express";
import type { Application } from "express";
import todoRouter from "./todo/route.js"
// Routes

export function createServerApplication(): Application {
    const app = express();
    
    app.use(express.json())

    app.use("/todos", todoRouter)
    
    //#region //* === Routes ===
    // app.get("/", (req, res) => {
    //     return res.json({ message: "Hello ji" });
    // });
    
    // app.get("/hello", (req, res) => {
    //     return res.json({ message: "bye" });
    // });
    //#endregion //* === Routes ===
    return app;
}
