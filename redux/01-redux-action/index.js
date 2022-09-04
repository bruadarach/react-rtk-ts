// node index.js

/* Action
  - The only way your application can interact with the store.
  - Carry some information from your app to the redux store.
  - Plain JavaScript Objects.
  - Have a type property that describes something that happened in the application.
  - The `type` property is typically defined as string constant.
 */

const CAKE_ORDERED = "CAKE_ORDERED"; // The `type` property is typically defined as string constant.

const orderCake = () => {
  // return plain JavaScript Object.
  return {
    type: CAKE_ORDERED, // Have a type property that describes something that happened in the application.
    quantity: 1,
  };
};
