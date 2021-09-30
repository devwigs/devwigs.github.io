let uc = "<p class='Center'>Under Construction! Please check back later.</p>";

function unavail() {alert("This action is currently unavailable!")}

function makeIcon(node) {
    if (node.gdrv || node.gdoc) {
        if (!node.icon) node.icon = "gdrv";
        if (node.gdoc) {
            node.open = "https://docs.google.com/document/d/" + node.gdoc;
            delete node.gdrv;
        }
        else {
            node.open = "https://drive.google.com/file/d/" + node.gdrv;
            delete node.gdrv;
        }
    }
    let icon = node.icon;
    if (icon == 1) {
        let p = node.parent;
        while (icon == 1) {
            icon = p.icon;
            p = p.parent;
        }
    }
    else if (icon == null) icon = node.menu ? "folder" : "lesson";
    if (icon) {
        let i = makeIcon.urls[icon];
        if (i) icon = i;
        else if (icon.search("/") == -1)
            icon = `${makeIcon.media}${icon}.png`;
        icon = $("<img>").attr({src:icon}).addClass("Icon");
    }
    else icon = "&nbsp;";
    return icon;
}

makeIcon.media = (location.hostname.split(".")[1] == "github" ? "/sci" : "") + "/media/";

makeIcon.urls = {
    "bs": "https://s.brightspace.com/lib/favicon/2.0.0/favicon.ico",
    "ps": "https://powerschool.eips.ca/favicon.ico",
    "ab": "https://www.alberta.ca/build/20201029/favicons/favicon-192.png",
    "gdrv": "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png",
    "gsld": "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico",
    "py": "https://www.python.org/static/favicon.ico",
    "repl": "https://replit.com/public/icons/favicon-196.png",
};

function deep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function video(node) {
    let id = node.vid;
    if (id.charAt(0) == "#") id = "videoseries?list=" + id.slice(1);
    let w = node.width;
    let a = node.aspect;
    if (!w) w = 720;
    if (!a) a = 16 / 9;
    let iframe = $("<iframe>").attr({width:w, frameborder:0, allowfullscreen:1,
        allow:video.allow, src:"https://www.youtube.com/embed/" + id, "data-aspect":a});
    return $("<p>").addClass("Video").html(iframe);
}

function breadCrumbs(node) {
    let p = nodePath(node), e = $("#Crumbs").html("");
    for (let i=0;i<p.length;i++) {
        if (i) e.append(" / ");
        let s = $("<span>").html(p[i].title.replace(/\[.*\]/g, ""));
        s[0].node = p[i];
        s.click(function() {
            let node = this.node;
            if (node == home && node.href) location.href = node.href;
            else drawNode(node);
        });
        e.append(s);
        if (i < p.length-1) s.attr({title:"Open this Folder"})
    }
}

function drawNode(node, init) {
    $("#Links").remove();
    $("#Content").html("");
    breadCrumbs(node);
    let tbl = $("<table>").attr({id:"Links"});
    let menu = node.menu;
    if (menu) for (let i=0;i<menu.length;i++) {
        let mi = menu[i];
        let tr = $("<tr>").appendTo(tbl);
        let img = mi.icon ? "Icon" : "&nbsp;"
        tr.append($("<td>").html(makeIcon(mi))).append($("<td>").html(mi.title));
        tr.click(function() {
            if (mi.unavail) unavail();
            else {
                if (mi.js) eval(mi.js);
                if (mi.open) window.open(mi.open);
                if (mi.menu) drawNode(mi);
                else if (mi.href) location.href = mi.href;
                else drawContent(mi);
            }
        });
    }
    tbl.appendTo($("article"));
    drawContent(node);
    if (node.id) {
        let url = makeURL(true, {}, node.id);
        if (init) history.replaceState({}, "", url);
        else history.pushState({}, "", url);
    }
}

function drawContent(node, e) {
    e = $(e ? e : (node.content ? node.content : "#Content"));
    if (node.ajax) {
        $.ajax({url:node.ajax, success:function(x) {
            node.html = x;
            delete node.ajax;
            drawContent(node, e);
        }});
    }
    if (node.html) {
        e.html(node.html);
        if (window.MathJax) MathJax.Hub.Typeset();
    }
    if (node.vid) {
        e.html(video(node));
        aspect();
    }
    $(window).scrollTop(0);
}

window.onresize = aspect;

function addHome(obj) {
    return {title:"Mr. Mac’s Website", start:0, menu:[obj], href:"../"};
}

function logSitemap() {
    let nodes = sitemap();
    let hrefs = [];
    for (let i=1;i<nodes.length;i++) {
        let href = nodes[i].href;
        let m = nodes[i].map;
        if (href && (m || m == null)) hrefs.push(href);
    }
    console.log(JSON.stringify(hrefs));
}

function onMenuLink(node) {
    if (node.id == null) {
        let p = node.parent;
        if (p) {
            let i = p.menu.indexOf(node);
            node.id = `${p.id}-${i}`;
        }
        else node.id = "~";
    }
}

function getFirstMenu() {
    let node = location.hash;
    if (node) node = node.slice(1);
    else node = qsArgs("id");
    if (node) node = findNode(node, true);
    return node;
}

$(function() {
    let node = getFirstMenu();
    let n = home.start;
    drawNode(node ? node : (n == null ? home : home.menu[n]), true);
    // logSitemap();
})

window.onpopstate = function() {
    drawNode(findNode(location.hash.slice(1)), true);
}
