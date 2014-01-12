function rewriteiframe(path) {
    var html = "<iframe class=\"preview\" src=\"/preview" + path + ".preview\" frameborder=\"0\" scrolling=\"auto\"></iframe>"
    parent.document.getElementById('mediaview').innerHTML = html
}
