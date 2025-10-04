const TemplateConfig = {
    github_link: "https://github.com/sporule/sporule",
    navs:
    {
        "Home": "/"
    },
    pageTypes:{
        "all":{
            "title":"All Posts",
            "subTitle":"SubTitle",
            "filterTags":[],
            "pageType":"all"
        },
         "search": {
            "title": "Search",
            "subTitle": "",
            "description":"",
            "tags":[""],
            "extags":[],
            "filterTags": [],
            "pageType": "search"
        },

    },
    homeItems:[
        {
            "title":"This is the site title",
            "titleBold":"BOLD",
            "subTitle":"This is the sub title",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/?pagetype=uk-food",
        },
    ],
    aboutUs:{
        "title":"This is About Us",
        "subTitle":"SubTitle",
        "description":"Description",
        "content":"This is the content"
    }
}

module.exports = TemplateConfig;
