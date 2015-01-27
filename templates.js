var templates = {};

templates.product = [
'<article>',
'<h2><%= name %></h2>',
'<img src=<%=imageUrl%>/>',
'<p><%= description %></p>',
'<h3><%= price %></h3>',
'</article>'

].join("");
