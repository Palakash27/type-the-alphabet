import "./App.css";
import TopSection from "./components/TopSection";
import RandomLetter from "./components/RandomLetter";
import TimeSection from "./components/TimeSection";
import UserEntry from "./components/UserEntry";
import { useEffect, useState } from "react";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HIGHSCORE = {
    get: (key = "highscore") => window.localStorage.getItem(key),
    set: (value = "0") => {
        window.localStorage.setItem("highscore", value);
    },
};

function App() {
    const [userInput, setUserInput] = useState("");
    const [randomLetter, setRandomLetter] = useState("");
    const [timer, setTimer] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerInterval, setTimerInterval] = useState(0);

    useEffect(() => {
        generateRandomLetter();
    }, []);

    const generateRandomLetter = () => {
        const letter = ALPHABETS.charAt(
            Math.floor(Math.random() * ALPHABETS.length)
        );
        setRandomLetter(letter);
    };

    const inputHandler = (e) => {
        if (randomLetter.toLocaleLowerCase() !== e.nativeEvent.data) {
            setTimer((timer) => (timer ? timer + 0.5 : 0.5));
        }

        setUserInput(e.target.value);
        startTimer();
        generateRandomLetter();
        isGameOver();
    };

    const isGameOver = () => {
        if (userInput.length === 19) {
            stopTimer();

            if (HIGHSCORE.get() === null || timer < HIGHSCORE.get()) {
                HIGHSCORE.set(timer.toFixed(2));
                setTimer(parseFloat(HIGHSCORE.get()));
                setRandomLetter("Success!");
            } else {
                setRandomLetter("Failure!");
            }
        }
    };

    const startTimer = () => {
        if (!timerStarted) {
            setTimerStarted(true);

            const timerIntervalID = setInterval(() => {
                setTimer((timer) => (timer ? timer + 0.01 : 0.01));
            }, 10);

            setTimerInterval(timerIntervalID);
        }
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(0);
    };

    const resetHandler = () => {
        stopTimer();
        setTimer(0);
        setUserInput("");
        setTimerStarted(false);
    };

    return (
        <div className="App">
            <TopSection />
            <RandomLetter randomLetter={randomLetter} />
            <TimeSection bestTime={HIGHSCORE.get()} time={timer} />
            <UserEntry
                userInput={userInput}
                inputHandler={inputHandler}
                resetHandler={resetHandler}
            />
        </div>
    );
}

export default App;
