import express from "express";
import BotController from "../controllers/bot-controller";
import BotService from "../services/bot-service";

const router = express.Router();

const botController = new BotController(new BotService());

router.get("/get-all-bots", botController.getAllBots);

export default router;
