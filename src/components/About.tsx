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
          I'm a <b style={{ fontWeight: 500 }}>lecturer (assistant professor)</b> at <a className="hl-about" href="https://www.ncl.ac.uk/computing/">School of Computing, Newcastle University</a>, and Program Director for Data Science with Visualization MSc (Incoming Human-Centred AI MSc). Prior to that, I was a PostDoc Fellow at Univeristy of Edinburgh, working with <a className="hl-about" href="https://benjbach.github.io/" target="_blank">Dr. Benjamin Bach</a> in <a className="hl-about" href="https://vishub.net/" target="_blank">VisHub</a>. I obtained my Ph.D. from the Hong Kong University of Science and Technology (HKUST), supervised by <a className="hl-about" href="http://huamin.org/" target="_blank">Prof. Huamin Qu</a> in <a className="hl-about" href="http://vis.cse.ust.hk/" target="_blank">VisLab</a>. I got my Bachelor degree, with major in Computer Science and minor in Public Administration at Chu Kochen Honors College, Zhejiang University, where I worked with <a className="hl-about" href="http://www.ycwu.org/" target="_blank">Prof. Yingcai Wu</a> in <a className="hl-about" href="https://zjuidg.org/" target="_blank">Interactive Data Group</a>.
        </p>

        <p> 
          {/* My research aims to <span className="hl">engage humans in interacting with the world of data through visualization</span>. */}
          My research focuses on <span className="hl">designing human–AI collaborative visualization systems</span> to democratize how people engage with data.
          My work facilitates a broad spectrum of data activities, such as data wrangling, analysis, decision-making, and storytelling, with a strong emphasis on promoting data and AI literacy for all.  
          My vision is to <span className="hl">enable everyone to confidently and critically explore, communicate, and act on data and AI</span>.
        </p>

        <p>
          I love <a className="hl-about" href="https://mp.weixin.qq.com/s/vLXPe7LJL0aqsYt65qCWDA" target="_blank">writing</a>, traveling, vlogging, and playing pianos in my spare time.
        </p>

        {/* <p>
          🙌 I am actively seeking <b>motivated students</b> to work on Data Visualization (VIS) and Human-Computer Interaction (HCI).
          Please find more excited projects and information in <a className="hl-about">work with me</a> if you are interested in!
        </p> */}
      </div> 


    </div>
  )
}

export default About