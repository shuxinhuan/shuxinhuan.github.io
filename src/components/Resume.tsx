import './Resume.css'
import { paperList } from '../assets/info'
import { PAPER } from '../typings/types'

function Resume () {
  let journalFirst = paperList.filter((p)=>p.type === 'Journal')[0].year
  let otherFirst = paperList.filter((p) => p.type === 'Other')[0].year
  return (
    <div id='cv'>
      <h1>Xinhuan Shu</h1>
      <div className='contact'>
        <div className='address'>
          <span>School of Computing</span>
          <span>Newcastle University</span>
          <span>Urban Science Building</span>
          <span>Newcastle upon Tyne, NE4 5TG</span>
        </div>
        <div className='misc'>
          <span>+44 753336328 <i className="fa-solid fa-phone"></i></span>
          <span><a href="mailto:xinhuan.shu@newcastle.ac.uk">xinhuan.shu@newcastle.ac.uk <i className="fa-solid fa-envelope"></i></a></span>
          <span><a href='https://shuxinhuan.github.io/'>https://shuxinhuan.github.io/ <i className="fa-solid fa-globe"></i></a></span>
          <span><a href="https://twitter.com/shuxinhuan">@shuxinhuan <i className="fa-brands fa-twitter"></i></a></span>
        </div>
      </div>
      
      <h3>PROFESSIONAL EXPERIENCE</h3>
      <div>
        <div className="entry">
          <span className="time">2024-</span>
          <span className="item">
            <span className='cv-hl'>Newcastle Univeristy</span>, Newcastle Upon Tyne, UK <br /> 
            <em>Lecturer (Assistant Professor), School of Computing</em> <br /> 
            <em>Deputy Program Director for Data Science MSc Degree Program</em>
          </span>
        </div>
        <div className="entry">
          <span className="time">2022-23</span>
          <span className="item"><span className='cv-hl'>University of Edinburgh</span>, Edinburgh, UK <br /> <em>Postdoctoral Fellow, VisHub, with Dr. Benjamin Bach</em></span>
        </div>
        <div className="entry">
          <span className="time">2017-22</span>
          <span className="item"><span className='cv-hl'>The Hong Kong University of Science and Technology</span>, Hong Kong <br /> <em>Postdoctoral Fellow and Research Assistant, VisLab, with Prof. Huamin Qu</em></span>
        </div>
        <div className="entry">
          <span className="time">2020-21</span>
          <span className="item"><span className='cv-hl'>Zhejiang Lab</span>, Hangzhou, China <br /> <em>Research Intern, Jianwei Group, with Prof. Yingcai Wu and Prof. Wei Chen</em></span>
        </div>
        <div className="entry">
          <span className="time">2020</span>
          <span className="item"><span className='cv-hl'>Zhejiang Univeristy</span>, Hangzhou, China <br /> <em>Visiting PhD Student, ZJUIDG, with Prof. Yingcai Wu</em></span>
        </div>
        <div className="entry">
          <span className="time">2016-17</span>
          <span className="item"><span className='cv-hl'>Zhejiang Univeristy</span>, Hangzhou, China <br /> <em>Undergraduate Research Intern, ZJUIDG, with Prof. Yingcai Wu</em></span>
        </div>
      </div>

      <h3>EDUCATION</h3>
      <div>
        <div className="entry">
          <span className="time">2017-21</span>
          <span className="item">
            <span><span className='cv-hl'>Ph.D. </span>in <span className='cv-hl'>Computer Science and Engineering</span></span>
            <br />
            <span>The Hong Kong University of Science and Technology, Hong Kong</span>
            <br />
            <span><em>Advisor: </em>Huamin Qu</span>
            <br />
            <span><em>Thesis: </em>Enhancing Data-driven Storytelling with Animated Visualization</span>
            <br />
            <span><em>Committee: </em>Huamin Qu, Jonathan Zhu, Cunsheng Ding, Hao Chen, Kai Tang</span>
          </span>
        </div>
        <div className="entry">
          <span className="time">2013-17</span>
          <span className="item">
            <span><span className='cv-hl'>B.Eng </span>in <span className='cv-hl'>Computer Science and Engineering</span></span>
            <br />
            <span>Zhejiang Univeristy, Hangzhou, China</span>
            <br />
            <span><em>Advisor: </em>Yingcai Wu</span>
            <br />
            <span>Graduated under the Chu Kochen Honors College</span>
          </span>
        </div>
      </div>

    <h3>PUBLICATIONS</h3>
    {/* <span>* denotes equal contribution</span> */}
    <h4>Peer-reviewed Conference and Journal Publications</h4>
    <div>
        {paperList.filter((p: PAPER) => p.type === 'Journal').map((paper: PAPER, index: number) => {
          let year = index === 0 ? `${journalFirst}` : ''
          if (index !== 0 && journalFirst !== paper.year) {
            year = `${paper.year}`
            journalFirst = paper.year
          }
          return (
            <div className="entry">
              <span className="time pub-time">  
                <span className="pub-year">{year}</span>
                <span className='pub-index'>[P{index + 1}]</span>
              </span>
              <span className="item">
                {paper.authorsA}<span className='cv-hl'>Xinhuan Shu</span>
                {paper.authorsB.length > 0 ? <>{paper.authorsB}.</> : <>.</>}
                <span style={{ fontWeight: 500, color: '#CA662C' }}> {paper.title}</span>.
                In <em>{paper.full}</em>.
                {paper.honor.length > 0 ? <><br /><span style={{ fontSize: 15, fontWeight: 500, color: '#CA662C', borderBottom: '1px solid #CA662C' }}>🏆 {paper.honor}</span></> : <></>}
              </span>
            </div>)
        })}
    </div>
    <h4>Posters, Extended Abstract, Workshop Papers, and Preprints</h4>
    <div>
      {paperList.filter((p: PAPER) => p.type === 'Other').map((paper: PAPER, index: number) => {
        let year = index === 0 ? `${otherFirst}` : ''
        if (index !== 0 && otherFirst !== paper.year) {
          year = `${paper.year}`
          otherFirst = paper.year
        }
        return (
          <div className="entry">
            <span className="time" style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 10 }}>
              <span style={{ fontWeight: 500 }}>{year}</span>
              <span style={{ fontSize: 14 }}>[W{index + 1}]</span>
            </span>
            <span className="item">
              {paper.authorsA}<span className='cv-hl'>Xinhuan Shu</span>
              {paper.authorsB.length > 0 ? <>{paper.authorsB}.</> : <>.</>}
              <span style={{ fontWeight: 500, color: '#CA662C'}}> {paper.title}</span>.
              In <em>{paper.full}</em>.
              {paper.honor.length > 0 ? <><br /><span style={{ fontSize: 15, fontWeight: 500, color: '#CA662C', borderBottom: '1px solid #CA662C' }}>🏆 {paper.honor}</span></> : <></>}
            </span>
          </div>)
      })}
    </div>

    <h3>SELECTED HONORS & AWARDS</h3>
    <div>
      <div className="entry">
        <span className="time">2017-21</span>
        <span className="item">
          Postgraduate Studentship (∼216,300 HKD/yr), Hong Kong Univeristy of Science and Technology
        </span>
      </div>
      <div className="entry">
        <span className="time">2020</span>
        <span className="item">
          Best Paper Honorable Mention Award, ChinaVis 2020
        </span>
      </div>
      <div className="entry">
        <span className="time">2017</span>
        <span className="item">
          Outstanding Graduates of Zhejiang University
        </span>
      </div>
      <div className="entry">
        <span className="time">2017</span>
        <span className="item">
          Excellent Graduation Thesis of Zhejiang University
        </span>
      </div>
      <div className="entry">
        <span className="time">2014-16</span>
        <span className="item">
          University Scholarships, Zhejiang University
        </span>
      </div>
    </div>

  <h3>GRANTS</h3>
  <div>
    <div className="entry">
      <span className="time">2024</span>
      <span className="item">
          <a href='https://gulbenkian.pt/emifund/news/2024-call-for-proposals-results/' target='_blank'>FAMOUS: Fake Activity Market Observation System of Unethical Services</a> (Co-I)<br/>
          €400k, funded by European Media and Information Fund
      </span>
    </div>
  </div>


    <h3 id="teaching">TEACHING EXPERIENCE</h3>
    <h4>Lecturer</h4>
    <div>
        <div className="entry">
          <span className="time">2024</span>
          <span className="item">
            <span className='cv-hl'><a href="https://www.ncl.ac.uk/mobility/newcastle/study-abroad/CSC3833" target='_blank'>CSC3833: Data Visualization and Visual Analytics</a></span> (Newcastle Univeristy)
            <br />
            A visualization course in the undergraduate level.
          </span>
        </div>
        <div className="entry">
          <span className="time"></span>
          <span className="item">
            <span className='cv-hl'>CSC8632: Data Science in the wild</span> (Newcastle Univeristy)
            <br />
            A practical course in the postgraduate level that immerses students in real-world data science challenges.
          </span>
        </div>
    </div>

    <h4>Guest Lecturer</h4>
    <div>
        <div className="entry">
          <span className="time">2024</span>
          <span className="item">
            <span className='cv-hl'>Data Visualization in Human-centered Data Science</span> (Newcastle Univeristy)
            <br />
            In <em>Human-AI Interaction</em>, and <em>Complex Data Visualization</em> (Postgraduate Level Course)
          </span>
        </div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            <span className='cv-hl'>Data Visualization for Human-data Interaction</span> (Univeristy of Edinburgh)
            <br />
            In <em>Data Science for Design</em> (Postgraduate Level Course)
          </span>
        </div>
        <div className="entry">
          <span className="time">2021</span>
          <span className="item">
            <span className='cv-hl'>Designing Data-GIFs for Storytelling</span> (Zhejiang Univeristy)
            <br />
            In <em>Data Visualization</em> (Undergraduate Level Course)
          </span>
        </div>
    </div>
    <h4>Tutor</h4>
    <div>
      <div className="entry">
        <span className="time">2023</span>
        <span className="item">
          <span className='cv-hl'>Case Studies in Design Informatics</span> (Univeristy of Edinburgh)
          <br />
          <em>Graduate Level Course (Instructor: John Vines)</em>
        </span>
      </div>
    </div>
    <h4>Teaching Assistant</h4>
    <div>
        <div className="entry">
          <span className="time">2023</span>
          <span className="item">
            <span className='cv-hl'>Msc Dissertation Project</span> (Univeristy of Edinburgh)
            <br />
            <em>Graduate Level (Instructor: Benjamin Bach)</em>
          </span>
        </div>
        <div className="entry">
          <span className="time">2018</span>
          <span className="item">
            <span className='cv-hl'>COMP1021 Introduction to Computer Science</span> (Hong Kong Univeristy of Science and Technology)
            <br />
            <em>Undergraduate Level Course</em>
          </span>
        </div>
    </div>

    <h3>MENTORING EXPERIENCE</h3>
    {/* <h4>Advisees</h4> */}
    <h4>Mentoring</h4>
    <div>
      <div className="entry">
        <span className="time">PhD</span>
        <span className="item">
            <span className="cv-hl"><a href="https://crcrcry.notion.site/" target='_blank'>Ran Chen</a></span>, visiting PhD student at University of Edinburgh
          <br />
            <em>Declarative Construction of Visualization Coordination and Data Transformation [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Rigel: Transforming Tabular Data by Declarative Mapping") + 1}, P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Nebula: A Coordinating Grammar of Graphics") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="https://shellywhen.github.io/" target='_blank'>Liwenhan Xie</a></span>, PhD student at HKUST
          <br />
          <em>Creating Emordle: Animating Word Cloud for Emotion Expression [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Creating Emordle: Animating Word Cloud for Emotion Expression") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href='https://ahugh19.github.io/' target='_blank'>Junxiu Tang</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Animated Visualization for Visual Data Storytelling [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "What Makes a Data-GIF Understandable?") + 1}, W{paperList.filter(p => p.type === 'Other').findIndex((ele) => ele.title === "Narrative Transitions in Data Videos") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="http://yiyinyinguu.github.io/" target='_blank'>Lu Ying</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Automatic Generation of Metaphoric Glyph-based Visualization [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "MetaGlyph: Automatic Generation of Metaphoric Glyph-based Visualization") + 1}]</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
            <span className="cv-hl"><a href="https://maple-possum-c4d.notion.site/Zhongsu-LUO-9a76b04931a848179b6f8488033b3a2a" target='_blank'>Zhongsu Luo</a></span>, PhD student at Zhejiang Univeristy
          <br />
          <em>Data Wrangling [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts") + 1}]</em>
        </span>
      </div>
      {/* MASTER */}
      <div className="entry">
          <span className="time">Master</span>
        <span className="item">
          <span className="cv-hl"><a href='https://yhuang.top/' target='_blank'>Yanwei Huang</a></span>, Master student at Zhejiang Univeristy
          <br />
            <em>Interactive Table Synthesis with Natural Language [P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Interactive Table Synthesis with Natural Language") + 1}, P{paperList.filter(p => p.type === 'Journal').findIndex((ele) => ele.title === "Table Illustrator: Puzzle-based Interactive Authoring of Plain Tables") + 1}]</em>
        </span>
      </div>
      {/* <div className="entry">
        <span className="time">Master</span>
        <span className="item">
          <span className="cv-hl">Xiaoyang Chen</span>, Msc student at University of Edinburgh
          <br />
          <em>Network Visualization Visual Editor</em>
        </span>
      </div> */}
    </div>
    {/* <h4>Thesis Committee</h4> */}

    <h3 id="talks">INVITED TALKS AND OUTREACH</h3>
    <div>
      <div className="entry">
        <span className="time">2024</span>
        <span className="item">
          <span className='cv-hl'>Interactive Pattern Explanation for Network Visualization</span><br />
            <em>#VizTig Symposium (2024.09), IEEE VIS Conference (2024.10)</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>Interfaces and Grammars for Interactive Network Visualisation</span><br />
          <em>Edinburgh Data Visualisation Meetup (2024.05), Edinburgh, UK</em>
        </span>
      </div>
        <div className="entry">
          <span className="time"></span>
          <span className="item">
            <span className='cv-hl'>Engaging with Insight: Creating and Analyzing Engagement with Data Visualization</span><br />
            <em>Swansea Univeristy (2024.05), Swansea, UK</em>
          </span>
        </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>Data Visualization for Human-AI Teaming</span><br />
          <em> Research & Innovation Showcase in Data Science & AI (2024.03), Newcastle Upon Tyne, UK</em>
        </span>
      </div>
      <div className="entry">
        <span className="time">2022</span>
        <span className="item">
          <span className='cv-hl'>MetaGlyph: Automatic Generation of Metaphoric Glyph-based Visualization</span><br />
          <em>IEEE VIS Conference (2022.10), Oklahoma City, USA</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>Rigel: Transforming Tabular Data By Declarative Mapping</span><br />
          <em>IEEE VIS Conference (2022.10), Oklahoma City, USA</em>
        </span>
      </div>
      <div className="entry">
        <span className="time">2021</span>
        <span className="item">
          <span className='cv-hl'>Enhancing data-driven storytelling with animated visualization</span><br />
          <em>Tongji University & Fudan University (2021.06), Shanghai, China</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>DancingWords: Exploring Animated Word Clouds to Tell Stories</span><br />
          <em>ChinaVis (2021.10), Xi'an, China</em>
        </span>
      </div>
      <div className="entry">
        <span className="time"></span>
        <span className="item">
          <span className='cv-hl'>What Makes a Data-GIF Understandable ?</span><br />
          <em>IEEE VIS Conference (2020.10), Virtual, Online</em>
        </span>
      </div>
    </div>

    <h3 id="service">SERVICE</h3>
    <h4>Organizing Committees</h4>
    <div>
      <div className="entry">
        <span className="time">2022-</span>
        <span className="item">
          <span className='cv-hl'>Co-Organizer</span>, <a href="https://www.meetup.com/datavisedinburgh/" target='_blank'>Edinburgh Data Visualisation Meetup</a>
        </span>
      </div>
      <div className="entry">
        <span className="time">2024</span>
        <span className="item">
            <span className='cv-hl'>Co-Organizer</span>, <a href='https://blogs.ncl.ac.uk/nova/viztig-symposium-2024/' target='_blank'>Visualization Turing Interest Group (#VizTIG) Symposium </a>
        </span>
      </div>
      <div className="entry">
        <span className="time">2023</span>
        <span className="item">
            <span className='cv-hl'>Student Volunteer Chair</span>, <a href='https://informationplusconference.com/2023/' target='_blank'>Information+ Conference</a>
        </span>
      </div>
    </div>
    <h4>Program Committees</h4>
    <div>
      <div className="entry">
        <span className="time">VIS</span>
        <span className="item">
          <span className='cv-hl'>VIS</span> short paper track (2022-24), <span className='cv-hl'>PacificVis</span> TVCG track (2025), VisNotes (2024), <span className='cv-hl'>ChinaVis</span> full paper track (2022-24)
        </span>
      </div>
      <div className="entry">
        <span className="time">HCI</span>
        <span className="item">
          <span className='cv-hl'>CHI</span> full paper track (2024-25)
        </span>
      </div>
    </div>

    <h4>Paper Reviewing</h4>
    <div>
      <div className="entry">
        <span className="time">VIS</span>
        <span className="item">
          <span className='cv-hl'>VIS</span> 2021-24, <span className='cv-hl'>TVCG</span> 2022-24, <span className='cv-hl'>EuroVis</span> 2020-23, <span className='cv-hl'>PacificVis</span> 2021-23, <span className='cv-hl'>ChinaVis</span> 2021-24,  <span className='cv-hl'>VI</span> 2024
        </span>
      </div>
      <div className="entry">
        <span className="time">HCI</span>
        <span className="item">
          <span className='cv-hl'>CHI</span> 2021-24, <span className='cv-hl'>CSCW</span> 2023
        </span>
      </div>
    </div>
 
    <h4>Community Service</h4>
    <div>
      <div className="entry">
        <span className="time">2020</span>
        <span className="item">
          <span className='cv-hl'>Student Volunteer</span>, IEEE VIS
        </span>
      </div>
      <div className="entry">
        <span className="time">2019</span>
        <span className="item">
          <span className='cv-hl'>Teaching Assistant Coordiate</span>, CSE Despartment, Hong Kong University of Science and Technology
        </span>
      </div>
    </div>


      {/* <h3>MEDIA COVERAGE</h3> */}
    </div>
  )
}

export default Resume