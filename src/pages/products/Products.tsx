import React, {useEffect, useState} from 'react';
import {Product} from "../../models/product";
import axios from "axios";
import Layout from "../../components/Layout";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import {TableFooter, TablePagination} from "@mui/material";
import {Navigate} from "react-router-dom";
import {ToggleButtonGroup} from "@mui/lab";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);
    const perPage = 10;

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('products');

                setProducts(data);
            }
        )();
    })

    const del = async (id: number) => {
        if (window.confirm('Are you sure?')) {
            try {
                const result = await axios.delete(`products/${id}`);

                if (result.status === 204) {
                    setProducts(products.filter(product => product.id !== id));
                } else {
                    alert('Product deletion failed.');
                }
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('An error occurred while deleting the product.');
            }
        }
    }

    return (
        <Layout>
            <div className={'py-3 border-bottom'}>
                <Button variant={'contained'} color={'success'} href={'/products/create'}>Add product</Button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.slice(page * perPage, (page + 1) * perPage).map(product => {
                        return (
                            <TableRow key={'user.id'}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>
                                    <img src={product.image} width={50} alt={''} loading={'lazy'}/>
                                </TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.description.substring(0, 100)}...</TableCell>
                                <TableCell>{product.price} PLN</TableCell>
                                <TableCell>
                                    <ToggleButtonGroup>
                                        <Button variant="contained" color={"primary"}
                                                href={`/products/${product.id}/edit`}
                                        >Edit</Button>
                                        <Button variant="contained" color={"error"}
                                                onClick={() => del(product.id)}
                                        >Delete</Button>
                                    </ToggleButtonGroup>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                <TableFooter>
                    <TablePagination count={products.length}
                                     page={page}
                                     rowsPerPage={perPage}
                                     rowsPerPageOptions={[]}
                                     onPageChange={(e, newPage) => setPage(newPage)}/>
                </TableFooter>
            </Table>
        </Layout>
    );
};

export default Products;
