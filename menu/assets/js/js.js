$(function () {
    $('.nav').hover(
        function () {
            $('.back').fadeTo('fast', 0.5);
        },
        function () {
            $('.back').fadeTo('fast', 0);
        }
    )
})

// $(function () {
//     $('.container').click(
//         function () {
//             $('.back').fadeTo('fast', 0);
//         },
//         function () {
//             $('.back').fadeTo('fast', 0.5);
//         }
//     )
// })

function myFunction(x) {
    x.classList.toggle("change");
}