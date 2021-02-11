$( document ).ready(function() {
    const url = 'https://0d1i1j4e.api.sanity.io/v1/data/query/production?query=*[_type == "homePage"]{\'p1\':sectionD[]->{title},title,"header":header->{name,"image": image.asset->url,\'bioText\': bio[].(children[0].text) },\'sectionA\':sectionA[]->{title,svg,description} }';
    jQuery.get(url,
        function (data, textStatus, jqXHR) {  // success callback
            //alert('status: ' + textStatus + ', data:' + data);

            $('.content02 .display-1').html(data.result[0].header.name);
            $('.content02 .text1').html(data.result[0].header.bioText[0]+"\n\r\n\r"+data.result[0].header.bioText[1].slice(0, 400) );
            $('.content02 .text2').html(data.result[0].header.bioText[2].slice(0, 100) + "...");
            setTimeout(function () {
                console.log('run 1 sec image');
                $('.content02 .i-amphtml-replaced-content').attr('src', data.result[0].header.image);
                $('.content02 .i-amphtml-layout').attr('src', data.result[0].header.image);
            }, 100);


            // (function(){
            //     tap:AMP.setState({ myImageUrl: data.result[0].header.image, myImageAlt: 'Another example image'});
            // })();

            console.log(data.result[0].header.bioText[0]+data.result[0].header.bioText[1]);
        });
});
