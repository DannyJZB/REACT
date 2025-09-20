// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Danny</h1>
//             <h3>Zuniga</h3>
//         </>
//     );
// }

import type { CSSProperties } from "react";

/**
 * Se declaran afuera de la funcion por que no cambian y todo lo que esta dentro de la funcion esta validando constantemente si hay cambios
 * entonces no es conveniente que se inicialicen cada vez si no cambian
 */
const firstName = "Danny";
const lastName = "Zuniga";
const favoriteGames = ['Elden ring', 'Smash', 'Metal Gear Solid'];
const isActive = false;
const address = {
    zipCode: 'ABC-123',
    country: 'Costa Rica'
};
const styles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 30
};

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>
            <p style={styles}>
                {JSON.stringify(address)}
            </p>
        </>
    );
}