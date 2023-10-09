import '../styles/globals.css'
import * as THREE from 'three'
import { useEffect, useState } from 'react'
import logo from '../public/logo.png'
import { styled } from 'styled-components'

const menuItems = [ { label: 'Home', link: '/' }, { label: 'hello', link: '/hello' }, { label: 'FAQ', link: '#faq' }, { label: 'Contact HR', link: '#contact' } ]

const Menu1 = styled.div`
transform: rotate(90deg);
width: 100vh; height: 64px; background: #dfe; position: fixed; 
top: 0; left: 100%; transform-origin: left top; padding: 24px;
display: flex;
@media only screen and (max-width: 720px) {
  transform: rotate(0);
  width: 100%; height: 100%;
  top: 0; left: 0; flex-direction: column; align-items: center;
  display: none;
  &.opened {
    display: flex;
  }
}
`

const Spacer = styled.div`
display: none;
@media only screen and (max-width: 720px) {
  flex: 3;
  display: block;  
}
`

const MyApp = ({ Component, pageProps }) => {

  const [opened, setOpened] = useState(false)

  const handleToggle = () => setOpened(!opened)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'), alpha: true
    })
 
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(30)
  

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    // const material = new THREE.MeshBasicMaterial({ color: 0x443389, wireframe: true })
    const material = new THREE.MeshStandardMaterial({ color: 0x443389 })
    const torus = new THREE.Mesh(geometry, material)

    const pointLight = new THREE.PointLight(0xffffff)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    pointLight.position.set(50,0,50)

    scene.add(torus)
    scene.add(pointLight, ambientLight)
    
    renderer.render(scene, camera)
  }, [])

  return <div>
    <canvas  id='bg'></canvas>
    {/* <Menu>
      <MenuItem>Item Home</MenuItem>
    </Menu> */}
    <div style={{ position: 'fixed', width: '100%', height: '100vh', overflowY: 'auto' }} >
    <div style={{  textAlign: 'center', paddingTop: '32px' }} >
      <img src={logo?.src} />
    </div>
    {/* <div style={{ display: 'grid', placeContent: 'center', padding: '32px' }} >
      <ul className={`menu ${opened ? ' opened' : ''}`} style={{ fontSize: '16px', textDecoration: 'none', margin: 'auto' }} >
        <li style={{ listStyle: 'none' }} >HOME</li>
        <li style={{ listStyle: 'none' }} >EVENTS</li>
        <li style={{ listStyle: 'none' }} >BOOKING</li>
        <li style={{ listStyle: 'none' }} >HOST</li>
        <li style={{ listStyle: 'none' }} >ABOUT</li>
      </ul>
    </div> */}
    <Menu1 className={`menu ${opened ? ' opened' : ''}`}  >
      <Spacer />
      <div style={{ flex: '1' }} >EVENTS</div>
      <div style={{ flex: '1' }} >ABOUT</div>
      <div style={{ flex: '1' }} >BOOKING</div>
      <div style={{  }} >Socials</div>
      <Spacer />
    </Menu1>
    <span className='hamburger' onClick={handleToggle}>
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
        </span>
    {/* <WebsiteLayout menuItems={menuItems} logo={'hello'} opened={opened} setOpened={setOpened} > */}
    <Component {...pageProps} /></div>
  {/* </WebsiteLayout>  */}
  </div> 
}

export default MyApp
