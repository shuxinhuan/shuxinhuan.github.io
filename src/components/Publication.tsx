import { Divider, Menu, MenuProps } from "antd"
import { useState } from "react"
import { paperList } from "../assets/info.ts"
import { PAPER } from '../typings/types'
import Paper from "./Paper.tsx"

function Publication () {
  const [current, setCurrent] = useState<string>('all')

  const items: MenuProps['items'] = [
    {
      label: 'All',
      key: 'all'
    },
    {
      label: 'Visual Storytelling',
      key: 'story'
    },
    {
      label: 'Visual Analytics',
      key: 'va',
    },
    {
      label: 'Data Transformation',
      key: 'transform',
    },
    {
      label: 'AI4VIS',
      key: 'ai4vis',
    }
  ]

  const onClick = (e: any) => {
    setCurrent(e.key)
  }

  const getPaperList = (opt: string) => {
    if (opt === 'all')
      return paperList
    else {
      return paperList.filter((p: any) => p.category.includes(opt))
    }
  }

  return (
    <div id="publication">
      <Divider />
      <div className="sec-title"><span className="bg-hl">Research</span></div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      
      <div className="paper-list">
        {getPaperList(current).map((paper: PAPER) => 
          <Paper
            key={paper.title}
            selected={paper}
          />
        )}
      </div>
  </div>
  )
}

export default Publication