import { Sequelize } from 'sequelize';

const sql = new Sequelize(
  'postgres://postgres:shafi786@pg-db.cvtupo9l5ufn.ap-northeast-1.rds.amazonaws.com:5432/homely'
); // Example for postgres

try {
  sql.authenticate();
  console.log('sequelize authenticated and is running');
} catch (e) {
  console.log('error connection sequelize', e);
}

(async () => {
  console.log('syncing models');
  await sql.sync({ alter: true });
})();

export default sql;
