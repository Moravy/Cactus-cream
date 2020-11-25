var folder = "./assets/img/gallery";
var f; 

$.ajax({
    url : folder,
    success: function (data) {
        
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                console.log((i-6)%6 ),
                $(".row").append( "<div class='box'><img src='"+ val  +"'/></div>" );
            } 
        });
    }
});
