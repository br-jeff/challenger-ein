import 'reflect-metadata';
import { container } from 'tsyringe';
import { createExpressServer,useContainer  } from 'routing-controllers';
import { UserController } from '@src/application/controllers/user-controller'
import { HealthController } from '@src/application/controllers/health'
import { TsyringeAdapter } from '@src/external/config/container';

const app = createExpressServer({
  controllers: [UserController, HealthController],
});

useContainer(new TsyringeAdapter(container))

app.listen(3000);
