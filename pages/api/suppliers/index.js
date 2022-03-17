import { suppliers } from "../../../suppliers";


  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(suppliers)
    } else if (req.method === 'POST') {
      const supplier = req.body.supplier
      const newsupplier = {
        id: Date.now(),
        name: supplier
      }
      suppliers.push(newsupplier)
      res.status(201).json(newsupplier)
    }
  }
