console.log("Hello world 👋🌈");
const data = ["a", "b", "c", "d", "e", "f"];
const group = [
  ["a", "b"],
  ["c", "d", "e", "f"],
];

const itemsToShow = 3;
let currentIndex = 0;

const groupItems = (pageIndex) => {
  const startIndex = pageIndex * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  for (let idx = 0; idx < group.length; idx++) {
    const currentGroup = group[idx];
    const groupEndIndex = currentIndex + currentGroup.length;

    if (currentIndex >= startIndex && currentIndex < endIndex) {
      const shiftCurrentIndex = currentIndex - startIndex;
      const currentEndIndex = Math.min(endIndex, groupEndIndex);
      const currentGroupedItems = currentGroup.slice(
        shiftCurrentIndex,
        currentEndIndex
      );
      console.log("cc = ", currentGroupedItems);
    } else if (currentIndex < startIndex && currentIndex < endIndex) {
      const currentEndIndex = Math.min(endIndex, groupEndIndex);
      const currentGroupedItems = currentGroup.slice(
        startIndex - currentIndex,
        currentEndIndex
      );
      console.log("cc = ", currentGroupedItems);
    }
    currentIndex += currentGroup.length;
  }
};

groupItems(1);
