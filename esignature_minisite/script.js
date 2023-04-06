$("#name-input").bind("change paste keyup", function() {
  $(".output-name").html($(this).val());
});

$("#title-input").bind("change paste keyup", function() {
  $(".output-title").html($(this).val());
});

$("#phone-input").bind("change paste keyup", function() {
  $(".output-phone").html($(this).val());
});

$(document).ready(function(){
	$("button[name=copy]").click(function() {
		var id = $(this).attr('id');
		var el = document.getElementById(id);
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		document.execCommand('copy');
		$(this).addClass('copied');
    $(this).html('✓ Copied!');
	});
});