import { useEffect, useState } from "react";

export const Footer = () => {
    const [date, setDate] = useState<number>();
    useEffect(() => {
      setDate(new Date().getFullYear())
    
      return () => {

      }
    }, [])
    
  return (
    <footer className="bg-black text-white font-serif text-3xl">
        <p className="text-right container p-2 mx-auto">&copy; {date}</p>
    </footer>
  )
}
