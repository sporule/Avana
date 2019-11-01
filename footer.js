import React from "react";
import Config from "../_config";
import TemplateConfig from "./_templateConfig";

const FooterTemplate = () => {
    return (
        <React.Fragment>
            <footer role="footer">
                <h1>
                    <a href="/" title={Config.site}><img src={Config.logo} title={Config.site} alt={Config.site} className="logo"/></a>
                </h1>
                <nav role="footer-nav">
                    <ul>
                        {
                            Object.keys(TemplateConfig.navs).map((index, key) => {
                                return (
                                    <li key={index}><a href={TemplateConfig.navs[index]} title={index}>{index}</a></li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <p className="copy-right">Copyright (c) 2019 <a href="/">{Config.site}</a>, Template By <a rel="nofollow" target="_blank" href="http://www.designstub.com">DesignStub</a>. Powered By <a href="https://www.sporule.com" target="_blank" rel="nofollow">Sporule</a>. </p>
            </footer>
        </React.Fragment>

    );
}


export default FooterTemplate