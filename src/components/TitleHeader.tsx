const TitleHeader = ({ title, textColor }: { title: string, textColor: string }) => {
  return (
    <h1 className={`font-clashdisplaybold text-4xl md:text-5xl text-${textColor}`}>{title}</h1>
  )
}

export default TitleHeader