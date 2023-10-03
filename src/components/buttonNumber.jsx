
function ButtonNumber(){
    const handleButtonClick = (event) => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`nomor acak: ${randomNumber}`);
    };

    return(
        <div>
            <button className="btn btn-warning" onClick={handleButtonClick}>Number Random</button>
        </div>
    );
}

export default ButtonNumber;