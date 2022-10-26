import React, { useMemo, useRef, useEffect } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import useStore from './store'

export default function Hud() {
  const points = useStore((state) => state.points)
  const health = useStore((state) => state.health)
  const sound = useStore((state) => state.sound)
  const type = useStore((state) => state.type)
  const toggle = useStore((state) => state.actions.toggleSound)
  const changeType = useStore((state) => state.actions.changeType)
  const actions = useStore((state) => state.actions)
  const healthRef = useRef(health)
  const seconds = useRef()

  useEffect(() => {
    healthRef.current = health
  }, [health])

  useEffect(() => {
    let t = Date.now()
    const i = setInterval(() => {
      if (!healthRef.current) {
        t = Date.now()
        seconds.current.innerText = '0.0'
        return
      }
      seconds.current.innerText = ((Date.now() - t) / 1000).toFixed(1)
    }, 100)
    return () => clearInterval(i)
  }, [])

  const score = useMemo(() => (points >= 1000 ? (points / 1000).toFixed(1) + 'K' : points), [points])
  return (
    <>
      <UpperLeft onClick={() => toggle()}>
        sound
        <br />
        {sound ? 'off' : 'on'}
      </UpperLeft>
      <UpperRight>
        <h2>
          <span ref={seconds}>0.0</span>
          <span style={{ fontSize: 28, marginLeft: 10 }}>s</span>
        </h2>
        {/* <h1>{score}</h1> */}
        <div className="health" style={{ width: health + '%' }}>
          {health}%&nbsp;
        </div>
      </UpperRight>
      {health <= 0 && (
        <UpperCenter>
          <h1 style={{ marginBottom: 10 }}>GAME OVER</h1>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              actions.restart()
            }}>
            RESTART
          </span>
        </UpperCenter>
      )}
      {health && (
        <DownLeft
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            changeType()
          }}>
          {type ? '> Stop Auto pilot' : '> Start Auto pilot'}
        </DownLeft>
      )}

      <Global />
    </>
  )
}

const base = css`
  font-family: 'Teko', sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  pointer-events: none;
  color: indianred;
`

const UpperLeft = styled.div`
  ${base}
  top: 40px;
  left: 50px;
  font-size: 2em;
  transform: skew(5deg, 5deg);
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`
const DownLeft = styled.div`
  ${base}
  bottom: 40px;
  left: 50px;
  font-size: 2em;
  // transform: skew(5deg, 5deg);
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`

const UpperRight = styled.div`
  ${base}
  top: 40px;
  right: 50px;
  text-align: right;
  transform: skew(-5deg, -5deg);
  width: 200px;
  .health {
    color: #fff;
    font-size: 40px;
    line-height: 40px;
    height: 40px;
  }
  & > h2 {
    margin: 0;
    font-size: 4em;
    line-height: 1em;
  }
  & > div {
    height: 2em;
    width: 100%;
    background: indianred;
  }
  @media only screen and (max-width: 900px) {
    bottom: 30px;
    & > h1 {
      font-size: 6em !important;
    }
    & > h2 {
      font-size: 3em !important;
    }
  }
`

const UpperCenter = styled.div`
  ${base}
  top: 50%;
  left: 50%;
  font-size: 8em;
  transform: translate(-50%, -50%);
  pointer-events: all;
  white-space: nowrap;
  text-align: center;
  span {
    font-size: 0.6em;
  }

  @media only screen and (max-width: 900px) {
    font-size: 4em;
  }
`

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
    padding: 0px;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: black;
    background: white;
  }
`
