function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      className="product-image"
    />
  );
}

export default Image;
