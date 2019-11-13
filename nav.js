import React from "react";
import Config from "../_config";
import TemplateConfig from "./_templateConfig";

const NavTemplate = () => {

    return (
        <header role="header">
            <div className="container">
                <h1>
                    <a href="/" title={Config.site}><img src={Config.logo} title={Config.site} alt={Config.site} className="logo" /></a>
                </h1>
                <nav role="header-nav" className="navy">
                    <ul>
                        <li>
                            <form role="search" method="get" className="searchBox" action="/posts/">
                                <input type="hidden" placeholder="Search Here" name="pagetype" value="search" onChange={o => { }} readOnly />
                                <input type="text" placeholder="Search Here" name="search" onChange={o => { }} />
                            </form>
                        </li>
                        {
                            Object.keys(TemplateConfig.navs).map((index, key) => {
                                return (
                                    <li className="nav-item" key={index}><a href={TemplateConfig.navs[index]} title={index}>{index}</a></li>
                                );
                            })
                        }

                    </ul>

                </nav>
            </div>
        </header>
    );
}


export default NavTemplate
