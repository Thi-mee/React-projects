import React from 'react'
import Portal from '../components/shared/Portal'
import Header from '../components/blogComponents/Header'
import BlogContainer from '../components/blogComponents/BlogContainer'

import style from '../styles/BlogStyles/Blog.module.css'

function Blog() {
  return (
    <Portal>
      <div className={style.container}>
        <Header />
        <BlogContainer />
      </div>
    </Portal>
  )
}

export default Blog