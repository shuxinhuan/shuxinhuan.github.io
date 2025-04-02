import { Button, Divider } from 'antd'
import './News.css'
import { useEffect, useState } from 'react'

function News () {
  const [current, setCurrent] = useState(6)
  const [sum, setSum] = useState(0)

  
  /**
   * @description set display/hidden news
   * @param {number} cur
   * @param {number} count
   */
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
    setCurrent(6)
    setAttr(6, sum)
  }

  useEffect(() => {
    const newSum = document.getElementsByClassName('news').length
    setAttr(6, newSum)
    setSum(newSum)
  }, [sum])

  return (
    <div id='news'>
      <Divider />
      <div className="sec-title"><span className="bg-hl">News</span></div>
      <div className="content">
        <div className="news">
          <span className="time">Pinned 📌</span>
          <span className="item">I am actively seeking <b>motivated students</b> to join the group! See <a className="text-hl" target='_blank' href='https://shuxinhuan.github.io/#prospectives'>working with me</a> for more information.
          {/* See <a className="text-hl" href="./img/projects.pdf" target='_blank'>my project introduction</a> for more information. */}
          
          {/* <Link to={`./#prospectives`}>xxx</Link> */}
          </span>
        </div>
        <div className="news">
          <span className="time">Pinned 📌</span>
          <span className="item">We are organizing a monthly 📊 <a className="text-hl" href="https://www.meetup.com/datavisedinburgh/" target='_blank'>Data Visualisation Meetup</a> in Newcastle and Edinburgh. Welcome to subscribe and stay updated on our events! </span>
        </div>
        <div className="news">
          <span className="time">2025.04</span>
          <span className="item">I am hosting <a className="text-hl"  href='https://www.famous-project.eu/workshop' target='_blank'>a visualization workshop on Fake Activity Shops (FAS)</a> in 📍Luxembourg. Great to see FAMOUS project collaborators! </span>
        </div>
        <div className="news">
          <span className="time">2025.03</span>
          <span className="item"><em>"RouteFlow: Trajectory-Aware Animated Transitions"</em> got the 🏆 <b>Best Paper</b> award in CHI 2025. Congratulations to all the co-authors!</span>
        </div>
        <div className="news">
          <span className="time">2025.02</span>
          <span className="item">I am hiring an EPSRC-funded PhD in VIS/HCI for Fall 2025 on a project, <em>Promoting AI Literacy through Interactive Visualisations</em>. Deadline: Feb. 28. Welcome to contact me before the application!</span>
        </div>
        <div className="news">
          <span className="time">2025.02</span>
          <span className="item">My PhD student, Xin Shu's paper <em>"FretMate: ChatGPT-Powered Adaptive Guitar Learning Assistant"</em> has been accepted by IUI 2025. Congratulations to all the co-authors! 🎉</span>
        </div>
        <div className="news">
          <span className="time">2025.02</span>
          <span className="item">Our paper <em>"RouteFlow: Trajectory-Aware Animated Transitions"</em> got accepted by CHI 2025. Congratulations to all the co-authors! 🎉</span>
        </div>
        <div className="news">
          <span className="time">2025.02</span>
          <span className="item">I'm honored to serve as a <a className="text-hl" href="https://ieeevis.org/year/2025/info/committees/program-committees" target="_blank">program committee member</a>👩‍⚖️ for IEEE VIS 2025.</span>
        </div>
        <div className="news">
          <span className="time">2024.10</span>
          <span className="item">We are hosting a panel <em><a href='https://shuxinhuan.github.io/visap-panel/' className="text-hl" target="_blank">What Do Visualization Art Projects Bring to the VIS Community?</a></em> in <em>IEEE VIS 2024</em>! 🎉 Join us to share your thoughts on visualization and art projects! </span>
        </div>
        <div className="news">
          <span className="time">2024.09</span>
          <span className="item">A €400k funding award of the project (Co-I),  <a className='text-hl' href='https://gulbenkian.pt/emifund/news/2024-call-for-proposals-results/' target='_blank'>FAMOUS: Fake Activity Market Observation System of Unethical Services</a>, funded by European Media and Information Fund! 🎉 </span>
        </div>
        <div className="news">
          <span className="time">2024.09</span>
          <span className="item">We are hosting <em><a href='https://blogs.ncl.ac.uk/nova/viztig-symposium-2024/' className="text-hl" target="_blank">#VizTIG Symposium 2024</a></em> in 📍Catalyst, Newcastle! 🎉 It's the first time it takes place out of London. Welcome to join us on <em>September 5th</em>.</span>
        </div>
        <div className="news">
          <span className="time">2024.08</span>
          <span className="item">Three papers and one visualization art project have been accepted by <em>IEEE VIS 2024</em>! 🎉 Congratulations to all co-authors! </span>
        </div>
        <div className="news">
          <span className="time">2024.05</span>
          <span className="item">Our data artwork 👩‍🎨 <em><a className="text-hl" href='https://s2024.conference-program.org/presentation/?id=artg_205&sess=sess284' target="_blank">"Loss of Sonnet 18"</a></em> has been accepted by <em>SIGGRAPH 2024 Art Gallery</em>! Looking forward to seeing you in Denver, Colorado! </span>
        </div>
        <div className="news">
          <span className="time">2024.05</span>
          <span className="item">I'm giving a talk about our projects on data visualization for engagement creation and analysis at 📍Swansea University and 📍<a className="text-hl" href="https://www.meetup.com/datavisedinburgh/events/301730307/" target='_blank'>Data Visualisation Meetup</a>.</span>
        </div>
        <div className="news">
          <span className="time">2024.02</span>
          <span className="item">Our paper <em>"Table Illustrator: Puzzle-based interactive authoring of plain tables"</em> got accepted by CHI 2024 🎉.</span>
        </div>
        <div className="news">
          <span className="time">2024.01</span>
          <span className="item">I'm very glad to join 📍<a className="text-hl" href="https://www.ncl.ac.uk/computing/">Newcastle University</a> as a lecturer (assistant professor)! </span>
        </div>
        <div className="news">
          <span className="time">2023.11</span>
          <span className="item">We are hosting the <span className="text-hl"><a href="https://informationplusconference.com/2023/" target="_blank">Information+ Conference</a></span> in 📍Edinburgh this week (Nov. 22nd - 24th). Welcome to find us @Pleasance Theatre and @Informatics Forum.</span>
        </div>
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
          <span className="item">I'm honored to serve as a Student Volunteer Chair 💂‍♀️ for <span className="text-hl"><a href="https://informationplusconference.com/2023/" target="_blank">Information+ Conference</a></span>.</span>
        </div>
        <div className="news">
          <span className="time">2023.07-2023.09</span>
          <span className="item">Our data art paper 👩‍🎨 <em>"Posts with no Response: The Island of Loneliness"</em> got accepted by <span className="text-hl"><a href="https://visap.net/2023/" target="_blank">VISAP2023 (both Pictorial and Artwork tracks)</a></span>, <span className="text-hl"><a href="https://informationplusconference.com/2023/#program" target="_blank">Information+ Conference</a></span>, and been longlisted by 2023 <a className="text-hl" href="https://www.informationisbeautifulawards.com/showcase/6355-posts-with-no-response-the-island-of-loneliness" target="_blank">Information is Beautiful Awards</a>.</span>
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
          <span className="item">Two papers <em>MetaGlyph</em> and <em>Rigel</em> got accepted by <a className="text-hl" href="https://ieeevis.org/year/2022/info/papers-sessions" target="_blank"> IEEE VIS 2022</a> 🙌.</span>
        </div>
        <div className="news">
          <span className="time">2022.05</span>
          <span className="item">I'm honored to serve as a <span className="text-hl">Program Committee member</span> 👩‍⚖️ for IEEE VIS 2022 and ChinaVis 2022.</span>
        </div>
        <div className="news">
          <span className="time">2021.08</span>
          <span className="item">I passed my <a className="text-hl" href='https://cse.hkust.edu.hk/pg/defenses/Summer21/xshuaa-12-08-2021.html'>Ph.D. defense</a>!! Many thanks to my committee, mentors, family, and everyone who supported me along the way!!! A <span className="text-hl"><a href="https://mp.weixin.qq.com/s/vLXPe7LJL0aqsYt65qCWDA" target="_blank">refection</a></span> of my PhD life in Chinese.</span>
        </div>
      </div>
      
      <div style={{display: 'flex'}}>
        {current < sum ? <Button type="text" onClick={showMore}> ⬇️ Show more</Button> : null}
        {current > 6 ? <Button type="text" onClick={showLess}>⬆ Show Less</Button> : null}
      </div>
      
    </div>
  )
}

export default News