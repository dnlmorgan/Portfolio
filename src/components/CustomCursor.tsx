import { useEffect, useState } from 'react'

const interactiveSelector = 'a,button,input,textarea,select,summary,[role="button"]'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isActive, setIsActive] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    const down = () => setIsActive(true)
    const up = () => setIsActive(false)

    const handleMouseOver = (event: Event) => {
      const target = event.target as HTMLElement | null
      setIsHover(!!target?.closest(interactiveSelector))
    }

    const handleMouseOut = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (target?.closest(interactiveSelector)) {
        setIsHover(false)
      }
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mousedown', down)
    document.addEventListener('mouseup', up)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', down)
      document.removeEventListener('mouseup', up)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor custom-cursor-dot"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor custom-cursor-ring ${isHover ? 'active' : ''} ${isActive ? 'down' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  )
}
