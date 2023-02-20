import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {
    const [images, setImg] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImg(newImages);
        setLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);
    return {
        images,
        isLoading,
    };
};
