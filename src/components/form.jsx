// src/Form.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./button";
import { v4 as uuidv4 } from 'uuid';
import { Alert } from "bootstrap";

function Form({ onSubmit }) {

    const uniqueNumber = uuidv4();
    const [data, setData] = useState({
        name: "",
        price: "",
        gender: "",
        selectedBarang: "",
        uuid: uuidv4(),
        selectedFile: "",
    });
    const [errors, setErrors] = useState({});

    const nameRegex = /^[a-zA-Z0-9]{3,}$/;
    const categoryRegex = /^[a-zA-Z0-9\s]{2,}$/;
    const freshnessRegex = /^\d{4}-\d{2}-\d{2}$/;
    const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === "radio" && name === "selectedBarang") {
            setData((prevData) => ({
                ...prevData,
                selectedBarang: value,
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const uniqueNumber = uuidv4();
        const formDataWithBarang = { ...data, uuid: uniqueNumber };
        onSubmit(data, formDataWithBarang);
        console.log(data, formDataWithBarang);
        setData({
            name: "",
            price: "",
            gender: "",
            selectedBarang: "",
            uuid: uuidv4(),
        });

        const isValid = validateInput();

        if (isValid) {
            // Kirim data produk ke server atau lakukan tindakan yang sesuai
            // Contoh: console.log(productData)
            alert('Berhasil')
        }

        const { selectedFile } = this.state;
        this.setState({
            selectedFile: null,
        });
    };

    const validateInput = () => {
        const newErrors = {};

        if (!nameRegex.test(data.name)) {
            newErrors.name = 'Nama produk tidak valid';
        }

        // if (!categoryRegex.test(productData.productCategory)) {
        //     newErrors.gender = 'Kategori produk tidak valid';
        // }

        // if (!freshnessRegex.test(productData.productFreshness)) {
        //     newErrors.selectedBarang = 'Tanggal kesegaran tidak valid';
        // }

        // if (!priceRegex.test(productData.productPrice)) {
        //     newErrors.price = 'Harga produk tidak valid';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    handleFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="gender">Product Category:</label>
                <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                >
                    <option value="">-- Pilih Product --</option>
                    <option value="productX">Product X</option>
                    <option value="productY">Product Y</option>
                </select>
            </div>
            <div>
                <label>Product Freshness:</label>
                <br />
                <input
                    type="radio"
                    id="BrandNew"
                    name="selectedBarang"
                    value="BrandNew"
                    checked={data.selectedBarang === "BrandNew"}
                    onChange={handleChange}
                />
                <label htmlFor="Brand New">Brand New</label>
                <br />
                <input
                    type="radio"
                    id="SecondHank"
                    name="selectedBarang"
                    value="SecondHank"
                    checked={data.selectedBarang === "SecondHank"}
                    onChange={handleChange}
                />
                <label htmlFor="female">Second Hank</label>
                <br />
                <input
                    type="radio"
                    id="Refurbished"
                    name="selectedBarang"
                    value="Refurbished"
                    checked={data.selectedBarang === "Refurbished"}
                    onChange={handleChange}
                />
                <label htmlFor="other">Refurbished</label>
            </div>
            <div>
                <label htmlFor="image">Image of product</label>
                <input
                    type="file"
                    className="form-control"
                    onChange={this.handleFileChange} />
            </div>
            <div>
                <label htmlFor="email">Additional Description:</label>
                <textarea
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Price:</label>
                <input
                    className="form-control"
                    type="number"
                    id="price"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                />
            </div>
            <br />
            <Button></Button>
        </form>
    );
}

export default Form;
