import Head from 'next/head'
import { useEffect, useState } from 'react'
import Draggable, { DraggableData, DraggableEventHandler } from 'react-draggable'; // The default
import { dotRepository, DotRepository } from '../repositories/dotRepository'
import React from 'react';

export default function Home() {
 const [translate, setTranslate] = useState({
    x: 0, y: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await dotRepository.get()
      setTranslate({x: data.x, y: data.y})
    }
    fetchData()
    dotRepository.onSnapshot(translate.x, translate.y, (data) => {
      setTranslate({x: data.x, y: data.y})
    })
  },[])

  const onDrag = async (e, data) => {
    await dotRepository.update(data.lastX, data.lastY)
  }

  return (
    <div>
      <Head>
        <title>Moving dot App</title>
        <meta name="description" content="You can move dot in realtime" />
      </Head>

      <main>
        
      <Draggable
        position={{x: translate.x, y: translate.y}}
        onDrag={(e,data) => onDrag(e, data)}
        >
        <div style={{ fontSize: 100 + "px" }}>
          ●
        </div>
      </Draggable>
      </main>
    </div>
  )
}
