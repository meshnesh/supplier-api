import { suppliers } from "../../../suppliers";

export default function handler(req, res) {
    const { supplierId } = req.query
    if (req.method === 'GET') {
      const supplier = suppliers.find(supplier => supplier.id === parseInt(supplierId))
      res.status(200).json(supplier)
    } else if (req.method === 'DELETE') {
      const deletedsupplier = suppliers.find(
        supplier => supplier.id === parseInt(supplierId)
      )
      const index = suppliers.findIndex(
        supplier => supplier.id === parseInt(supplierId)
      )
      suppliers.splice(index, 1)
      res.status(200).json(deletedsupplier)
    }
  }
  