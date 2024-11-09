
interface Params{
    id: string;
}

function Currency({id}: Params) {
    return ( <p key={id}>{id}</p> );
}

export default Currency;