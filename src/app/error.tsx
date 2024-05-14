"use client";

import { useEffect } from "react";

interface errorProps {
    error: any;
    reset: any;
}

const error: React.FC<errorProps> = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mt-10">
            <h1>Algo deu errado!</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Tente novamente</button>
        </div>
    )
}

export default error