import React from "react";
import TemplateConfig from "../_templateConfig";

const Posts = (props) => {
    var prev;
    var next;
    var categories;
    var tags;
    if (props.prev) {
        prev = <span className="prev">
            <a href="#" className="fas fa-arrow-left nav-icon" onClick={props.prev}>
            </a>
        </span>;
    }
    if (props.next) {
        next = <span className="next">
            <a href="#" className="fas fa-arrow-right nav-icon" onClick={props.next}>
            </a>
        </span>;
    }
    if (props.categories.length > 0) {
        categories = props.categories[0];
    }
    var pageType = TemplateConfig.pageTypes[new URLSearchParams(window.location.search).get("pagetype")] || TemplateConfig.pageTypes["all"];
    return (
        <React.Fragment>
            <main role="main-inner-wrapper" className="container">
                <div className="row">

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                        <article role="pge-title-content" className="blog-header">
                            <header>
                                <h2><span>{pageType.title}</span>{pageType.subTitle}</h2>
                            </header>
                            <div className="filterTagContainer">
                                {
                                    pageType.filterTags.map((tag, index) => {
                                        var link = "/posts/categories/" + props.categories[0] + "?pagetype=" + pageType.pageType + "&tags=" + tag;
                                        return (
                                            <a key={index} className="filterTag" href={link}>{tag}</a>
                                        );
                                    })
                                }
                            </div>
                        </article>

                        <ul className="grid-lod effect-2" id="grid">
                            {
                                props.posts.items.filter((o, i) => i % 2 == 0).map((md, index) => {
                                    return (
                                        <li key={index}>
                                            <section className="blog-content">
                                                <a href={md.link}>
                                                    <figure>
                                                        <div className="post-date">
                                                            <span>{new Date(md.metas.date).getDate()}</span> {md.metas.date.substring(0, 7)}
                                                        </div>
                                                        <img src={md.metas.coverimage} alt="" className="img-responsive" />
                                                    </figure>
                                                </a>
                                                <article>
                                                    {md.title}
                                                </article>
                                            </section>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <ul className="grid-lod effect-2" id="grid">
                            {
                                props.posts.items.filter((o, i) => i % 2 != 0).map((md, index) => {
                                    return (
                                        <li key={index}>
                                            <section className="blog-content">
                                                <a href={md.link}>
                                                    <figure>
                                                        <div className="post-date">
                                                            <span>{new Date(md.metas.date).getDate()}</span> {md.metas.date.substring(0, 7)}
                                                        </div>
                                                        <img src={md.metas.coverimage} alt="" className="img-responsive" />
                                                    </figure>
                                                </a>
                                                <article>
                                                    {md.title}
                                                </article>
                                            </section>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>
            <div className="container">
                <div className="col-full">
                    <nav className="pgn">
                        <ul>
                            {prev}
                            {next}
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Posts