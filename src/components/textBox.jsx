import 'bootstrap/dist/css/bootstrap.min.css';

const TextBox = ({id, title}) => {

    return (
        <div className='form-group'>
            <label htmlFor={id}>{title}</label><br/>
            <input type="text" className='form-control' id={id}></input>
        </div>
    )
}

export default TextBox