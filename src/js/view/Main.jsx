import react from 'react';
import ButtonOwn from '../components/ButtonOwn.jsx';

const Main = () => {

    const signIn = (ev) => {

    };

    const signUp = (ev) => {

    };
    
    return (
        <>
            <ButtonOwn title="Iniciar sesion" handleClick={signIn}></ButtonOwn>
            <ButtonOwn title="Registrate" handleClick={signUp}></ButtonOwn>
        </>
    );
};

export default Main;