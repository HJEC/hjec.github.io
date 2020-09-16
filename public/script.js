$(document).ready(function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  // let target = $("#title-name");
  // target.html(
  //   target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  // );

  // home button scroll-to-top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".home-button").fadeIn();
    } else {
      $(".home-button").fadeOut("slow");
    }
  });

  $(".home-button").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Parallax fade out the intro section on scrollHeight
  function parallaxFade() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $(".intro").css({
          opacity: 1 - ($(window).scrollTop() / $(".intro").height()) * 1.5,
          position: "fixed"
        });
      } else {
        $(".intro").css({ opacity: "1", position: "fixed" });
      }
    });
  }

  parallaxFade();
  $(window).resize(parallaxFade);

  // Trigger accordion-style slide when "about" section buttons are activated

  $("main > button").click(function() {
    $(this).toggleClass("active");
    let p = $(this).next();
    if (p.css("height") != "0px") {
      p.css({ height: "0px" });
    } else {
      p.css({ height: p[0].scrollHeight + "px" });
    }
  });

  /* Swap out the static images for videos in the project tiles */
  function swapStaticImages() {
    $(this)
      .find(".demo-jpg")
      .toggle();
    $(this)
      .find(".demo-gif")
      .toggle();
    $(this)
      .find("a")
      .css("pointer-events", "auto");
  }
  $(".project-wrapper").hover(swapStaticImages());
  $(".project-links").focus(swapStaticImages());

  // flip more-soon card animation
  $(".more-soon").hover(function() {
    $(this).toggleClass("flip-card");
  });

  // fade in contact section

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      // console.log("emoji:", data.emoji);
    });
});
