import React from "react";

export default function TimeSection(props) {
    const { time, bestTime } = props;
    return (
        <>
            <p>Time: {time ? time.toFixed(3) : (0.0).toFixed(3)}s</p>
            <p>My best time: {bestTime || 0}s!</p>
        </>
    );
}
