import React from "react";

interface Result {
    id: number;
    original_title: string;
}

interface ResultsProps {
    results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <h2>{result.original_title}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default Results
