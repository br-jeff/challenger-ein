import { createExpressServer } from 'routing-controllers';
import { UserController } from '@src/application/use-case/user-controller'
import { HealthController } from '@src/application/controllers/health'

const app = createExpressServer({
  controllers: [UserController, HealthController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000);
