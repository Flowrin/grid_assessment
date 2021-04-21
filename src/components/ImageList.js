import './ImageList.css';
import ItemCard from './ItemCard';

const ImageList = (props) => {
  const images = props.images.map((image, i) => {
    return (
      <ItemCard
        image={image}
        key={i}
        home={false}
        imageLink={props.imageLink}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};
export default ImageList;
