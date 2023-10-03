import 'bootstrap/dist/css/bootstrap.min.css';

function SelectCategory(){
    return(
        <div>
            <label>Product Category</label>
            <select className='form-select'>
                <option value="CategoryX">Category X</option>
                <option value="CategoryY">Category Y</option>
            </select>
        </div>
    )
}

export default SelectCategory