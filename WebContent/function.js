
function sendMail() {
	var link = 'mailto:hegderaksha5@gmail.com?subject=Message from '
	+ document.getElementById('names').value
	+ '&body=' + document.getElementById('message').value;
//	window.location.href = link;
//	prompt("rtyu", link)
//	document.getElementById('message').value = link;
	return link;
}