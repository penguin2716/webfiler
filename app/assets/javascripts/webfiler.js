function reload(path) {
    var checkbox = document.getElementById('checkboximg');
    var currentPath = document.getElementById('currentpath').innerText;
    var prefix;
    if (checkbox.getAttribute("checked") == "true") {
	prefix = "/list"
    } else {
	prefix = "/listall"
    }
    var html = "<iframe id=\"filelist\" src=\"" + prefix + currentPath + "\" width=\"100%\" height=\"98%\" frameborder=\"0\" scrolling=\"auto\"></iframe>";

    document.getElementById('filelist_frame').innerHTML = html;



    html = "<span onClick=\"reload('" + path + "')\">"
    html += "<table border=\"0\">"
    html += "<tr valign=\"middle\">"
    html += "<td>"
    if (checkbox.getAttribute("checked") == "true") {
	html += "<img class=\"invert\" id=\"checkboximg\" checked=\"false\" src=\"/icon/checkbox-empty.png\" height=\"20\" style=\"vertical-align:middle;\" />"
    } else {
	html += "<img class=\"invert\" id=\"checkboximg\" checked=\"true\" src=\"/icon/checkbox.png\" height=\"20\" style=\"vertical-align:middle;\" />"
    }
    html += "</td>"
    html += "<td>"
    html += "Show hidden files"
    html += "</td>"
    html += "</tr>"
    html += "</table>"
    html += "</span>"


    document.getElementById('checkbox').innerHTML = html;
}
