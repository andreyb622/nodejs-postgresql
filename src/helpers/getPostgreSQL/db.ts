import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'p2f7dvr8',
  host: 'localhost',
  port: 5432,
  database: 'node_postgress',
});

export default pool;
