$( document ).ready(function() {
    jQuery.get('https://0d1i1j4e.api.sanity.io/v1/data/query/production?query=*[_type == "homePage"]{\'p1\':sectionD[]->{title},title,"header":header->{name,"image": image.asset->url,\'bioText\': bio[0].(children[0].text) }}',  // url
        function (data, textStatus, jqXHR) {  // success callback
            //alert('status: ' + textStatus + ', data:' + data);

            $('.content02 .display-1').html(data.result[0].header.name);
            $('.content02 .text1').html(data.result[0].header.bioText.slice(0, 400) + "...");
            setTimeout(function () {
                console.log('run 1 sec image');
                $('.content02 .i-amphtml-replaced-content').attr('src', data.result[0].header.image);
                $('.content02 .i-amphtml-layout').attr('src', data.result[0].header.image);
            }, 100);


            // (function(){
            //     tap:AMP.setState({ myImageUrl: data.result[0].header.image, myImageAlt: 'Another example image'});
            // })();

            console.log(data.result[0].header.image);
        });
});
