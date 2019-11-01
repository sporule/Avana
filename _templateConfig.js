const TemplateConfig = {
    github_link: "https://github.com/sporule/sporule",
    navs:
    {
        "主页": "/",
        "关于吃什么":"/",
        "英伦四季高光":"/",
        "英国吃什么":"/",
        "英国玩什么":"/",
        "英国很贵么":"/",
        "英国之外呢":"/",
    },
    pageTypes:{
        "all":{
            "title":"All Posts",
            "subTitle":"SubTitle",
            "filterTags":[],
            "pageType":"all"
        }
    },
    homeItems:[
        {
            "title":"英伦四季",
            "titleBold":"高光",
            "subTitle":"",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/categories/游记?tags=英国&pagetype=uk-food",
        },
        {
            "title":"英国",
            "titleBold":"吃什么",
            "subTitle":"",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/categories/美食?tags=英国&pagetype=uk-food",
        },
        {
            "title":"英国",
            "titleBold":"玩什么",
            "subTitle":"",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/categories/攻略?tags=英国&pagetype=uk-food",
        },
        {
            "title":"英国",
            "titleBold":"很贵么",
            "subTitle":"",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/categories/预定?tags=英国&pagetype=uk-food",
        },
        {
            "title":"英国",
            "titleBold":"之外呢",
            "subTitle":"",
            "coverImage":"https://i.imgur.com/MrRLOC4.png",
            "link":"/posts/categories/游记?extags=英国&pagetype=uk-food",
        }
    ]
}

module.exports = TemplateConfig;