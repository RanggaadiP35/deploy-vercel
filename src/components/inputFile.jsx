import 'bootstrap/dist/css/bootstrap.min.css';

function File(){
    return(
        <div>
            <label>Image of product</label>
           <input className="form-control" type="file"></input>
        </div>
    )
}

export default File