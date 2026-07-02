import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


// CREATE CONTEXT
const CartContext =
  createContext();


// PROVIDER
export const CartProvider =
  ({ children }) => {

    // LOAD CART FROM LOCAL STORAGE
    const [cartItems,
      setCartItems
    ] = useState(() => {

      const savedCart =
        localStorage.getItem(
          "cartItems"
        );

      return savedCart

        ? JSON.parse(savedCart)

        : [];
    });


    // SAVE CART TO LOCAL STORAGE
    useEffect(() => {

      localStorage.setItem(

        "cartItems",

        JSON.stringify(
          cartItems
        )
      );

    }, [cartItems]);


    // ADD TO CART
    const addToCart =
      (product) => {

        const existItem =
          cartItems.find(

            (item) =>

              item.id ===
              product.id
          );

        if (existItem) {

          // INCREASE QUANTITY
          setCartItems(

            cartItems.map(
              (item) =>

                item.id ===
                  product.id

                  ? {

                    ...item,

                    quantity:
                      item.quantity + 1,
                  }

                  : item
            )
          );

        } else {

          // ADD NEW PRODUCT
          setCartItems([

            ...cartItems,

            {

              ...product,

              quantity: 1,
            },
          ]);
        }
      };


    // INCREASE QUANTITY
    const increaseQuantity =
      (id) => {

        setCartItems(

          cartItems.map(
            (item) =>

              item.id === id

                ? {

                  ...item,

                  quantity:
                    item.quantity + 1,
                }

                : item
          )
        );
      };


    // DECREASE QUANTITY
    const decreaseQuantity =
      (id) => {

        setCartItems(

          cartItems.map(
            (item) =>

              item.id === id

                ? {

                  ...item,

                  quantity:

                    item.quantity > 1

                      ? item.quantity - 1

                      : 1,
                }

                : item
          )
        );
      };


    // REMOVE ITEM
    const removeFromCart =
      (id) => {

        setCartItems(

          cartItems.filter(

            (item) =>

              item.id !== id
          )
        );
      };


    // CLEAR CART
    const clearCart =
      () => {

        setCartItems([]);

        localStorage.removeItem(
          "cartItems"
        );
      };


    return (

      <CartContext.Provider

        value={{

          cartItems,

          addToCart,

          increaseQuantity,

          decreaseQuantity,

          removeFromCart,

          clearCart,
        }}
      >

        {children}

      </CartContext.Provider>
    );
  };


// EXPORT HOOK
export const useCart =
  () => {

    return useContext(
      CartContext
    );
  };