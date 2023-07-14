import { WebsiteLayout, styled } from 'neza-ui-library'
import '../styles/globals.css'
import * as THREE from 'three'
import { useEffect, useState } from 'react'

const menuItems = [ { label: 'Home', link: '/' }, { label: 'hello', link: '/hello' }, { label: 'FAQ', link: '#faq' }, { label: 'Contact HR', link: '#contact' } ]

const MyApp = ({ Component, pageProps }) => {

  const [opened, setOpened] = useState(false)

  const handleToggle = () => setOpened(!opened)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000)
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg')
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
    <canvas id='bg'></canvas>
    {/* <Menu>
      <MenuItem>Item Home</MenuItem>
    </Menu> */}
    <ul className={`menu ${opened ? ' opened' : ''}`} >
      <li>home</li>
      <li>about</li>
      <li>hello</li>
    </ul>
    <span className='hamburger' onClick={handleToggle}>
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
          <span className={`hamburgerIcon ${opened ? ' active' : ''}`} />
        </span>
    {/* <WebsiteLayout menuItems={menuItems} logo={'hello'} opened={opened} setOpened={setOpened} > */}
    <Component {...pageProps} />
  {/* </WebsiteLayout>  */}
  </div> 
}

export default MyApp
