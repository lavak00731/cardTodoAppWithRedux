const checkIfLogged = () => {
    const isLogged = localStorage.getItem('user');
    if(isLogged) {
        return true;
    }
    return false;
}

export default checkIfLogged;
