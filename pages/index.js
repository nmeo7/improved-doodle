import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
    <div style={{ margin: 'auto' }} >
      <img style={{ width: '100%' }} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
      <div style={{ display: 'flex', gap: '32px', padding: '32px 64px', placeContent: 'center', maxWidth: '100%', overflowX: 'auto' }} >
        <div>
          <img style={{ borderRadius: '50%', width: '96px', height: '96px', objectFit: 'cover', textAlign: 'center' }} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
          <p style={{ textAlign: 'center' }} >Women Deliver</p>
        </div>
        <div>
          <img style={{ borderRadius: '50%', width: '96px', height: '96px', objectFit: 'cover', textAlign: 'center' }} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
          <p style={{ textAlign: 'center' }}>BK</p>
        </div>
        <div>
          <img style={{ borderRadius: '50%', width: '96px', height: '96px', objectFit: 'cover', textAlign: 'center' }} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
          <p style={{ textAlign: 'center' }}>Google</p>
        </div>
        <div>
          <img style={{ borderRadius: '50%', width: '96px', height: '96px', objectFit: 'cover' , textAlign: 'center'}} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
          <p style={{ textAlign: 'center' }}>Women Deliver</p>
        </div>
        <div>
          <img style={{ borderRadius: '50%', width: '96px', height: '96px', objectFit: 'cover', textAlign: 'center' }} src='https://s3fs.paintnite.com/fresca-web-html/paintnite/landing-page/assets/images/hero-new.webp' />
          <p style={{ textAlign: 'center' }}>Women Deliver</p>
        </div>
      </div>
      <div style={{ display: 'flex', height: '320px', alignItems: 'center', margin: '32px 64px', width: '960px', margin: 'auto' }} >
        <h2 style={{ flex: '1' }} >Book a Session</h2>
        <img src={'https://paintandsipstudios.com.au/storage/2020/06/Finished-Logo-JPG.png'} height='320px' />
      </div>
      <div>
        <h2>Browse through our past events</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' , flexWrap: 'wrap', margin: 'auto' }} >
        {
          [1, 2, 3, 4, 5, 6, ].map((a, i) => <div key={a} style={{ padding: '16px', background: ['cyan', 'magenta', 'pink', 'thistle', 'teal', 'turquoise', 'violet'][i % 7], placeContent: 'center', display: 'grid', placeContent:'center', gridColumn: (i == 2 || i == 8) && '1 / 3', gridRow: (i == 3 && '3 / 5') || (i == 6 && '5 / 7') }} >
            <img width='240px' src='https://lirp.cdn-website.com/ee739399/dms3rep/multi/opt/group-private-party-cc5eaa0a-640w.jpg' />
            <div style={{ width: '240px' }} >
              <h3>{i}. Title of the event</h3>
              <p style={{ color: '#aaa' }} >Some details about the event like date and place, etc.</p>
            </div>
          </div>)
        }
        </div>
      </div>
    </div>
  )
}
