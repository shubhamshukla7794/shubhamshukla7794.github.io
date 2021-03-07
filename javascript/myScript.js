var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$('[data-fancybox]').fancybox({
	loop: true,
  buttons: [
    //"zoom",
    //"share",
    //"slideShow",
    "fullScreen",
    //"download",
    //"thumbs",
    "close"
  ]
});

// // $('[data-fancybox]').fancybox({
// // 	loop : true,
// // });
// $(document).ready(function() {
//   $("data-fancybox").fancybox({
//       defaults = {
//           loop: true,
//           gutter: 25,
//           buttons: [
//               "fullScreen",
//               "download",
//               "thumbs",
//               "close"
//           ],
//           idleTime: 10,
//       }
//   });
// });