import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsItem from './Components/NewsItem'
import { BrowserRouter, Route, Routes } from "react-router-dom"


import News from './Components/News'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<News key="home" pageSize={9} country='in' category="general" />}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={9} country='in' category="sports" />}></Route>
          <Route path="/business" element={<News key="business" pageSize={9} country='in' category="business" />}></Route>
          <Route path="/entertainment" element={<News key="entertainme" pageSize={9} country='in' category="entertainment" />}></Route>
          <Route path="/general" element={<News key="general" pageSize={9} country='in' category="general" />}></Route>
          <Route path="/health" element={<News key="health" pageSize={9} country='in' category="health" />}></Route>
          <Route path="/science" element={<News key="science" pageSize={9} country='in' category="science" />}></Route>
          <Route path="/technology" element={<News key="technology" pageSize={9} country='in' category="technology" />}></Route>
        </Routes>

      </BrowserRouter>

    )
  }
}

export default App
