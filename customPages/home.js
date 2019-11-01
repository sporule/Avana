import React from "react";
import Config from "../../_config";
import TemplateConfig from "../_templateConfig";

const Home = (props) => {
    return (
        <main role="main-home-wrapper" className="container">
            <div className="row">
                <section className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                    <article role="pge-title-content">
                        <header>
                            <h2><span>{Config.site}</span>{Config.subTitle}</h2>
                        </header>
                        <p>{Config.description}</p>
                    </article>
                </section>
                {
                    TemplateConfig.homeItems.map((item, index) => {
                        return (
                            <section key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">
                                <figure className="effect-oscar">
                                    <img src={item.coverImage} alt="" className="img-responsive" />
                                    <figcaption>
                                        <h2>{item.title}<span>{item.titleBold}</span></h2>
                                        <p>{item.subTitle}</p>
                                        <a href={item.link}>了解更多</a>
                                    </figcaption>
                                </figure>
                            </section>
                        )
                    })
                }

            </div>
        </main>
    );
}


export default Home