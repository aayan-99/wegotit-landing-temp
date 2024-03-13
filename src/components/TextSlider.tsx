import { useEffect, useState } from 'react';
function TextSlider() {

  const words = [
    { id: 0, value: "Apple" },
    { id: 1, value: "Mango" },
    { id: 2, value: "Banana" },
    { id: 3, value: "Banana1" },
    { id: 4, value: "Banana2" },
  ];
  const [wordData, setWordData] = useState(words[0].value)

  const handleClick = (index: any) => {
    console.log(index)
    const wordSlider = words[index].value;
    setWordData(wordSlider)
  }

  return (
    <div className="text_slider_main w-full bg-red my-3 h-9 text-white">
      <div>" {wordData} "</div>
    </div>
  );
}

export default TextSlider;