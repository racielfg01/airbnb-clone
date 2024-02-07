
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async(props:Props) => {
  const searchParams = props.searchParams;

  return (
    <div>
   <p>HOla su transacion ha sido correcta!</p>
   <p>{searchParams?.toString()}</p>
    </div>
  )
}

export default Page