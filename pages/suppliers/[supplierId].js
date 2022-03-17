import { suppliers } from "../../suppliers"

function Supplier({ supplier }) {
  return (
    <div>
      {supplier.name}. {supplier.email}
    </div>
  )
}

export default Supplier

export async function getStaticProps(context) {
  const { params } = context
  const { supplierId } = params

  const supplier = suppliers.find(supplier => supplier.id === parseInt(supplierId))
  console.log(supplier)

  return {
    props: {
      supplier
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { supplierId: '1' } },
      { params: { supplierId: '2' } },
      { params: { supplierId: '3' } },
      { params: { supplierId: '4' } },
      { params: { supplierId: '5' } },
      { params: { supplierId: '6' } },
    ],
    fallback: false
  }
}
