import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

// @ts-ignore
import projectimage from '../assets/project-image.png'





const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-20 pb-10">
        <img src={projectimage} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h2 className="mt-8">Headline Goes Here</h2>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a className='Button2 rounded-md py-2 px-5 hover:cursor-pointer'>Action Button</a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Alternate Action</a>
        </div>
        <h3 className="mt-8">Features:</h3>
        <ul className="mx-auto w-fit mt-3">
          <li>- Feature 1</li>
          <li>- Feature 2</li>
          <li>- Feature 3</li>
        </ul>

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page Template</title>
