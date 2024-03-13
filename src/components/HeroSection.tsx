import logo from '../assets/images/logo-main.svg'

const HeroSection = () => {
    return (
        <div className="w-full md:mb-24">
            <div className="w-full flex flex-col lg:flex-row items-start gap-12 xl:gap-[80px] mt-32">
                <div className="w-full max-w-[300px]">
                    <img src={logo} className="w-full" alt="Main Logo" />
                </div>
                <div className="w-full">
                    <h1 className="text-5xl md:text-6xl mb-14 md:leading-[1.5rem]">a design studio</h1>
                    <p className="font-semibold text-lg md:text-xl mb-7">where a bunch of guys aiming is to design and craft the entire world. for us, design is not just visual aesthetics, rather it is the capability to help people make their thoughts become a reality. it’s about finding the right solution for the right person. </p>
                    <p className="font-semibold text-lg md:text-xl my-5">also, our full fledged site is under maintenance. so please bear with us with this current page which covers our credentials.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection