import moment from 'moment';

let profile_image_url;
let articles;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Dom loaded and parsed');
    // Insert loading articles icon here?
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alanbanks229')
        .then((res) => res.json())
        .then((data) => {
            profile_image_url = data.feed.image
            articles = data.items.filter(item => item.categories.length > 0)

            articles.map((article, index) => {
                let section = document.getElementsByClassName("post")[0];

                let new_card_container = document.createElement("div");
                new_card_container.className = "card_container";

                let blog_card_header = document.createElement("div");
                blog_card_header.className = "blog_card_header";

                let profile_img = document.createElement("img");
                profile_img.src = profile_image_url;
                blog_card_header.appendChild(profile_img);

                let article_img = document.createElement("img");
                article_img.src = article.thumbnail
                blog_card_header.appendChild(article_img);

                let info_graphics = document.createElement("p");
                let name_bold = document.createElement("b");
                name_bold.innerHTML = "Alan Banks";
                let br = document.createElement("br");
                let post_date = document.createElement("p")
                post_date.innerHTML = updateArticlePubDate(article.pubDate)
                // post_date.innerHTML = article.pubDate;
                blog_card_header.appendChild(info_graphics);
                blog_card_header.appendChild(name_bold);
                blog_card_header.appendChild(br);
                blog_card_header.appendChild(post_date);

                
                let blog_card_title = document.createElement("div");
                blog_card_title.className = "blog_card_title";
                
                let header = document.createElement("header");
                let article_title_h3 = document.createElement("h3");
                article_title_h3.innerHTML = article.title;
                header.appendChild(article_title_h3);
                blog_card_title.appendChild(header);

                new_card_container.appendChild(blog_card_header);
                new_card_container.appendChild(blog_card_title);
                new_card_container.addEventListener("click", (event) => {
                    redirectToSpecificBlog((article))
                })
                new_card_container.appendChild(document.createElement("hr"));
                section.appendChild(new_card_container);
            })

        })
    
})

function updateArticlePubDate(publish_string){

    let new_string = publish_string.split((/,| /), 3)[0]

    let dt = moment(new_string, "YYYY-MM-DD")
    return dt.fromNow()+' | ' + dt.format('LL')
}

function redirectToSpecificBlog(article){
    let url = article.link
    window.open(url, "_blank")
}

//     return (
//         <>
//         <div id="main">
//         { profileImage && article ? 
        
//             <section className="post">
//                 <header className="major">
//                 {document.body.offsetWidth >= 980 ? 
//                 (<h1><a href="https://medium.com/@alanbanks229">Check out my Blogs<br />
//                                                                 on Medium</a></h1>) : 
//                 (<h1><a href="https://medium.com/@alanbanks229">Check out<br/> my
//                                                                 Blogs
// 					                                            <p style={{textAlign: "center"}}>on Medium</p></a></h1>)}
//                 </header>
//             <hr />
//             {article.map((article, index) => (
//                 <>
//                 <div className="card_container" onClick={()=> redirectToSpecificBlog((article))}>
//                     <div class="blog_card_header">
//                         <img src={profileImage}/>
//                     <img src={article.thumbnail}/>
//                         <p><b>Alan Banks</b>
//                         <br/>
//                         {updateArticlePubDate(article.pubDate)}
//                         </p>
//                     </div>

//                     <div className="blog_card_title">
//                         <header>
//                             <h3>{article.title}</h3>
//                         </header>
//                     </div>

//                 </div>
//                 <hr />
//                 </>
//             ))}
//             </section> : null }
//         </div>
//         </>
//     )
// }
