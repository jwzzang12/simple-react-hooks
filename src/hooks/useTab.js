import "./App.css";
import { useState } from "react";

const contents = [
  { tab: "Section 1", content: "I'm Section 1" },
  { tab: "Section 2", content: "I'm Section 2" },
];
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
    //allTab이 false거나 배열이 아닌 경우 더이상 실행시키지 않음
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="App">
      {contents.map((item, index) => (
        <button onClick={() => changeItem(index)}>{item.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
