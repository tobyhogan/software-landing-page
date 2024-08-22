import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const PagesIndex: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col pt-20">
        <h1 className="text-3xl pt-16">Pages Index</h1>
        <ul className="flex flex-col w-fit mx-auto underline mt-8 pr-4 mb-44">
          <Link to="">Home</Link>
          <Link to="">Feature Demos</Link>
          <Link to="">URL Hash Demo</Link>
        </ul>

      </main>
      <Footer />

    </div>
  )
}

export default PagesIndex

export const Head: HeadFC = () => <title>Pages Index</title>
