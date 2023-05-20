# use-pretty-elapsed-timer
The `use-pretty-elapsed-timer` package is a custom React hook that handles timers, specifically a stopwatch, and time logic/state in a React component. It uses `requestAnimationFrame` to measure elapsed time and auto-ticks every second. The hook takes a time format string as an argument and returns human-readable time strings. It also returns start, stop functions, and running status. An optional argument for the maximum time in seconds can also be passed. The use case of this package related to displaying time in human readable formats efficiently.

## Description
The `use-pretty-elapsed-timer` hook is a timer function that auto-ticks every second. It provides the following functionalities:
- Start the timer
- Stop the timer
- Check if the timer is running
- Get the elapsed time in human-readable format
## Installation
To install use-pretty-elapsed-timer, run the following command:
```sh
npm install use-pretty-elapsed-timer
```
## Usage
```jsx
import usePrettyElapsedTimer from 'use-pretty-elapsed-timer';

function App() {
  const { elapsedTime, start, stop, isRunning } = usePrettyElapsedTimer('hh:mm:ss', 60);

  return (
    <div>
      <h1>{elapsedTime}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>{isRunning ? 'Timer is running' : 'Timer is not running'}</p>
    </div>
  );
}
```
## Parameters
The use-pretty-elapsed-timer hook takes two parameters:
1. format: A string that specifies the format of the elapsed time. The format string can contain any combination of hh, mm, and ss to represent hours, minutes, and seconds respectively.
2. maxTime: An optional number that specifies the maximum time in seconds. Once the elapsed time reaches this value, the timer will stop automatically.
## Return Values
The use-pretty-elapsed-timer hook returns an object with the following properties:
1. elapsedTime: A string that represents the elapsed time in the specified format.
2. start: A function that starts the timer.
3. stop: A function that stops the timer.
4. isRunning: A boolean that indicates whether the timer is currently running or not.
## Examples
### Example 1: Basic Usage
```jsx
import usePrettyElapsedTimer from 'use-pretty-elapsed-timer';

function App() {
  const { elapsedTime, start, stop, isRunning } = usePrettyElapsedTimer('hh:mm:ss');

  return (
    <div>
      <h1>{elapsedTime}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>{isRunning ? 'Timer is running' : 'Timer is not running'}</p>
    </div>
  );
}
```
### Example 2: With Maximum Time
```jsx
import usePrettyElapsedTimer from 'use-pretty-elapsed-timer';

function App() {
  const { elapsedTime, start, stop, isRunning } = usePrettyElapsedTimer('mm:ss', 120);

  return (
    <div>
      <h1>{elapsedTime}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>{isRunning ? 'Timer is running' : 'Timer is not running'}</p>
    </div>
  );
}
```
In this example, the maximum time is set to 120 seconds (2 minutes). Once the elapsed time reaches this value, the timer will stop automatically.
## License
This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
