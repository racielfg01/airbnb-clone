import { useSearchParams } from "next/navigation"


const ReservationPage = async() => {
   const params = useSearchParams()


  return (
    <>
   <p>HOla su transacion ha sido correcta!</p>
   <p>{params?.toString()}</p>
    </>
  )
}

export default ReservationPage