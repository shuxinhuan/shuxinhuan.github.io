import { useState } from "react"
import { paperList } from "../assets/info.ts"
import { PAPER, paperCategory } from '../typings/types'
import Paper from "./Paper.tsx"

interface ITEM {
  label: string;
  key: paperCategory | 'all';
}

function Publication() {
  const [current, setCurrent] = useState<string>('selected')

  const items: ITEM[] = [
    {
      label: 'selected',
      key: 'selected'
    },
    {
      label: 'all',
      key: 'all'
    },
    {
      label: 'storytelling',
      key: 'story'
    },
    {
      label: 'human-ai collaboration',
      key: 'vis+ai',
    },
    {
      label: 'literacy',
      key: 'literacy'
    },
    {
      label: 'data transformation',
      key: 'transform',
    },
    {
      label: 'video analysis',
      key: 'va',
    },
    {
      label: 'data art',
      key: 'art',
    },
    {
      label: 'others',
      key: 'others',
    },
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
      <div style={{ marginTop: '10px' }}>
        {items.map((item: ITEM) => {
          return (
            <button
              key={item.key}
              className={`tag ${item.key === current ? 'tag-active' : ''}`}
              onClick={() => onClick(item)}
            >
              {item.label}
            </button>)
        })}
      </div>

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