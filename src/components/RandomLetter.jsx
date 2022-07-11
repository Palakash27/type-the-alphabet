import React from "react";

export default function RandomLetter(props) {
    const { randomLetter } = props;

    return (
        <div
            style={{
                background: "white",
                color: "#068e32",
                fontSize: "50px",
                borderRadius: "4px",
                padding: "20px",
                fontWeight: "bolder",
            }}
        >
            {randomLetter}
        </div>
    );
}
