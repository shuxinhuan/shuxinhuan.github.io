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
            <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 300, paddingTop: 3 }}>Data Visualization 📊 / Human-Computer Interaction 🖥 / Data-driven Storytelling 👩‍🎨</span>
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
          I'm a <b>lecturer (assistant professor)</b> at the <a className="text-hl" href="https://www.ncl.ac.uk/computing/">School of Computing, Newcastle University</a>, and Deputy Program Director for Data Science MSc. Prior to that, I was a PostDoc Fellow at Univeristy of Edinburgh, working with <a className="text-hl" href="https://vishub.net/bach" target="_blank">Dr. Benjamin Bach</a> in <a className="text-hl" href="https://vishub.net/" target="_blank">VisHub</a>. I obtained my Ph.D. from the Hong Kong University of Science and Technology (HKUST), supervised by <a className="text-hl" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a> in <a className="text-hl" href="http://vis.cse.ust.hk/" target="_blank">VisLab</a>. I got my Bachelor degree, with major in Computer Science and minor in Public Administration at Chu Kochen Honors College, Zhejiang University, where I worked with <a className="text-hl" href="http://www.ycwu.org/" target="_blank">Prof. Yingcai Wu</a> in <a className="text-hl" href="https://zjuidg.org/" target="_blank">Interactive Data Group</a>.
        </p>

        <p>
          My research aims to <span className="hl">engage humans in interacting, communicating, and making (artistic) use with data through visualization and AI</span>.
          {/* My research aims to <span className="hl">engage humans in interacting with the world of data through visualization</span>. */}
          I focus on designing <span className="hl">expressive visualization techniques</span> and <span className="hl">human-AI interfaces</span> that facilitate a broad spectrum of data activities, such as data transformation, analysis, decision-making, and storytelling, with a strong emphasis on promoting data literacy and creativity for all.
        </p>

        <p>
          I love <a className="text-hl" href="https://mp.weixin.qq.com/s/vLXPe7LJL0aqsYt65qCWDA" target="_blank">writing</a>, traveling, vlogging, and playing pianos in my spare time.
        </p>

        {/* <p>
          🙌 I am actively seeking <b>motivated students</b> to work on Data Visualization (VIS) and Human-Computer Interaction (HCI).
          Please find more excited projects and information in <a className="text-hl">work with me</a> if you are interested in!
        </p> */}
      </div> 


    </div>
  )
}

export default About