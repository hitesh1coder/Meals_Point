$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(this).toggleClass("fa-times");
    // $(".navbar").toggleClass("nav-toggle");
  });
  $(window).on("scroll load", function () {
    $(".navbar").removeClass("nav-toggle");
    $("#menu-btn").removeClass("fa-times");

    // scroll spy
    $("section").each(function () {
      let top = $(window).srcollTop();
      let offset = $(this).offset().top - 800;
      let height = $(this).height();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`href="#${id}"`).addClass("active");
      }
    });
  });

  $(".menu .list .btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let src = $(this).attr("data-src");
    $("#menu-img").attr("src", src);
  });
});

const toggleBtn = document.querySelector("#menu-btn");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
  nav_header.classList.toggle("activ");
};

toggleBtn.addEventListener("click", () => toggleNavbar());
