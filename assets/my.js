$( document ).ready(function() {

    function toPlainText(blocks = []) {
        return blocks
            .map(block => {
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                return block.children.map(child => child.text).join('')
            })
            .join('\n\n')
    }
    headerRender = (header) => {
        $('.content02 .display-1').html(header.name);
        $('.content02 .text1').html((header.bioText[0]+header.bioText[1]));
        setTimeout(function () {
            $('.content02 .i-amphtml-replaced-content').attr('src', header.image);
            $('.content02 .i-amphtml-layout').attr('src', header.image);
        }, 100);
    };

    sectionARender = (sectionA,title)=>{

        $('#features02-4 .container .mbr-row').html('');
        $('#features02-4 .container .mbr-row').append('<div class="mbr-col-lg-12 mbr-pb-5 mbr-col-md-12 mbr-col-sm-12">\n' +
            '            <h2 class="main-title mbr-fonts-style mbr-pb-2 align-center mbr-semibold display-1">'+title+'</h2>\n' +
            '            \n' +
            '            </div>');

        $.each(sectionA, function( index, value ) {
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
                '                        <p class="mbr-text mbr-fonts-style mbr-light align-left display-4">'+value.description+'</p>\n' +
                '                     \n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>');
        });
    };

    sectionBRender = (sectionB) =>{
        $('#content01-b .text-col .display-2').text(sectionB.name);
        $('#content01-b .text-col .text1').text(sectionB.bioText[0].slice(0, 400));
        $('#content01-b .text-col .text2').text(sectionB.bioText[1].slice(0, 100));
        setTimeout(function () {
            $('amp-img#mainImage').attr('src', sectionB.image);
            $('amp-img#mainImage img').attr('src', sectionB.image);
        }, 100);
    };

    sectionCRender = (sectionC) =>{
        $('#content04-c > div.container > div > div > div > h3').text(sectionC.title);
        const plaintext = toPlainText(sectionC.body);
        $('#content04-c > div.container > div > div > div > div.display-7').text(plaintext);
    };


    sectionDRender = (sectionD) =>{
        $('#content03-e .display-5').text(sectionD.name);
        $('#content03-e .display-4').text(sectionD.bioText);
        setTimeout(function () {
            $('#content03-e amp-img').attr('src', sectionD.image);
            $('#content03-e amp-img img').attr('src', sectionD.image);
        }, 100);
    };

    sectionERender = (sectionE)=>{
        $('#features06-5 .title1').text(sectionE[0].title);
        $('#features06-5 .text1').text(sectionE[0].description);

        $('#features06-5 .title2').text(sectionE[1].title);
        $('#features06-5 .text2').text(sectionE[1].description);
    };

    sectionFRender = (sectionF)=> {
        $('#features01-d  .container .mbr-row').html('');
        $('#features01-d .container .mbr-row').append('<div class="mbr-col-lg-12 mbr-pb-5 mbr-col-md-12 mbr-col-sm-12">\n' +
            '            <h2 class="main-title mbr-fonts-style mbr-pb-2 align-center mbr-semibold display-1">'+sectionF.title+'</h2>\n' +
            '            \n' +
            '            </div>');

        $.each(sectionF.category, function (index, value) {
            $('#features01-d .container .mbr-row').append('<div class="card mbr-col-lg-4 mbr-col-md-7 mbr-md-pb mbr-col-sm-12">\n' +
                '                <div class="card-wrapper">\n' +
                '                    <div class="icon-wrapper">\n' +
                '                        \n' +
                '            <div class="icon">\n' +
                '                <span class="iconfont-wrapper">\n' +
                '                    <span class="amp-iconfont mobi-mbri-apple mobi-mbri"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="112" height="112"><path d="' + value.svg + '"></path></svg></span>\n' +
                '                </span>\n' +
                '            </div>\n' +
                '                    </div> \n' +
                '                    <div style="margin-top: 58px;" class="card-box">\n' +
                '                         <h4 class="subtitle mbr-fonts-style mbr-pb-2 align-left mbr-regular display-7">' + value.subTitle + '</h4>\n' +
                '                        <p class="mbr-text mbr-fonts-style mbr-light align-left display-4">' + value.description + '</p>\n' +
                '                     \n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>');
        });
    };

    sectionTestimonialRender = (testimonial) =>{
        $('#testimonials01-a  .card  p.text1').text(testimonial.text);
        $('#testimonials01-a  .card  p.text2').text(testimonial.client);
    };

    const url = 'https://0d1i1j4e.api.sanity.io/v1/data/query/production?query=*[_type == "homePage"]' +
        '{title,"header":header->{name,"image": image.asset->url,\'bioText\': bio[].(children[].text) },' +
        '\'sectionA\':sectionA[]->{title,svg,description,subTitle},' +
        '"sectionB":sectionB->{name,"image": image.asset->url,"bioText": bio[].(children[0].text)},' +
        '"sectionC":sectionC->{title,body,"image": mainImage.asset->url},' +
        '"sectionD":sectionD->{name,"image": image.asset->url,"bioText": bio[].(children[0].text)},' +
        '"sectionE":sectionE[]->{title,svg,description,subTitle},' +
        '"sectionF":sectionF->{title,category[]->{title,subTitle,description,svg}},' +
        '"testimonial":testimonial->{title,text,client},' +
        ' }';
        jQuery.get(url,
        function (data, textStatus, jqXHR) {  // success callback

            headerRender(data.result[0].header);

            sectionARender(data.result[0].sectionA,'Our Core Features');

            sectionBRender(data.result[0].sectionB);

            sectionCRender(data.result[0].sectionC);

            sectionDRender(data.result[0].sectionD);

            sectionERender(data.result[0].sectionE);

            sectionFRender(data.result[0].sectionF);

            sectionTestimonialRender(data.result[0].testimonial);

        });
});
