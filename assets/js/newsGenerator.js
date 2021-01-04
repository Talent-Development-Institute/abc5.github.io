var newList = {
    "news": [{
            "title": "ABC5-Lab, In-depth information sessions",
            "date": "12 Dec 2020",
            "content": "12 Dec 2020 - In-depth information sessions on Zoom about the ABC5-Lab programme," + '<br>' +
                "competitions, and OGCIO funding, from 16 to 19 Dec 2020." + '<br><br>' +
                "Links for signup will be posted on the website.",
        }

    ]
};


var newsToAppend = document.getElementById('demo');


for (var i = 0; i < newList.news.length; i++) {
    var x =
        '<section id="news-section" style="background-color: #fff;">' +
        '<div class="news-block section-block px-mobile-15">' +
        '<div class="row justify-content-center">' +
        '<div id="" class="col-md-10 col-sm-12">' +
        '<article class="post">' +
        '<div class="post-content">' +
        '<h2 class="post-title text-center">' +
        newList.news[i].title +
        '</h2>' +
        '<div class="post-info text-center">' +
        '<span class="post-date">' +
        newList.news[i].date +
        '</span>' +
        '</div>' +
        // '<img src="assets/images/new/_Laptop G.png" alt="">' +
        '<div class="row justify-content-center">' +
        '<div class="col-md-10 col-sm-12 newContent">' +
        '<p>' +
        newList.news[i].content +
        '</p>' +

        // '<a href="" target="_blank">' +
        // 'Read more on ' +
        // newList.news[i].readMoreOn +
        // '</a>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +

        '</div>' +
        '</div>' +
        '</section>';

    newsToAppend.innerHTML += x;



}
