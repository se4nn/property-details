function img1URL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image1')
                .css({
                    'background-image' : 'url(" ' + e.target.result + ' ")',
                    'font-size': '0'
                });
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function img2URL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image2')
                .css({
                    'background-image' : 'url(" ' + e.target.result + ' ")',
                    'font-size': '0'
                });
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function img3URL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image3')
                .css({
                    'background-image' : 'url(" ' + e.target.result + ' ")',
                    'font-size': '0'
                });
        };  

        reader.readAsDataURL(input.files[0]);
    }
}

function img4URL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image4')
                .css({
                    'background-image' : 'url(" ' + e.target.result + ' ")',
                    'font-size': '0'
                });
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function updateAddress(input) {
    var addressText = $('.address').val();
    document.title = addressText;
}

$( document ).ready(function() {
    var address = getUrlVars()["address"].replace(/%20/g, ' ');
    $(".address").val(address);

    var price = getUrlVars()["price"];
    $(".price").val(price);

    var beds = getUrlVars()["beds"];
    $(".beds").val(beds);

    var baths = getUrlVars()["baths"];
    $(".baths").val(baths);

    document.title = address;

});

function myFunction() {
    window.print();
}