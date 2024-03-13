import TitleHeader from "./TitleHeader";

const ServicesSection = () => {


  const serviceData = {
    services: [
      {
        id: 0,
        title: 'UI/UX design',
      },
      {
        id: 1,
        title: 'illustrations',
      },
      {
        id: 2,
        title: 'UX audits',
      },
      {
        id: 3,
        title: 'web development',
      },
      {
        id: 4,
        title: 'package design',
      },
      {
        id: 5,
        title: 'design consultation',
      },
      {
        id: 6,
        title: 'brand identity',
      },
      {
        id: 7,
        title: 'book design',
      },
    ],
    webDev: [
      {
        id: 0,
        title: 'e-commerce website',
      },
      {
        id: 1,
        title: 'social media platform',
      },
      {
        id: 2,
        title: 'admin dashboard',
      },
      {
        id: 3,
        title: 'custom features',
      },
      {
        id: 4,
        title: 'integrations',
      },
      {
        id: 5,
        title: 'HRMS',
      },
    ],
};

    return (
        <div className="w-full py-16 md:py-24">
            <TitleHeader title={`services we offer`} textColor="black" />
            <p className="font-semibold text-lg md:text-xl my-8 lg:w-[70%]">below are the services we have currently worked on, some are new and some are our regulars</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-3">
                {
                    serviceData?.services?.map((data) => (
                        <div className="" key={data?.id}>
                            <p className="font-semibold text-lg md:text-xl">{`>`} {data?.title}</p>
                        </div>
                    ))
                }
            </div>
            <p className="font-semibold text-lg md:text-xl my-5 mt-20 md:mt-32 lg:w-[70%]">for our development services, we would like to elaborate further</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-3">
                {
                    serviceData?.webDev?.map((data) => (
                        <div className="w-full" key={data?.id}>
                            <p className="font-semibold text-lg md:text-xl">{`>`} {data?.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesSection