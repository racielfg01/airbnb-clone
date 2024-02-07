import { useSearchParams } from "next/navigation"


const ReservationPage = async() => {
   const params = useSearchParams()


  return (
    <>
   <p>HOla su transacion ha sido cancelada!</p>
   <p>{params?.toString()}</p>
    </>
  )
}

export default ReservationPage