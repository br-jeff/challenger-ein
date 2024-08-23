import 'reflect-metadata';
import { container } from 'tsyringe';
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from '@src/application/controllers/user-controller'
import { HealthController } from '@src/application/controllers/health'
import { TsyringeAdapter } from '@src/external/config/container';
import { logger } from '@src/external/utils/logger';
import { bootstrap } from './bootstrap'
import { setupSwagger } from './swagger'

const port = 3000
const app = createExpressServer({
  controllers: bootstrap(),
});

useContainer(new TsyringeAdapter(container))
setupSwagger(app)

app.on('error', (error: Error) => logger.error({ error }))

app.listen(port, async () => {
  logger.info(`App is running on port ${port}`);
});
