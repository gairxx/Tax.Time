if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/taxclock/";
}
document.write('<div id="code4sa-embed-taxclock"></div>');
document.write('<script type="text/javascript" src="' + baseurl + 'pym.js"></script>');
document.write("<script>var pymParent = new pym.Parent('code4sa-embed-taxclock', '" + baseurl + "index.html?show-embed-link=true', {});</script>");
