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
import Constant from './Constant'
const Loading = styled.div`
  font-size: 0.24rem;
  padding: 0.4rem 0.2rem;
  text-align: center;
`
const StyledWrapper = styled.section`
  min-height: 50vh;
  font-family: 'Open Sans';
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

const wedding_pictures = Constant.wedding_pictures
const dailys = Constant.daily_pictures
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
