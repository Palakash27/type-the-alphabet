import React from "react";

export default function UserEntry(props) {
    const { userInput, inputHandler, resetHandler } = props;

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
            }}
        >
            <input
                style={{
                    background: "#f9f1e7",
                    flex: 3,
                    height: "40px",
                    padding: "10px",
                    fontSize: "20px",
                    textTransform: "uppercase",
                    fontWeight: "bolder",
                }}
                disabled={userInput.length === 20}
                type="text"
                value={userInput}
                onChange={inputHandler}
                autoFocus
            />
            <button
                style={{
                    flex: 1,
                    background: "#f2416c",
                    color: "white",
                }}
                onClick={resetHandler}
            >
                Reset
            </button>
        </div>
    );
}
