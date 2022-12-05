import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-transitions.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import Title from './SectionTitle'
const Loading = styled.div`
  font-size: 0.24rem;
  padding: 0.4rem 0.2rem;
  text-align: center;
`
const StyledWrapper = styled.section`
  min-height: 50vh;
  width: 100%;
  max-width: 1800px;
  background-color: #fff;
  padding: 0.3rem 0;
  margin: auto;
  .wrapper {
    width: 100%;
    padding: 0;
    max-height: 80vh;
    overflow: scroll;
    .lg-react-element {
      column-count: 5;
      @media screen and (max-width: 1500px) {
        column-count: 4;
      }
      @media screen and (max-width: 768px) {
        column-count: 3;
      }
      column-gap: 0.14rem;
      .picture {
        cursor: pointer;
        max-width: 300px;
        margin: 0 auto 5px auto;
        img {
          border: 2px solid #ccc;
          width: 100%;
          border: 5px;
        }
      }
    }
    @media screen and (max-width: 414px) {
      padding: 0 0.02rem;
      .lg-react-element {
        column-count: 3;
        .picture img {
          border: none;
        }
      }
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.1rem;
    .group {
      display: flex;
      .btn {
        background-color: #eee;
        margin: 0;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        border: none;
        font-size: 0.3rem;
        padding: 0.08rem 0.3rem;
        &:first-child {
          padding-left: 0.6rem;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &:last-child {
          padding-right: 0.6rem;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        &.curr {
          color: #fff;
          background-color: green;
        }
      }
    }
  }
`

