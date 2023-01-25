function mostViewSort(data) {
  let initial = 0;
  let secondFirst = Math.floor(data.length / 2) - 1;
  let results = [];
  data.forEach((item, i) => {
    if (i % 2) {
      secondFirst += 1;
      results.push({ ...data[secondFirst], id: secondFirst + 1 });
    } else {
      initial += 1;
      results.push({ ...data[initial], id: initial });
    }
  });
  return results;
}

export { mostViewSort };

export const createSingleNewsSlug = (title) => {
  return `/news/${title?.toLocaleLowerCase().replace(/[^A-Z0-9]/gi, "_")}`;
};

export const openInNewTab = (url) => {
  if(typeof window !== 'undefined') {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
    window.open('https://www.google.com', "_blank", "noopener,noreferrer");
  }
}

export const handleSingleNewsData = (data) => {
  localStorage.setItem("singleNewsData", JSON.stringify(data));
};