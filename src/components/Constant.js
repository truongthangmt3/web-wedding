import BGImage from '../assets/imgs/bg.jpg'
import BGImage1 from '../assets/imgs/bg1.jpg'

function importAll(r) {
  let images = []

  r.keys().map((item, index) => {
    console.log({
      '================================================': r(item).default
    })
    const image = r(item).default
    images.push(image)
  })
  return images
}

const wedding_pictures = importAll(
  require.context('../assets/wedding', false, /\.(png|jpe?g|svg|jpg)$/)
)
const daily_pictures = importAll(
  require.context('../assets/daily', false, /\.(png|jpe?g|svg|jpg)$/)
)
console.log({ daily_pictures })
export default {
  wedding_pictures: [
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
  ],
  daily_pictures,
  main_picture: BGImage
}

// export default {
//     wedding_pictures: [],
//     daily_pictures: [],
//     main_pictures: []
//   }
