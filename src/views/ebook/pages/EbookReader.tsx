import React, { useEffect, useRef, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useStore as useEbookStore } from '@/store/ebook'
import { useObserver } from 'mobx-react'
import Epub, { Book, Rendition } from 'epubjs'

interface ParamTypes {
  fileName: string
}

const baseUrl = 'http://localhost:9900/epub/'

const EbookReader: React.FC = () => {
  const ebookStore = useEbookStore()
  const { fileName } = useParams<ParamTypes>()

  const currentRendition = useRef<Rendition | null>(null)

  useEffect(() => {
    const url = `${baseUrl}${fileName.split('|').join('/')}.epub`
    ebookStore.changeFileName(fileName)
    ebookStore.changeCurrentBook(Epub(url))
    
    currentRendition.current = (ebookStore.currentBook as Book).renderTo('read',{
        width:window.innerWidth,
        height:window.innerHeight,
    })
    currentRendition.current.display()
    
  }, [fileName, ebookStore])

  return useObserver(() => (
    <div className="ebookReader">
      <div id="read"></div>
    </div>
  ))
}

export default memo(EbookReader)
