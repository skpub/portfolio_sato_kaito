import { useEffect, useState } from "react"

const useScroll = () => {
    const [scrollPosision, setScrollPosition] = useState(0);

    useEffect(() => {
        const PositionUp = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener("scroll", PositionUp)

        return () => window.removeEventListener("scroll", PositionUp)
    }, [])

    return scrollPosision
}

export default useScroll;
