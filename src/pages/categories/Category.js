import React from 'react'
import AddCatForm from '../../components/cat-form/AddCatForm';
import { CategoryTable } from '../../components/category-table/CategoryTable';
import AdminLayout from '../../components/layout/AdminLayout';


const Category = () => {
  return (
    <AdminLayout>
      <h2 className='py-3'>Category</h2>

      {/* adding categories form */}
      <AddCatForm />

      {/* displaying the categories */}
      <CategoryTable />


    </AdminLayout>

  )
}

export default Category;
