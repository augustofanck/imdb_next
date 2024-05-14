"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: any;
    reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h1>Algo deu errado!</h1>
            <button className="hover:text-amber-600" onClick={() => reset()}>Tente novamente</button>
        </div>
    );
}