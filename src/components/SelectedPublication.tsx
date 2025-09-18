import { Divider } from "antd"
import { paperList } from "../assets/info.ts"
import { PAPER } from '../typings/types'
import Paper from "./Paper.tsx"

function SelectedPublication () {
  const getPaperList = (opt: string) => {
    if (opt === 'all')
      return paperList
    else {
      return paperList.filter((p: any) => p.category.includes(opt))
    }
  }

  return (
    <div id="selected-publication">
      <Divider />
      <div className="sec-title" style={{ marginBottom: -10 }}>
        <span className="bg-hl">Research Highlight</span>
      </div>
      <div className="paper-list">
        {getPaperList('selected').map((paper: PAPER) => 
          <Paper
            key={paper.title}
            selected={paper}
          />
        )}
      </div>
  </div>
  )
}

export default SelectedPublication