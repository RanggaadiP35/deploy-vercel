import '../components/styling.css';

const Image = () => {
    const imagePath = "src/assets/image/bootstrap-logo-shadow.png";

    return (
        <div>
            <img src={imagePath} className="icon-boostrap" alt="Deskripsi gambar" />
        </div>
    );
};

export default Image;