import db from '../helpers/getPostgreSQL/db';

export async function create(title: string, content: string, userId: string) {
  const newPost = await db.query(
    'INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *',
    [title, content, userId]
  );
  return newPost.rows[0];
}

export async function findAll(id: string) {
  const posts = await db.query('SELECT * FROM post where user_id = $1', [id]);
  return posts.rows;
}
