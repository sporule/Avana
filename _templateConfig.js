const TemplateConfig = {
    github_link: "https://github.com/sporule/sporule",
    navs:
    {
        "Home": "/"
    },
    pages: ["aboutUs"],
    pageTypes:{
        "all":{
            "title":"所有文章",
            "subTitle":"全部",
            "filterTags":[],
            "pageType":"all"
        },
        "uk-food":{
            "title":"英国美食",
            "subTitle":"带你吃吃吃吃吃",
            "filterTags":["美食","爱丁堡"],
            "pageType":"uk-food"
        }
    },
    homeItems:[
        {
            "title":"英国",
            "titleBold":"美食",
            "subTitle":"吃吃吃吃",
            "coverImage":"https://www.eatsomemore.com/images/IMG_20190414_021808_526.jpg",
            "link":"/posts/categories/英国?pagetype=uk-food",
        },
        {
            "title":"英国",
            "titleBold":"美食",
            "subTitle":"吃吃吃吃",
            "coverImage":"https://www.eatsomemore.com/images/IMG_20190414_021808_526.jpg",
            "link":"/posts/categories/英国?pagetype=uk-food",
        },
    ]
}

module.exports = TemplateConfig;