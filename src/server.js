import 'dotenv/config';

import app from './app';

app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.APP_PORT}!`);
});
