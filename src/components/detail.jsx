import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    console.log(location);
    const detailData = location.state ? location.state.detailData : null;

    return (
        <div>
            <h2>Detail Data</h2>
            <p>Nama Product: {detailData.name}</p>
            <p>Product Categoty: {detailData.gender}</p>
            <p>Product Freshness: {detailData.selectedBarang}</p>
            <p>Product Image: {detailData.selectedBarang}</p>
            <p>Description: {detailData.email}</p>
            <p>Price: {detailData.price}</p>
        </div>
    )
}

export default Detail;