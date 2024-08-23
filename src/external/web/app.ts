import 'reflect-metadata';
import { container } from 'tsyringe';
import { createExpressServer,useContainer  } from 'routing-controllers';
import { UserController } from '@src/application/controllers/user-controller'
import { HealthController } from '@src/application/controllers/health'
import { TsyringeAdapter } from '@src/external/config/container';
import { bootstrap } from './bootstrap'

const app = createExpressServer({
  controllers: bootstrap(),
});

useContainer(new TsyringeAdapter(container))

app.listen(3000);
