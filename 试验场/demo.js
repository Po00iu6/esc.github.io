const axios = require('axios');
const cheerio = require('cheerio');

async function fetchImageUrls(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const imageUrls = [];
        $('img').each((index, element) => {
            const imgUrl = $(element).attr('src');
            if (imgUrl) {
                imageUrls.push(imgUrl);
            }
        });
        return imageUrls;
    } catch (error) {
        console.error('Error fetching image URLs:', error);
    }
}

// 示例调用
fetchImageUrls('https://www.miyoushe.com/ys/article/59166853')
    .then(imageUrls => console.log(imageUrls));