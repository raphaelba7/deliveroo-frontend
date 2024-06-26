function Meals({ data, basket, setBasket, quantity, setQuantity }) {
  //console.log(data);
  const categories = data.meta.categories;
  //console.log(categories);
  const items = data.items;
  //console.log(items);

  return (
    <>
      <div className="all-meal">
        {categories.map((elemCat) => {
          return (
            <>
              <h2 key={elemCat.id}>{elemCat.name}</h2>
              <div className="display-meal">
                {items.map((elemItem, index) => {
                  if (elemItem.categoryId === elemCat.id) {
                    return (
                      <>
                        <div
                          className="meal-column"
                          onClick={() => {
                            const newBasket = [...basket];
                            const newQuantity = [...quantity];
                            newBasket.push(elemItem);
                            newQuantity[index] = quantity[index] + 1;
                            console.log(index);
                            console.log(newQuantity);
                            setBasket(newBasket);
                            setQuantity(newQuantity);
                          }}
                        >
                          <div className="meal-item">
                            <div className="meal-desc">
                              <h3>{elemItem.name}</h3>
                              <div className="meal-item-desc">
                                <p>{elemItem.description}</p>
                              </div>
                              <div className="priceStar">
                                <span className="price">
                                  {elemItem.price.formatted}
                                </span>
                                {elemItem.popular && (
                                  <span className="starPop">
                                    <i className="icon-STAR_FILL"></i> Populaire
                                  </span>
                                )}
                              </div>
                            </div>
                            {elemItem.image ? (
                              <div className="meal-picture">
                                <img
                                  src={elemItem.image?.url}
                                  alt={elemItem.image?.alt}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Meals;
