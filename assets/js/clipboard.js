function copyText() {
    const textToCopy = "hoodliferp.xyz";
    navigator.clipboard.writeText(textToCopy)
        .then(function() {
            // Svsta
            $('.main1_ipcopier').after('<div class="main1_popup"><h3 class="copy_confirm">Copied IP to clipboard</h3></div>');
            setTimeout(function() {
                $('.main1_popup').remove();
            }, 1000);
        })
        .catch(function(error) {
            // Lathos
            console.error('Failed to copy: ', error);
        });
}

$(document).ready(function() {
    $('.main1_ipcopier').click(function() {
        copyText(); // Na treksei to function gt den ginetai callback apla canontas mention to js
    });
});
