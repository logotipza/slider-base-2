
/* Pinegrow generated Interactions Begin */

if(typeof pgia == 'undefined') {
    console && console.error('Pinegrow Interactions: pgia.js must be included before this script.');
} else {
    pgia.add('$.pgia-slider', null, {
        'interactions': '{"l":[{"name":"GotoNext","trg":"no","a":{"l":[{"t":".pgia-slides-container","l":[{"t":"tween","p":0,"d":0.5,"l":{"scrollTo":{"dest":"next"}}}]}]}},{"name":"AutoPlay","trg":"now","a":{"l":[{"t":"","l":[{"t":"set","p":2,"d":0,"l":{"pgia":{"play":"GotoNext"}}}]},{"t":".pgia-progress-bar","l":[{"t":"set","p":0,"d":0,"l":{"width":0}},{"t":"tween","p":0,"d":2,"l":{"width":"100%"},"e":"Linear.easeNone"}]}]},"rpt":"-1"},{"name":"CloneFirstSlide","trg":"now","a":{"l":[{"t":".pgia-slides-container #gt# div:nth-of-type(1)","l":[{"t":"set","p":0,"d":0,"l":{"pgDom":{"clone":1,"ins":"append"}}}]}]}},{"name":"UserActive","trg":"mouseenter","a":{"l":[{"t":"","l":[{"t":"set","p":0,"d":0,"l":{"pgia":{"pause":"AutoPlay"}}}]}]},"rstr":"true"},{"name":"UserInactive","a":{"l":[{"t":"","l":[{"t":"tween","p":0.5,"d":0.5,"l":{"pgia":{"play":"AutoPlay"}}}]}]},"rstr":"true","trg":"mouseleave"}]}'    
    });
    pgia.add('$.pgia-slides-container', null, {
        'scene': '{"s":"whole","snap":"e","snap_dur":"0.2","snap_ease":"Linear.easeInOut","pag":"p","pag_i":"^.pgia-slider|.pgia-pagination-item","pag_clone":"true","pag_pa":"Current","pag_pd":"-Current","pag_inf":"true"}'    
    });
    pgia.add('$.pgia-slide', null, {
        'interactions': '{"l":[{"name":"HideContent","trg":"no","a":{"l":[{"t":".placeholder","l":[{"t":"tween","p":0,"d":0.1,"l":{"autoAlpha":0}}]}]},"rstr":"true"},{"name":"ShowContent","trg":"no","a":{"l":[{"t":".placeholder","l":[{"t":"tween","p":0.4,"d":0.6,"l":{"autoAlpha":1}}]}]},"rstr":"true"}]}',
        'scene': '{"s":"custom","s_t":"start","s_s":"end","e_t":"end","e_s":"start","l":[{"a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"pgia":{"play":"HideContent"}}},{"t":"tween","p":0.5,"d":9,"l":{"pgia":{"play":"ShowContent"}}},{"t":"tween","p":9.5,"d":0.5,"l":{"pgia":{"play":"HideContent"}}}]}]}}]}'    
    });
    pgia.add('$.pgia-control', null, {
        'interactions': '{"l":[{"name":"ScrollTo","trg":"click","a":{"l":[{"t":"^.pgia-slider|.pgia-slides-container","l":[{"t":"tween","p":0,"d":1,"l":{"scrollTo":{"dest":"${target.data-scroll-to}"}},"e":"Linear.easeInOut"}]}]},"pdef":"true"}]}'    
    });
    pgia.add('$.pgia-pagination-item', null, {
        'interactions': '{"l":[{"name":"Current","trg":"no","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.2,"l":{"scale":1.5}}]}]}},{"name":"ScrollToSlide","trg":"click","a":{"l":[{"t":"^.pgia-slider|.pgia-slides-container","l":[{"t":"tween","p":0,"d":0.5,"l":{"scrollTo":{"dest":"item"}}}]}]},"pdef":"true"}]}'    
    });
    pgia.update();
}

    /* Pinegrow generated Interactions End */
