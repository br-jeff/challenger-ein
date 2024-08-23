import { Get, JsonController } from "routing-controllers";

@JsonController()
export class HealthController {
 @Get('/')
  getHealth() {
    return 'Teste'
  }
}
