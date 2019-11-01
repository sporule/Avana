import React from "react"

const PostTemplate = (props) => {

    return (
        <main role="main-inner-wrapper" className="container">
            <div className="blog-details">
                <article className="post-details" id="post-details">
                    <header role="bog-header" className="bog-header text-center">
                        <h3>{props.post.metas.date}</h3>
                        <h2> {props.post.title}</h2>
                    </header>
                    <figure>
                        <img src={props.post.metas.coverimage} alt="" className="img-responsive" />
                    </figure>
                    <div className="enter-content">
                        {props.content}
                    </div>
                </article>
                <div className="entry__taxonomies">
                    <div className="entry__cat">
                        <h5>Posted In: </h5>
                        {props.post.metas.categories.map((category, index) => {
                            return (
                                <span className="entry__tax-list" key={index}>
                                    <a href={"/categories/" + category}>{category.toUpperCase()}</a>
                                </span>
                            );
                        })}
                    </div>

                    <div className="entry__tags">
                        <h5>Tags: </h5>
                        <span className="entry__tax-list entry__tax-list--pill">
                            {props.post.metas.tags.map((tag, index) => {
                                return (
                                    <a key={index} href={"/?tags=" + tag}>
                                        {tag}
                                    </a>
                                );
                            })}
                        </span>
                    </div>
                </div>
                {props.disqus}
            </div>
        </main>

    )
}


export default PostTemplate