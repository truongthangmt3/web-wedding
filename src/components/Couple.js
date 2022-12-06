import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'
import QRTImage from '../assets/imgs/qr_thang.jpeg'
import QRNImage from '../assets/imgs/qr_nga.jpeg'
const StyledWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0.4rem;
      .qr {
        width: 1.5rem;
        height: 1.5rem;
      }
      .pic {
        width: 2.8rem;
        height: 2.8rem;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url('https://lh5.googleusercontent.com/-lgWmD5r3vHckw6BBD25sKwIqMkoqEE7-vxJkdfuc_pmCsWCJwvuyEDEiaFz9l9fx_g=w2400'),
            url(${FrameImage});
          background-size: 75%, 100%;
          background-position-y: 5px;
        }
        &.girl {
          background-image: url('https://lh5.googleusercontent.com/rI5kTOy0hkV3SX6TbPsnlgvYExztdxkd5o0zbuSblUXbQCVOFNQejIKKFJ7hYNgU80k=w2400'),
            url(${FrameImage});
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-family: 'Quicksand';
        font-size: 0.4rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 0.12rem;
        white-space: nowrap;
      }
    }
  }
`
// const tips = {
//   h: {
//     m: '右面',
//     w: '左面'
//   },
//   v: {
//     m: '下面',
//     w: '上面'
//   }
// }
export default function Couple({ popupDan }) {
  const [pos, setPos] = useState('h')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 414) {
        setPos('v')
      }
    }
  }, [])
  const handleDC = () => {
    // popupDan('双击666')
  }
  return (
    <StyledWrapper>
      <Title title="Chú rể · Cô dâu" />
      <div className="cp">
        <div className="profile">
          <div className="pic boy" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Trường Thăng🤵🏻</div>
          <div onDoubleClick={handleDC}>
            <img className="qr" src={QRTImage} alt="man" />
          </div>
        </div>
        <div className="profile">
          <div className="pic girl" onDoubleClick={handleDC}>
            <img src={FrameImage} alt="man" />
          </div>
          <div className="name">Thanh Nga👰🏻</div>
          <div onDoubleClick={handleDC}>
            <img className="qr" src={QRNImage} alt="man" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
