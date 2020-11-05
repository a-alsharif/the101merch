(function(){
        new InstagramFeed({
            'username': 'the101merch',
            'container': document.getElementById("instagram-feed1"),
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 12,
            'items_per_row': 3,
            'margin': .5,
            'lazy_load': true,
            'on_error': console.error
        });
    })();