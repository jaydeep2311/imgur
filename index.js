async function getTags() {
  var images = await fetch(
    "https://api.unsplash.com/photos/?client_id=cVC7-T3E6sq-VXW3u98KqAtPjwnJf-hgS2vLxIoyZEg"
  );
  images = await images.json();
  var data = await fetch(
    "https://api.imgur.com/3/tags/?client_id=42ccc0810705332"
  );
  data = await data.json();
  var maindata = data.data.tags.slice(0, 10);
  console.log(images, maindata);
  showTags(maindata, images);
}
function showTags(maindata, images) {
  var parent = document.querySelector(".tags-section");

  images.forEach((element, i) => {
    var posts = document.createElement("p");
    var box = document.createElement("div");
    var title = document.createElement("p");
    var titlebox = document.createElement("div");
    title.textContent = maindata[i].name.toUpperCase();
    posts.textContent = `${maindata[i].total_items} posts`;
    posts.classList.add("posts");
    title.classList.add("title");
    titlebox.append(title, posts);

    if (i % 2 === 0) {
      titlebox.classList.add("titlebox");
    } else {
      titlebox.classList.add("titlebox2");
    }
    box.classList.add("tags-box");
    box.style.backgroundImage = `url(${element.urls.raw})`;

    box.append(titlebox);
    parent.append(box);
  });
}
getTags();
