import { getAll } from "@/services/projects"

export default function handler(req, res) {
  const data = getAll();
  res.status(200).json({data});
  }
