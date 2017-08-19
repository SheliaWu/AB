window.onload = function() {
    $("#add").on("click", function() {
        var imageContainer = `<div class="image-container">
                <input type="text" class="a">
                <input type="text" class="b">
                <img src="imgs/perab.jpg">
            </div>`;
        $('.image-box').eq(0).append(imageContainer);
    });
    $("#draw").on("click", function() {
        var dom = $('.container').eq(0);
        html2canvas(dom, {
            onrendered: function(canvas) {
                var image = canvas.toDataURL("image/jpeg");
                var renderhtml = "<img src='" + image + "'/>";
                $('.container').eq(0).html(renderhtml);
            }
        })
    });
}