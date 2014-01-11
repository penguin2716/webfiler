function reload(path) {
    var checkbox = document.getElementById('showall');
    checkbox.checked = !(checkbox.checked);
    var currentPath = document.getElementById('currentpath').innerText;
    var prefix;
    if (checkbox.checked == true) {
	prefix = "/listall"
    } else {
	prefix = "/list"
    }
    var html = "<iframe id=\"filelist\" src=\"" + prefix + currentPath + "\" width=\"100%\" height=\"98%\" frameborder=\"0\" scrolling=\"auto\"></iframe>";
    document.getElementById('filelist_frame').innerHTML = html;
}
