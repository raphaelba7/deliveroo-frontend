function Restaurants({ data }) {
  return (
    <>
      <div className="restaurantInfo white-bg">
        <div>
          <h1>{data.header.title}</h1>
          <p>{data.meta.metatags.description}</p>
        </div>
        <div>
          <img src={data.header.image.url} alt="" />
        </div>
      </div>
    </>
  );
}

export default Restaurants;
