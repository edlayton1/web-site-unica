const Header = () => {
    const view =
        `
        
            <div class="menu_bar" id="menu_bar_id">
                <a href="#"  class="bt-menu"><span class="menu_icon"></span>Menú</a>
            </div>
    
            <nav>
                <ul>
                    <li><a href="/"><span class="news_icon"></span>Noticias</a></li>
                    <li><a href="#/notes/"><span class="top_icon"></span>Top 10</a></li>
                    <li class="submenu">
                        <a href="#/projects/"><span class="console_icon"></span>Consolas<span class="caret icon-arrow-down6"></span></a>
                        <ul class="children">
                            <li><a href="#/project2020/">Proyectos 2020 <span class="icon-dot"></span></a></li>
                            <li><a href="#/project2019/">Proyectos 2019 <span class="icon-dot"></span></a></li>
                        </ul>
                    </li>
                    <li><a href="#/social-media/"><span class="social_icon"></span>Redes Sociales</a></li>  
                </ul>
            </nav>
        
        `;  
        return view;
};

export default Header;