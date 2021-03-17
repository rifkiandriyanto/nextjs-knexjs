import db from '../../../libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return req.status(405).end();

  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(passwor, salt);
  const register = await db('user').insert({
    email,
    password: passwordHash,
  });
  const registerUser = await db('user').where({ id: register }).first();

  res.status(200);
  res.json({
    message: 'user register successfully',
    data: registerUser,
  });
}
