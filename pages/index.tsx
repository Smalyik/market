import { HelloWorld } from 'components'
import Head from 'next/head'
import React from 'react'

const App = () => {
  return (
    <>
      <Head>
        <title>dumb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HelloWorld />
    </>
  )
}

export default App