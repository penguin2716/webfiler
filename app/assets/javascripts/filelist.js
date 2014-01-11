function rewriteAudioPlayer(aid, title, path) {
    var html = "<h2>" + title + "</h2>\n"
    html += "<audio id=\"audio" + aid + "\" src=\"" + path + "\" preload=none controls autoplay style=\"width: 700px\">\n";
    html += "<p>Your browser doesn't support audio tag.</p>\n";
    html += "</audio>\n";
    html += "<script>\n"
    html += "</script>\n"
    parent.document.getElementById('mediaview').innerHTML = html
}

function rewriteVideoPlayer(vid, title, path) {
    var html = "<h2>" + title + "</h2>\n"
    html += "<video id=\"video" + vid + "\" src=\"" + path + "\" preload=\"none\" controls autoplay width=\"800px\" >\n";
    html += "<p>Your browser doesn't support video tag.</p>\n";
    html += "</video>\n";
    html += "<script>\n"
    html += "</script>\n"
    parent.document.getElementById('mediaview').innerHTML = html
}

function rewriteImage(title, path) {
    var html = "<h2>" + title + "</h2>\n"
    html += "<a href=\"" + path + "\">"
    html += "<img src=\"" + path + "\" width=720px />"
    html += "</a>"
    parent.document.getElementById('mediaview').innerHTML = html
}