const wedding_pictures = [
  'https://lh6.googleusercontent.com/LA-iTsgRabUFPTvxTpZZZ8QFwIo1DS1mBf8Be2ndLrP-ZBDyg6Uj2e96oGrycywcvSg=w2400',
  'https://lh3.googleusercontent.com/27OESsjSlayJLZrOIhNalSMyz0q_KVJook05YR6lykD9kHV2DGYBkm436i_im4XSSZQ=w2400',
  'https://lh5.googleusercontent.com/vQuPNMA84AqJuwa3ojcxkQIOWWkkndp6NsbWAZ09fplxe38P4dEuWIpPSCHUuNuMRR4=w2400',
  'https://lh3.googleusercontent.com/zBFQYrvq_OgkFDdvPuyMGMXs1RvgN1XsnvFXugw6_p71239QZJG7SjGMeVwsVrQ6pvE=w2400',
  'https://lh5.googleusercontent.com/oV-oGF6xxckvfIlBzG8maxjLw628m2PygF2pPSbVL4LNtCU9WAcse5aOhW6ofPZoGW0=w2400',
  'https://lh3.googleusercontent.com/XXmpTpXQN9rS_noMFsWMKeTwvZ2Gi9_YFuZeznuNlYX-Dq669Hr1gISRyhRrd4WDpzQ=w2400',
  'https://lh4.googleusercontent.com/EaJXYtHZmi6GwrwW1JsM4ypX9auutuFbNE5yvSp7vKj-nK2gP1eZ97IoAItUWeEQQr8=w2400',
  'https://lh4.googleusercontent.com/xGhMN5UEujLivfF3PlzpbRBAALAQBalK7_h3yR0CS3OFzHag7dw9BKYHutzzfgR2JHg=w2400',
  'https://lh6.googleusercontent.com/aGhhC5luH5JFTapb8gXWoJwRZMkAZgOkxSsOvM2rFVipPuOrB4gcBo-VJb90n43b6WU=w2400',
  'https://lh5.googleusercontent.com/p4sWb6Cb2qo657XzFK3sEkJu739Cn8PgnvkqP7yv1PSvBTajIKttyw4rT-3u3GEF9CQ=w2400'
]
const dailys = [
  'https://lh4.googleusercontent.com/nLmIWKnl6giX24zc7TD_mb8kLhfBMO1OqMtsfwMTGIx3nlvBiQ8ixk_jU3yPlslSHag=w2400',
  'https://lh3.googleusercontent.com/tFpLE67t6L-FHCTrAh-HWbBji6StQf2exzW5kapZZvgnTGvpnM-maf4kAG2nPOua-q0=w2400',
  'https://lh6.googleusercontent.com/z_bYuOzrh4wqx0JS2YWqalQHDUzWqKD0YjaHUAyclym0WOkHep49VIsC0Sjxg_ShxAc=w2400',
  'https://lh6.googleusercontent.com/fyJgVNmGpi65hcznioPmWN2TNBqqDYVyWJhd2BEPdpFZ03P_lC5t8UVoCI0OAgsyQcE=w2400',
  'https://lh6.googleusercontent.com/-vJ_055-urFY1D8kaEZrDcEJolPNEZ-j2X1fAn1UsB05Yz5EOmIGj9iAsD_hQ7NXLvI=w2400',
  'https://lh6.googleusercontent.com/oAk7NHshHjXIGTNe1MeK6PIkKVr3iRv55odFjI_I4vBIeE3o6ebheE-PK1WzCBB0aK8=w2400',
  'https://lh4.googleusercontent.com/fJYb76Mr_lwMzBEQ88FVIIz82kvL1TF-l68BK9e4HjTqRLyugGvY5WZwefGfCHi_2L8=w2400',
  'https://lh5.googleusercontent.com/fHYURlqyIE16e8qdG1lb9DejwR6xLkBMhGOw6HxNmTmSUp9IaDFxbs5Fk1A5Zs-P_Jo=w2400',
  'https://lh4.googleusercontent.com/Rked64MlkYtr6vS0MGwpm9H2yaeBGVeqHbckiYFJrY9U4hrDZ7azOAvKCIB1pPHASvY=w2400'
]
const GalleryInstance = ({ popupDan, cate = 'wedding', photos = [] }) => {
  const viewCount = useRef(0)
  const title = {
    wedding: 'Ảnh cưới',
    dailys: 'Story'
  }
  const [reiniting, setReiniting] = useState(false)
  console.log({ photos })
  const onInit = (detail) => {
    console.log('lightGallery has been initialized', detail)
  }
  const handleSlideAfter = () => {
    viewCount.current = viewCount.current + 1
    console.log(viewCount.current)
  }
  const handleLgClose = () => {
    console.log('lg close')
    // if (viewCount.current >= 20) {
    //   popupDan('超长回忆')
    // }
  }
  const handleLgOpen = () => {
    viewCount.current = 0
  }
  useEffect(() => {
    setReiniting(true)
    const inter = setTimeout(() => {
      setReiniting(false)
    }, 1000)
    return () => {
      clearTimeout(inter)
    }
  }, [photos])
  return reiniting ? (
    <Loading>Chờ xíu nhé...</Loading>
  ) : (
    <LightGallery
      onAfterClose={handleLgClose}
      onAfterOpen={handleLgOpen}
      onAfterSlide={handleSlideAfter}
      mode={cate == 'wedding' ? 'lg-zoom-in-big' : 'lg-slide-vertical-growth'}
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {photos.map((photo) => {
        return (
          <div
            key={photo}
            className="picture"
            data-sub-html={`<h4>${title[cate]}</h4>`}
            // data-src={`https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/${photo}.png?x-oss-process=image/resize,w_1200`}
            data-src={photo}
          >
            <img
              // src={`https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/${photo}.png?x-oss-process=image/resize,w_300`}
              src={photo}
            />
          </div>
        )
      })}
    </LightGallery>
  )
}
export default function Gallery({ popupDan }) {
  const [cate, setCate] = useState('wedding')
  const [photos, setPhotos] = useState(wedding_pictures)

  const handleCateClick = (evt) => {
    const { cate } = evt.target.dataset
    setCate(cate)
    setPhotos(cate == 'wedding' ? wedding_pictures : dailys)
  }
  return (
    <StyledWrapper>
      <Title title="Thư viện ảnh" />
      <div className="btns">
        <div className="group">
          <button
            className={`btn ${cate == 'wedding' ? 'curr' : ''}`}
            data-cate="wedding"
            onClick={handleCateClick}
          >
            Ảnh cưới
          </button>
          <button
            className={`btn ${cate == 'dailys' ? 'curr' : ''}`}
            data-cate="dailys"
            onClick={handleCateClick}
          >
            Story
          </button>
        </div>
      </div>
      <div className="wrapper">
        <GalleryInstance cate={cate} photos={photos} popupDan={popupDan} />
      </div>
    </StyledWrapper>
  )
}
