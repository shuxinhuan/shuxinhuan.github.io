import { Divider } from "antd"
import './About.css'

function About () {
  return (
    <div id="about">
      <div className="avatar">
        <img src="/img/sxh.jpg" />
        <div className="greeting">
          <div>
            <span style={{fontFamily: 'semibold', fontSize: 28}}>Hi! I'm <span className="bg-hl">Xinhuan Shu</span></span>
            <span style={{fontFamily: 'SimSun', fontWeight: 300, marginLeft: 5 }}>(舒欣欢)</span>
          </div>

          <div className="positions">
            <span style={{ fontSize: 18, fontFamily: 'sans-serif', fontWeight: 300, color: 'rgb(40, 40, 40)' }}>
              <span>Lecturer (Assistant Professor) </span>
              <span>@ Newcastle University</span>
            </span>
            <span style={{fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3}}>Data Visualization 📊 / Human-Computer Interaction 🖥 / Data-driven Storytelling 🖊</span>
          </div>

          <div className="links">
            <a href="mailto:xinhuan.shu@newcastle.ac.uk"><i className="fa-solid fa-envelope fa-xl"></i></a>
            <a href="https://scholar.google.com/citations?hl=en&user=S4bByOIAAAAJ"><i className="fa-brands fa-google fa-xl"></i></a>
            <a href="https://twitter.com/shuxinhuan"><i className="fa-brands fa-twitter fa-xl"></i></a>
          </div>
        </div>
      </div>

      <Divider />

      <div className="content">
        <p>
          I'm a <b>lecturer (assistant professor)</b> at the <a className="text-hl" href="https://www.ncl.ac.uk/computing/">School of Computing, Newcastle University</a>.
          I am actively seeking <b>motivated PhD, master, and undergraduate students</b> to work on exciting research projects! 🙌
        </p>
        <p>
          My research aims to <span className="hl">engage humans in interacting with the world of data through visualization</span>. I work on developing <span className="hl">expressive visualization techniques</span> and <span className="hl">human-AI interfaces</span> that facilitate human-data interaction at various data activities, including data transformation, analysis, communication, and decision-making.
          {/* I work on developing expressive visualization techniques and intelligent tools that enable <b>human-data interaction</b> at various data activities */}
          {/* My research probes the intersection of <b>data visualization</b> and <b>human-computer interaction</b>, where I aim to explore innovative approaches to <b>facilitate human-data interaction</b>. Specifically, I conduct user studies to understand how humans perceive and apply visual designs and interactions in data-driven communication and decision-making. Further, I design and develop interactive and automatic tools for both novices and experts to ease the creation of data visualizations, paving the way for data democratization. */}
        </p>
        <p>
          Prior to that, I was a PostDoc Fellow, advised by <a className="text-hl" href="https://vishub.net/bach">Prof. Benjamin Bach</a> in <a className="text-hl" href="https://vishub.net/">VisHub</a> at Univeristy of Edinburgh. I obtained my Ph.D. from the Hong Kong University of Science and Technology (HKUST), supervised by <a className="text-hl" href="http://huamin.org/">Prof. Huamin Qu</a> in <a className="text-hl" href="http://vis.cse.ust.hk/">VisLab</a>. I got my Bachelor degree, with major in Computer Science and minor in Public Administration at Chu Kochen Honors College, Zhejiang University, where I worked in <a className="text-hl" href="https://zjuidg.org/">ZJUIDG Group</a>, supervised by <a className="text-hl" href="http://www.ycwu.org/">Prof. Yingcai Wu</a>.

        </p>
        <p>
          I love writing, designing, vlogging, and playing pianos in my spare time.
        </p>
      </div>

    </div>
  )
}

export default About