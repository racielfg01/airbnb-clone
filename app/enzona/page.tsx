
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async(props:Props) => {
  const searchParams = props.searchParams;

  return (
    <div>
   <p>HOla su transacion ha sido correcta!</p>
   <p>{JSON.stringify(searchParams)}</p>
    </div>
  )
}

export default Page