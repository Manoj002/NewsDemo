const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=11a4b859455f438eb52d53f0059760e3";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}

