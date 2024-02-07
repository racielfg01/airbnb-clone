type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async(props:Props) => {
  const searchParams = props.searchParams;


  return (
    <>
   <p>HOla su transacion ha sido cancelada!</p>
   <p>{searchParams?.toString()}</p>
    </>
  )
}

export default Page