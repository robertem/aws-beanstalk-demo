console.log('ENV VAR');
console.log(process.env.RDS_USERNAME);
console.log(process.env.RDS_PASSWORD);
console.log(process.env.RDS_DB_NAME);
console.log(process.env.RDS_HOSTNAME);
console.log(process.env.RDS_PORT);
console.log('END ENV VAR');

export const config = {
    usarname: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: 'mysql'
  };