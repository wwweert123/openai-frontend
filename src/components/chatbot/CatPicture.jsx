import React, { useEffect, useState } from "react";

const CatPicture = () => {
    // const [imageUrl, setImageUrl] = useState("");

    // useEffect(() => {
    //     fetch(
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurjD4-wAVlAlpe_eMICJTz2noV8---ITGSA&s"
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setImageUrl(data[0].url);
    //         });
    // }, []);

    return (
        <div>
            <img src="public/cat.jpeg" alt="a cat" />
        </div>
    );
};

export default CatPicture;
