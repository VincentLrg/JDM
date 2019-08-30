$(document).ready(function() {
    PDFObject.embed("file/pdf/Mary_Delavigne_Presentation.pdf", "#presMary");
    PDFObject.embed("file/pdf/Gilles_Granger_Presentation", "#presGilles");
    PDFObject.embed("file/pdf/Laurent_Campion_Presentation", "#presLaurent");
    $("#maryDelavigne").iziModal();
    $("#gillesGranger").iziModal();
    $("#laurentCampion").iziModal();
    $("#confMary").iziModal();
    $("#confSimon").iziModal();
    $("#confGilles").iziModal();
    $("#confLaurent").iziModal();
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0
    });
});

lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:true,
    download:false
});