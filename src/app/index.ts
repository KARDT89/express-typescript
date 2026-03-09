import express from "express";
import type { Application } from "express";

export function createServerApplication(): Application {
    const app = express();

    app.get("/", (req, res) => {
        return res.json({ message: "Hello ji" });
    });
    
    app.get("/hello", (req, res) => {
        return res.json({ message: "bye" });
    });

    return app;
}
