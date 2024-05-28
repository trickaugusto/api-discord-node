import { Request, Response } from "express";
import BotService from "../services/bot-service";

class BotController {
  private botService: BotService;

  constructor(botService: BotService) {
    this.botService = botService;
  }

  getAllBots = async (_: Request, res: Response) => {
    const bots = await this.botService.getBot();
    res.send(bots);
  };
}

export default BotController;
