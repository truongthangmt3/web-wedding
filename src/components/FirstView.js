import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiChevronDoubleDown } from 'react-icons/hi'
import Confetti from 'confetti-react'
import Timer from 'react-compound-timer'
import Typed from 'typed.js'
import Constant from './Constant'

import FrameImage from '../assets/imgs/frame.png'
const AniDown = keyframes`
    from{
        transform:translateY(-10px);
        opacity:.1;
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
`
const StyledWrapper = styled.section`
  .inner_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: auto;
    height: 100vh;
    /* background-image: url(${BGImage}); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
    .cover {
      object-fit: cover;
      width: 100%;
      min-height: 120vh;
    }
    .bg_image {
      z-index: -1;
      max-width: 1400px;
      width: 100%;
      min-height: 1000px;
      margin: auto;
      /* height: 100vh; */
      position: absolute;
      background-attachment: fixed;
      justify-content: center;
      display: flex;
    }
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 100px 10px #e4e3ea inset;
    }
    .box {
      z-index: 99;
      margin-top: 1.2rem;
      color: #000;
      padding: 0.5rem;
      background-color: #fff;
      border-radius: 0.4rem;
      box-shadow: 0 2px 8px #ccc;
      background-image: url(${FrameImage});
      background-repeat: no-repeat;
      background-size: 90%;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      filter: opacity(0.8);
      width: 3.8rem;
      height: 3.8rem;
      .title {
        font-family: 'Quicksand';
        display: flex;
        font-size: 0.48rem;
        padding: 0.2rem 0;
        margin-bottom: 0.2rem;
        span {
          white-space: nowrap;
          strong {
            font-weight: bold;
            color: #be5678;
          }
        }
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        .time {
          font-size: 0.25rem;
          color: #000;
          margin-top: 0.12rem;
        }
        .countdown {
          font-weight: 800;
          font-size: 0.22rem;
          color: #be5678;
        }
      }
    }
  }

  .down {
    position: absolute;
    width: 0.44rem;
    left: 50%;
    bottom: 0.1rem;
    margin-left: -0.22rem;
    animation-direction: alternate-reverse;
    animation: ${AniDown} 1s infinite;
  }
`
const now = new Date().getTime()
const deadline = new Date(2022, 11, 18, 0, 0, 0).getTime()
const initCountNum = deadline - now
// const initCountNum = 3000;
export default function FirstView() {
  const [direction, setDirection] = useState(
    initCountNum > 0 ? 'backward' : 'forward'
  )
  const [size, setSize] = useState(null)
  const container = useRef(null)
  const el = useRef(null)
  // Create reference to store the Typed instance itself
  const typed = useRef(null)
  // useEffect(() => {
  //   if (container) {
  //     setTimeout(() => {
  //       const { width, height } = getComputedStyle(container.current)
  //       setSize({ width, height })
  //     }, 1500)
  //   }
  // }, [])
  useEffect(() => {
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, {
      strings: [
        ' Trân trọng kính mời',
        ' ...',
        'Tới dự lễ thành hôn',
        'Của chúng tôi',
        ' <strong>Thăng ❤️ Nga</strong> '
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 1000,
      loop: true
    })

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])
  return (
    <StyledWrapper ref={container}>
      {size && (
        <Confetti
          width={size.width}
          height={size.height}
          className="mask"
          recycle={true}
          numberOfPieces={99}
          wind={0.01}
          gravity={0.1}
          opacity={0.8}
          tweenDuration={8000}
        />
      )}
      <div className="inner_wrapper">
        <div className="bg_image">
          <img className="cover" src={Constant.main_picture} />
        </div>
        <div className="box">
          <div className="title">
            💕<span ref={el}></span>💕
          </div>
          <div className="date">
            <div className="countdown">
              <Timer
                checkpoints={[
                  {
                    time: 0,
                    callback: () => {
                      setDirection('forward')
                    }
                  }
                ]}
                initialTime={Math.abs(initCountNum)}
                direction={direction}
                formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
              >
                <span className="num day">
                  <Timer.Days /> Ngày <Timer.Hours /> Giờ <Timer.Minutes /> Phút{' '}
                  <Timer.Seconds /> Giây
                </span>
              </Timer>
            </div>
            <div className="time">18.12.2022</div>
          </div>
        </div>
      </div>
      <HiChevronDoubleDown className="down" />
    </StyledWrapper>
  )
}
