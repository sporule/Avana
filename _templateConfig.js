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
    },
    homeItems:[
        {
            "title":"Title",
            "titleBold":"BOLD",
            "subTitle":"SubTitle",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/?pagetype=uk-food",
        },
    ],
    aboutUs:{
        "title":"About Us",
        "subTitle":"SubTitle",
        "description":"Description",
        "content":"This is the content"
    }
}

module.exports = TemplateConfig;