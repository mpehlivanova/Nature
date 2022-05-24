export const validateText = (title) => {
  if (typeof title === "string" && title.trim().length) {
    return title;
  } else {
    return "no title";
  }
};

export const keyGenerator = (length) => {
  const characters = "0123456789";
  const result = Array.from({ length })
    .map(
      (e, i) =>
        characters[Math.floor(Math.random() * characters.length)] +
        (!((i + 1) % 4) ? "-" : "")
    )
    .join("")
    .slice(0, -1);
  return result;
};

export const validationUrl = (url) => {
  let imageTypes = ["jpg", "jpeg", "tiff", "png", "gif", "bmp"];
  let uriArr = url.split(".");
  let uri = uriArr[uriArr.length - 1];

  if (typeof url === "string" && imageTypes.includes(uri)) {
    return url;
  } else {
    return "err url, ";
  }
};

export const createServer = () => {
  let arr = [];
  let textLorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quasi aliquam ab atque et, quis quos accusantium ducimus voluptatum qui minus sint quod, ea vitae illum ex est adipisci culpa!";

  for (let i = 1; i < 8; i++) {
    let obj = {
      id: i,
      url:
        "https://pngimage.net/wp-content/uploads/2018/06/nature-png-hd-" +
        i +
        ".png",
      title: textLorem.slice(i, 10 + i),
      excerpt: textLorem.slice(i, textLorem.length - 1),
      category: textLorem.slice(
        textLorem.length - 30 + i,
        textLorem.length - 10 - 1
      ),
    };
    arr.push(obj);
  }
  return arr;
};

