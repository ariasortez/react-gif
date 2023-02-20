import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <h2>{isLoading == true ? 'Cargando' : null}</h2>
            <div className="card-grid">
                {images.map((image) => {
                    return <GifItem key={image.id} {...image} />;
                })}
            </div>
        </>
    );
};
