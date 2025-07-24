import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollTopButton.css'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <button className="scroll-to-top" onClick={scrollTop}>
      <FaArrowUp />
    </button>
  ) : null
}
