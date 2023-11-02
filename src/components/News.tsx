import { Button, Divider } from 'antd'
import './News.css'
import { useEffect, useState } from 'react'

function News () {
  const [current, setCurrent] = useState(2)
  const [sum, setSum] = useState(0)

  const setAttr = (cur: number, count: number) => {
    const elements = document.getElementsByClassName('news')
    for (let idx = 0; idx < count; idx++) {
      const ele = elements[idx]
      if (idx < cur) {
        ele.setAttribute("class", 'news')
      }
      else {
        ele.setAttribute("class", 'news hidden')
      }
    }
  }

  const showMore = () => {
    let newCurrent = current + 3
    setCurrent(newCurrent)
    setAttr(newCurrent, sum)
  }

  const showLess = () => {
    setCurrent(5)
    setAttr(5, sum)
  }

  useEffect(() => {
    const newSum = document.getElementsByClassName('news').length
    setAttr(5, newSum)
    setSum(newSum)
  }, [sum])

  return (
    <div id='news'>
      <Divider />
      <div className="sec-title"><span className="bg-hl">News</span></div>
      <div className="content">
        <div className="news">
            <span className="time">2023.11</span>
          <span className="item">Our paper <em>"Interactive Table Synthesis with Natural Language"</em> got accepted by <span className="text-hl">TVCG</span> 🎉.</span>
        </div>
        <div className="news">
          <span className="time">2023.09</span>
          <span className="item">I'm honored to serve as an <span className="text-hl"><a href="https://chi2024.acm.org/subcommittees/selecting-a-subcommittee/#understanding_people" target="_blank">Associate Chair</a></span>👩‍⚖️ for ACM CHI 2024.</span>
        </div>
        <div className="news">
            <span className="time">2023.09</span>
            <span className="item">I'm honored to serve as an <span className="text-hl"><a href="https://informationplusconference.com/2023/" target="_blank">Student Volunteer Chair</a></span>💂‍♀️ for Information+ Conference.</span>
        </div>
        <div className="news">
            <span className="time">2023.07-2023.09</span>
            <span className="item">Our data art paper 👩‍🎨 <em>"Posts with no Response: The Island of Loneliness"</em> got accepted by <span className="text-hl"><a href="https://visap.net/2023/" target="_blank">VISAP2023 (both Pictorial and Artwork tracks)</a></span>, <span className="text-hl"><a href="https://informationplusconference.com/2023/#program" target="_blank">Information+ Conference</a></span>, and been longlisted by 2023 <span className="text-hl"><a href="https://www.informationisbeautifulawards.com/showcase/6355-posts-with-no-response-the-island-of-loneliness" target="_blank">Information is Beautiful Awards</a></span>.</span>
        </div>
        <div className="news">
          <span className="time">2023.06</span>
          <span className="item">Our paper <em>"Creating Emordle: Animating Word Cloud for Emotion Expression"</em> got accepted by <span className="text-hl">TVCG</span> 🎉.</span>
        </div>
        <div className="news">
          <span className="time">2023.04</span>
          <span className="item">I'm honored to serve as a <span className="text-hl">Program Committee member</span> 👩‍⚖️ for IEEE VIS 2023 and ChinaVis 2023.</span>
        </div>
        <div className="news">
          <span className="time">2022.10</span>
          <span className="item">I presented our two papers <em>MetaGlyph</em> and <em>Rigel</em> in <span className="text-hl">IEEE VIS 2022</span>, 📍Oklahoma, USA.</span>
        </div>
        <div className="news">
          <span className="time">2022.08</span>
          <span className="item">I started my PostDoc position at <span className="text-hl"><a href="https://vishub.net/">VisHub</a></span>, 📍Univeristy of Edinburgh.</span>
        </div>
        <div className="news">
          <span className="time">2022.08</span>
          <span className="item">Two papers <em>MetaGlyph</em> and <em>Rigel</em> got accepted by <span className="text-hl"><a href="https://ieeevis.org/year/2022/info/papers-sessions" target="_blank"> IEEE VIS 2022</a></span> 🙌.</span>
        </div>
        <div className="news">
          <span className="time">2022.05</span>
          <span className="item">I'm honored to serve as a <span className="text-hl">Program Committee member</span> 👩‍⚖️ for IEEE VIS 2022 and ChinaVis 2022.</span>
        </div>
        <div className="news">
          <span className="time">2021.08</span>
          <span className="item">I passed my <span className="text-hl">Ph.D. defense</span>!! Many thanks to my committee, mentors, family, and everyone who supported me along the way!!! A <span className="text-hl"><a href="https://mp.weixin.qq.com/s/vLXPe7LJL0aqsYt65qCWDA" target="_blank">refection</a></span> of my PhD life in Chinese.</span>
        </div>
      </div>
      {current < sum ? <Button type="text" onClick={showMore}>➕ Show more</Button> : <Button type="text" onClick={showLess}>⬆ Show Less</Button>}
    </div>
  )
}

export default News