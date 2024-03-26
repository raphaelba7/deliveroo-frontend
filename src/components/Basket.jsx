function Basket({ basket, setBasket, data }) {
  const newBasket = [...basket];

  const items = data.items;

  return (
    <>
      <div className="basket">
        <div className="submit-basket">
          <input type="submit" value="Valider mon panier" />
        </div>
        <div className="content-basket">
          <p> ici map sur tableau du panier</p>
          {items.map((elemItem) => {
            return (
              <>
                {newBasket.map((elemId) => {
                  if (elemItem.id === elemId) {
                    return (
                      <>
                        <div>
                          <h4>{elemItem.name}</h4>
                        </div>
                      </>
                    );
                  }
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Basket;
