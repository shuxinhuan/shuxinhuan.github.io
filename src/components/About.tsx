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
            <span style={{fontSize: 18, fontFamily: 'sans-serif', fontWeight: 300}}>PostDoc / Incoming AP</span>
            <span style={{fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300}}>Data Visualization 📊 / Human-Computer Interaction 🖥 / Data-driven Storytelling 🖊</span>
          </div>
          <div className="links">
            <a href="mailto:xinhuan.shu@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a>
            <a href="https://scholar.google.com/citations?hl=en&user=S4bByOIAAAAJ"><i className="fa-brands fa-google fa-xl"></i></a>
            <a href="https://twitter.com/shuxinhuan"><i className="fa-brands fa-twitter fa-xl"></i></a>
          </div>
        </div>
      </div>

      <Divider />

      <div className="content">
        <p>
          I am currently a PostDoc Fellow, advised by <a className="hl" href="https://vishub.net/bach">Prof. Benjamin Bach</a> in <a className="hl" href="https://vishub.net/">VisHub</a> at Univeristy of Edinburgh.
          I'm also an incoming lecturer (assistant professor) in the <a className="hl" href="https://www.ncl.ac.uk/computing/">School of Computing, Newcastle University</a> in 2024 Spring.
          I am actively seeking motivated PhD students and research interns! 🙌
        </p>
        <p>
          {/* I design and develop effective and expressive visualization techniques and tools, enabling <b>human-data interaction</b> at various data activities. */}
          My research aims to <span className="text-hl">engage humans in interacting with the world of data through visualization</span>. I work on developing expressive visualization techniques and intelligent tools that enable <b>human-data interaction</b> at various data activities, such as data transformation, analysis, communication, and decision-making.
          {/* My reserach mainly adopts qualitative methods and miexed methods.
          Methodology wise I use qualitative methods as my main method, including interviews and content analysis. I also use mixed methods adding descriptive and inferential statistics as needed.
          My research probes the intersection of <b>data visualization</b> and <b>human-computer interaction</b>, where I aim to explore innovative approaches to <b>facilitate human-data interaction</b>. Specifically, I conduct user studies to understand how humans perceive and apply visual designs and interactions in data-driven communication and decision-making. Further, I design and develop interactive and automatic tools for both novices and experts to ease the creation of data visualizations, paving the way for data democratization. */}
        </p>
        <p>
          I obtained my Ph.D. from the Hong Kong University of Science and Technology (HKUST), supervised by <a className="hl" href="http://huamin.org/">Prof. Huamin Qu</a> in <a className="hl" href="http://vis.cse.ust.hk/">VisLab</a>. I got my Bachelor degree, with major in Computer Science and minor in Public Administration at Chu Kochen Honors College, Zhejiang University, where I worked in <a className="hl" href="https://zjuidg.org/">ZJUIDG Group</a>, supervised by <a className="hl" href="http://www.ycwu.org/">Prof. Yingcai Wu</a>.

        </p>
        <p>
          I love writing, designing, vlogging, and playing pianos in my spare time.
        </p>
      </div>

    </div>
  )
}

export default About