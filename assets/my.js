$( document ).ready(function() {
    const url = 'https://0d1i1j4e.api.sanity.io/v1/data/query/production?query=*[_type == "homePage"]{' +
        '"p1":sectionD[]->{' +
        'title},title,' +
        '"header":header->{name,"image": image.asset->url,' + '"bioText": bio[].(children[0].text) },' +
        '"sectionB":sectionB->{name,"image": image.asset->url,' + '"bioText": bio[].(children[0].text) },' +
        '"sectionA":sectionA[]->{title,subTitle,svg,description} }';
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


            $('#features02-4 .container .mbr-row').html('');
            $('#features02-4 .container .mbr-row').append('<div class="mbr-col-lg-12 mbr-pb-5 mbr-col-md-12 mbr-col-sm-12">\n' +
                '            <h2 class="main-title mbr-fonts-style mbr-pb-2 align-center mbr-semibold display-1">Our Core Features</h2>\n' +
                '            \n' +
                '            </div>');

            $.each(data.result[0].sectionA, function( index, value ) {
                console.log( index + ": " + value.title );
                $('#features02-4 .container .mbr-row').append('<div class="card mbr-col-lg-6 mbr-col-md-7 mbr-md-pb mbr-col-sm-12">\n' +
                    '                <div class="card-wrapper">\n' +
                    '                    <div class="icon-wrapper">\n' +
                    '                        \n' +
                    '            <div class="icon">\n' +
                    '                <span class="iconfont-wrapper">\n' +
                    '                    <span class="amp-iconfont mobi-mbri-apple mobi-mbri"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="112" height="112"><path d="'+value.svg+'"></path></svg></span>\n' +
                    '                </span>\n' +
                    '            </div>\n' +
                    '                    </div> \n' +
                    '                    <div class="card-box">\n' +
                    '                        <h3 class="title mbr-fonts-style mbr-pb-2 align-left mbr-semibold display-2">\n' +
                    ''+value.title+'</h3>\n' +
                    '                         <h4 class="subtitle mbr-fonts-style mbr-pb-2 align-left mbr-regular display-7">'+value.subTitle+'</h4>\n' +
                    '                        <p class="mbr-text mbr-fonts-style mbr-light align-left display-4">'+value.description+'</p>\n' +
                    '                     \n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>');
            });


            $('#content01-b .text-col .display-2').text(data.result[0].sectionB.name);
            $('#content01-b .text-col .text1').text(data.result[0].sectionB.bioText[0].slice(0, 400));
            $('#content01-b .text-col .text2').text(data.result[0].sectionB.bioText[1].slice(0, 100));
            setTimeout(function () {
                console.log('run 1 sec image');
                $('amp-img#mainImage').attr('src', data.result[0].sectionB.image);
                $('amp-img#mainImage img').attr('src', data.result[0].sectionB.image);
            }, 100);
            console.log(data.result[0].sectionB);
        });
});
