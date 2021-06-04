import db from '../helpers/getPostgreSQL/db';

export async function create(name: string, surname: string) {
  const newUser = await db.query(
    'INSERT INTO person (name, surname) values ($1, $2) RETURNING *',
    [name, surname]
  );
  return newUser.rows[0];
}

export async function findAll() {
  const users = await db.query('SELECT * FROM person');
  return users.rows;
}

export async function findById(id: string) {
  const user = await db.query('SELECT * FROM person WHERE id = $1', [id]);
  return user.rows[0];
}

export async function update(id: string, name: string, surname: string) {
  const user = await db.query(
    'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
    [name, surname, id]
  );
  return user.rows[0];
}

export async function del(id: string) {
  await db.query('DELETE FROM person WHERE id = $1', [id]);
  return { message: 'User has been deleted' };
}
