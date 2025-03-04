import CoinPrice from '@/components/coin/CoinPrice'
import Image from 'next/image'

interface ProductProps {
  params: {
    id?: string
  }
}


const Currency: React.FC<ProductProps> = ({ params }) => {

  const id = params.id || ''


  return (<div
    className="w-96 border rounded min-h-[500px] place-self-center p-5 flex-col space-y-5 font-medium mt-14"
  >
    <Image
      className="inline-block"
      src={'../currency-icons/' + id + '.svg'}
      alt={''}
      width={30}
      height={30}
    />

    <CoinPrice id={id} />
    
  </div>)
}

export default Currency