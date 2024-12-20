import { Row, Col } from "antd"
import { PAPER } from "../typings/types"
import './Publication.css'
import { FilePdfOutlined, HomeOutlined, VideoCameraOutlined, GlobalOutlined, GithubOutlined, SnippetsOutlined } from '@ant-design/icons';

interface Props {
  selected: PAPER
}

function Paper (props: Props) {
  const paper = props.selected

  const getMaterialIcon = (type: string) => {
    switch(type) {
      case 'Paper': 
        return <FilePdfOutlined />
      case 'Video': 
        return <VideoCameraOutlined />
      case 'Homepage':
        return <HomeOutlined />
      case 'Github':
        return <GithubOutlined />
      case 'Appendix':
        return <SnippetsOutlined />
      case 'Demo':
        return <GlobalOutlined />
      default:
        return <SnippetsOutlined />
    }
  }

  return (
    <Row className="paper">
      <Col span={5} className="thumb">
        <img src={`/${paper.thumb}`} alt="" />
      </Col>
      <Col span={19} className="info">
        <p><a href={paper.materials.Paper} target="_blank" className="title">{paper.title}</a></p>
        <p className="author-list">
          <span className="authors">{paper.authorsA}</span>
          <span className="me">Xinhuan Shu</span>
          <span className="authors">{paper.authorsB}</span>
        </p>
        <p className="pub">
          <span className="abbr">{paper.abbr}</span>
          <span className="full">{paper.full}</span>
        </p>
        {paper.honor.length !== 0 ? <p className="honor">
          🏆 Best Paper Honorable Mention
        </p> : null}
        
        <p className="materials">
          {Object.entries(paper.materials).map((entry: [string, string]) => (
            <a className="material" 
              href={entry[1]}
              target="_blank"
              key={entry[0]}>
                {getMaterialIcon(entry[0])}
                <span style={{marginLeft: 4}}>{entry[0]}</span>
            </a>
          ))}
        </p>
      </Col>
    </Row>
  )
}

export default Paper