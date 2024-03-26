// import { useState } from 'react'
import { MouseEvent, useState } from 'react';
import './App.css'
// import styles from './App.moudule.scss'
import Page from './Page'


function App() {
  const [n, setN] = useState('0');

  const changeTab = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('clicked!', 'selecting: Page', e.currentTarget.accessKey)
    const selected = e.currentTarget.accessKey
    setN(selected)
  }

  return (
    <>
      <div className='container'>
        <div className='partA'>
          {/* <Nav> */}
          <div className='nav'>
            <a
              accessKey='0'
              href='#'
              className='inline'
              onClick={(e) => changeTab(e)}
            >
              Page A
            </a>
            <a
              accessKey='1'
              href='#'
              className='inline'
              onClick={(e) => changeTab(e)}
            >
              Page B
            </a>
          </div>
          {/* </Nav> */}
        </div>
        <div className='partA'>
          <Page pageValue={n} />
        </div>
      </div>
    </>
  )
}

export default App
