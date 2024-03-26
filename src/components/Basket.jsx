function Basket({ basket, setBasket, data, quantity, setQuantity }) {
  //console.log(newBasket);
  const newQuantity = [...quantity];
  //console.log(newQuantity);
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
            const newBasket = [...basket];
            return (
              <>
                {newBasket.map((elemId, index) => {
                  if (elemItem.id === elemId.id) {
                    return (
                      <>
                        <div>
                          <span>-</span>
                          <span>+</span>
                          <span>{newQuantity[index]}</span>
                          <h4>{elemItem.name}</h4>
                          <span>{elemItem.price.formatted}</span>
                        </div>
                      </>
                    );
                  }
                })}
              </>
            );
          })}
          {/* <div>
            <div>
              <span>Sous-total ======== {}</span>
              <span>Frais de livraison</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Basket;
