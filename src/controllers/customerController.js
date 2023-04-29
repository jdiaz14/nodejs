import { pool } from "../db.js";

export const renderusuario = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuario");
  res.render("usuario", { usuario: rows });
};

export const createusuario = async (req, res) => {
  const newusuario = req.body;
  await pool.query("INSERT INTO usurio set ?", [newusuario]);
  res.redirect("/");
};

export const deleteusuario = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM usuario WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "usuario deleted" });
  }
  res.redirect("/");
};