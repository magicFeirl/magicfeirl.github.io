window.onload = load;

function load() {
    div_wrapper = document.querySelector('#wrapper');

    addBox('爬虫', '2020年1月21日14:56:39', '写了个某图片网站爬虫，还未完善，先放链接，详情请点查看更多', 'https://github.com/magicFeirl/Crawler/tree/master/sankakucomplex');
    addBox('就这？','2020-1-14 17:57:32',
        '就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？就这？');

    addBox();addBox();addBox();addBox();addBox();
}

function createEle(tagName) {
    return document.createElement(tagName);
}

function createTextNode(text) {
    return document.createTextNode(text);
}

function addBox(title, time, content, href) {
    div_box = createEle('div');
    div_title = createEle('div');
    div_content = createEle('div');
    div_more = createEle('div')

    div_box.className = "box";
    div_title.className = "title";
    div_content.className = "content";
    div_more.className = "more";

    if(title == undefined){
        title = "无标题";
    }

    if(time == undefined){
        time = "时间未知";
    }

    if(content == undefined){
        content = "文章简介正在施工...";
    }

    if(href == undefined){
        href = "javascript:void(0);";
    }

    more = createEle('a');
    more.href = href;
    more.appendChild(createTextNode('查看详情'));

    div_more.appendChild(more);

    p_title = createEle('p');
    p_title.appendChild(createTextNode(title));

    s_time = createEle('span');
    s_time.appendChild(createTextNode(time));
    s_time.className = "time";

    div_title.appendChild(p_title);
    div_title.appendChild(s_time);

    div_box.appendChild(div_title);

    s_content = createEle('span');
    s_content.appendChild(createTextNode(content));

    div_content.appendChild(s_content);
    div_box.appendChild(div_content);
    div_box.appendChild(div_more);
    div_wrapper.appendChild(div_box);
}

