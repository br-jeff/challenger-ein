import { createExpressServer } from 'routing-controllers';
import { UserController } from '@src/application/controllers/user-controller'
import { HealthController } from '@src/application/controllers/health'

const app = createExpressServer({
  controllers: [UserController, HealthController],
});

app.listen(3000);
