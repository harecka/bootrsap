"use strict";

$(document).ready(function() {
    $( "#carousel-example-generic" ).carousel({
        interval: 1000,
        pause: "hover",
//        zatrzymanie karuzeli na ostatnim slajdzie
        wrap: false
    });
});
