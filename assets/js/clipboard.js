function copyText() {
                navigator.clipboard.writeText
            ("play.1234.com");
                }
            $(document).ready(function() {
            $('.main1_ipcopier').click(function() {
                var popup = $('<div>', { class: 'main1_popup' })
                .append($('<h3 class="copy_confirm">').text('Copied IP to clipboard'))
                $(this).after(popup);
                setTimeout(function() {
                popup.remove();
                }, 1000);
           });
});