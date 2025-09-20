import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCar {
    productName: string;
    quantity: number;
}

const itemsInCar: ItemInCar[] = [
    {
        productName: "Nintendo Switch 2",
        quantity: 1
    },
    {
        productName: "Pro Controller",
        quantity: 2
    },
    {
        productName: "Super Smash Bros",
        quantity: 3
    }
];

// Primer componente
export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                // Cada hijo de una lista debe tener un key unico para que react sepa que si un elemento se elimino quedan los demas elementos, osea identifica cual es el elemeneto eliminado
                itemsInCar.map(({ productName, quantity }) => (<ItemCounter key={productName} name={productName} quantity={quantity} />))
            }

            {/* <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super Smash Bros" quantity={3} /> */}
        </>
    );
}