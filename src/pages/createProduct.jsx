import TextBox from "../components/textBox";
import SelectCategory from "../components/select";
import RadioProduct from "../components/radio";
import File from "../components/inputFile";
import Textarea from "../components/textArea";
import Image from "../components/image";
import Button from "../components/button";
import ButtonNumber from "../components/buttonNumber";
import Article from "../components/textTitle";

import React, { useEffect, useState } from 'react';
// import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styling.css';


import Form from "../components/form";
import Table from "../components/table";

const CreateProduct = () => {

    // fungsi nama tidak boleh lebih 10 karakter
    const [productName, setProductName] = useState('');
    const [productNameError, setProductNameError] = useState('');

    const [productData, setProductData] = useState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productPrice: '',
    });

    const handleProductNameChange = (event) => {
        const newValue = event.target.value;

        if (newValue.length > 10) {
            setProductNameError('Product Name tidak boleh melebihi 10 karakter');
        } else {
            setProductNameError('');
        }

        setProductName(newValue);

        addProduct(productData);
        // Mengosongkan data produk yang sedang diisi
        setProductData({
            productName: '',
            productCategory: '',
            productFreshness: '',
            productPrice: '',
        });
    };

    const [tableData, setTableData] = useState([]);

    const handleSubmit = (formData) => {
        setTableData((prevData) => [...prevData, formData]);
    };

    const handleDelete = (index) => {
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

        if (isConfirmed) {
            // Hapus data jika pengguna mengonfirmasi
            const newData = [...tableData];
            newData.splice(index, 1);
            setTableData(newData);
        }
    };

    // alert pada tampilan awal
    useEffect(() => {
        alert('Welcome');
    }, []);

    return (
        <>
            <div className="form-product">
                <Image></Image>
                {/* <h1>Create Product</h1>
            <p>Below is an example form built entirely with Bootstrap's form controls.
                Each required form group has a <span className="text-title">validation state that can be
                    triggered by attempting to submit the form without completing it.</span></p> */}
                <h1>{Article.title.en}</h1>
                <p>{Article.description.en}</p>

                <div className="form-input">
                    <h4>Detail Product</h4>
                    {/* <form>
                        <label>Product Name</label>
                        <input type="text" value={productName} onChange={handleProductNameChange} className="form-control" />
                        <TextBox id={"Pname"} title={"Product Name"} value={productName} onChange={handleProductNameChange}></TextBox>
                        {productNameError && <p className="text-danger">{productNameError}</p>}
                        <SelectCategory></SelectCategory>
                        <RadioProduct></RadioProduct>
                        <File></File>
                        <Textarea></Textarea>
                        <TextBox id={"Pprice"} title={"Product Price"}></TextBox>
                        <br />
                        <Button></Button>
                        <br />
                        <ButtonNumber></ButtonNumber>
                    </form> */}
                    <Form onSubmit={handleSubmit} ></Form>
                    <br />
                    <Table data={tableData} onDelete={handleDelete} ></Table>
                </div>
            </div>
        </>
    )
}

export default CreateProduct