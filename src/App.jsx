import React from 'react'
import './App.scss'
import {ticktock} from "./ticktock";

function App() {
  ticktock().start()

  const hourHand = document.getElementById('hour')
  const minuteHand = document.getElementById('minute')
  const secondHand = document.getElementById('second')

  window.addEventListener('ticktock-1000', ((e ) => {
    const { angle } = e.detail

    const degHour = `${angle.hour}deg`
    const degMinute = `${angle.min}deg`
    const degSecond = `${angle.sec}deg`

    hourHand.style.transform = `translate(-50%, -100%) rotate(${degHour})`
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${degMinute})`
    secondHand.style.transform = `translate(-50%, -100%) rotate(${degSecond})`
  }))

  return (
    <main className="App">
      <div className="edge">
        <h1 className="caption">Ticktock</h1>
        <ul className="dial">
          <li className="clock-number one">
            <div>1</div>
          </li>
          <li className="clock-number two">
            <div>2</div>
          </li>
          <li className="clock-number three">
            <div>3</div>
          </li>
          <li className="clock-number four">
            <div>4</div>
          </li>
          <li className="clock-number five">
            <div>5</div>
          </li>
          <li className="clock-number six">
            <div>6</div>
          </li>
          <li className="clock-number seven">
            <div>7</div>
          </li>
          <li className="clock-number eight">
            <div>8</div>
          </li>
          <li className="clock-number nine">
            <div>9</div>
          </li>
          <li className="clock-number ten">
            <div>10</div>
          </li>
          <li className="clock-number eleven">
            <div>11</div>
          </li>
          <li className="clock-number twelve"><span>12</span></li>
        </ul>
        <div className="edge-image">
          <img src="/logo.png" alt="sample-pic01" />
        </div>
        <div id="hour" className="hour-hand"></div>
        <div id="minute" className="minute-hand"></div>
        <div id="second" className="second-hand"></div>
      </div>
    </main>
  )
}

export default App
