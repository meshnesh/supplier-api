import { useState } from 'react'
import classes from '../../styles/AddSupplier.module.css'
import Card from '../../components/ui/Card'

function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([])
  const [supplier, setSupplier] = useState('')

  const fetchSuppliers = async () => {
    const response = await fetch('/api/suppliers')
    const data = await response.json()
    setSuppliers(data)
  }

  const addSupplier = async () => {
    const response = await fetch('/api/suppliers', {
      method: 'POST',
      body: JSON.stringify({ supplier }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  const deleteSupplier = async supplierId => {
    const response = await fetch(`/api/suppliers/${supplierId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    fetchSuppliers()
  }
  return (
    <>

<Card>
      <form className={classes.form} >
        <div className={classes.control}>
          <label htmlFor='title'>Supplier Nmae</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Supplier Email</label>
          <input type='url' required id='image'  />
        </div>
        <div className={classes.actions}>
          <button>Add Supplier</button>
        </div>
      </form>
    </Card>
      <hr />
      <button onClick={fetchSuppliers}>Load Suppliers</button>
      {suppliers.map(supplier => {
        return (
          <div key={supplier.id}>
            {supplier.name}. {supplier.email}
            <button onClick={() => deleteSupplier(supplier.id)}>Delete</button>
          </div>
        )
      })}
    </>

// <>
// <div>
//   <input
//     type='text'
//     value={comment.text}
//     onChange={e => setComment(e.target.value)}
//   />
//   <button onClick={submitComment}>Submit comment</button>
// </div>
// <hr />
// <button onClick={fetchComments}>Load comments</button>
// {comments.map(comment => {
//   return (
//     <div key={comment.id}>
//       {comment.id}. {comment.text}
//       <button onClick={() => deleteComment(comment.id)}>Delete</button>
//     </div>
//   )
// })}
// </>
  )
}

export default SuppliersPage
