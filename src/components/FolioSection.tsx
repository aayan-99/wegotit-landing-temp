import TitleHeader from "../components/TitleHeader";

import sakura from '../assets/icons/clients/sakurafresh.svg'
import healthWatch from '../assets/icons/clients/healthwatch.svg'
import firstQa from '../assets/icons/clients/firstQa.svg'
import gunaas from '../assets/icons/clients/gunaas.svg'
import himitsu from '../assets/icons/clients/himitsu.svg'
import andaal from '../assets/icons/clients/andaal.svg'
import netflix from '../assets/icons/clients/netflix.svg'
import inventure from '../assets/icons/clients/inventure.svg'


const FolioSection = () => {

  const clients = [
    {
      id: 0,
      title: 'Sakurafresh',
      icon: sakura,
    },
    {
      id: 1,
      title: 'HealthWatch',
      icon: healthWatch,
    },
    {
      id: 2,
      title: 'firstQA Systems',
      icon: firstQa,
    },
    {
      id: 3,
      title: 'Gunaas Diamond Jewellery',
      icon: gunaas,
    },
    {
      id: 4,
      title: 'Himitsu Labs',
      icon: himitsu,
    },
    {
      id: 5,
      title: 'Andaal Gems & Jewels',
      icon: andaal,
    },
    {
      id: 6,
      title: 'Netflix',
      icon: netflix,
    },
    {
      id: 7,
      title: 'Inventure Academy',
      icon: inventure,
    },
  ];

    return (
        <div className="w-full py-16 pt-3 md:pb-24 md:pt-24">
            <div className="w-full flex flex-col gap-12 lg:gap-0 lg:flex-row lg:items-end text-primary mt-24 mb-32 md:mb-56">
                <div className="w-full">
                    <TitleHeader title="our credentials" textColor="white" />
                    <p className="font-semibold text-lg md:text-xl lg:w-8/12 mt-6">till the maintenance is going on, we would like you to visit our work links listed on the right side</p>
                </div>
                <div className="min-w-48 flex flex-col gap-4 lg:gap-8 text-white">
                    <a href="https://www.behance.net/pallavsinha" target="blank" className="font-normal text-xl underline hover:text-primary cursor-pointer">design folio {`>`}</a>
                    <a href="https://portfolio-aayan.vercel.app/" target="blank" className="font-normal text-xl underline hover:text-primary cursor-pointer">development folio {`>`}</a>
                </div>
            </div>
            <div className="w-full mb-56">
                <TitleHeader title="clients & customers" textColor="white" />
                <p className="font-semibold text-lg md:text-xl lg:w-8/12 mt-6 mb-24 text-primary">these are the brands that we have worked directly or indirectly. some of them have been with us for years, while others are relatively newer</p>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center place-items-center gap-x-10 gap-y-12">
                    {
                        clients?.map((data: { id: number, title: string, icon: string }) => (
                            <img key={data?.id} src={data?.icon} alt="Client Logo" className="w-[200px] aspect-[3/2] object-contain" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FolioSection