function getFilePathFromDialog() {
    document.getElementById('fileBrowser').click();
    document.getElementById('filePath').value = document.getElementById('fileBrowser').value;
    $("#addPhoto").hover(function(){
    	console.log('hover')
    });
}

$(document).ready(function(){
	$("#addPhoto").hover(function(){
		$(this).css({"border-style":"solid", "border-width":"3px", "border-color":"#66CCFF", "cursor":"pointer"});
		$(this).mouseleave(function(){
			$(this).css({"border-style":"solid", "border-width":"3px", "border-color":"white", "cursor":"auto"});
		});
	});
});