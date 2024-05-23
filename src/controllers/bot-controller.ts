import BotService from "../services/bot-service";

class BotController {
  constructor(private botService: BotService) {}

  async getAllBots() {
    return this.botService.getBot();
  }
}

export default BotController;
