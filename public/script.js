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

  $(".accordion-button").click(function() {
    $(this).toggleClass("active");
    let nextElement = $(this).next();
    if (nextElement.css("height") != "0px") {
      nextElement.css({ height: "0px" });
    } else {
      nextElement.css({ height: nextElement[0].scrollHeight + "px" });
    }
  });

  /* Swap out the static images for videos in the project tiles */
  function swapStaticImages() {
    let element = $(this);
    if (!element.hasClass(".project-wrapper")) {
      element.closest(".project-text").css({ opacity: 1 });
      element = $(this).closest(".project-wrapper");
    }
    element.find(".demo-jpg").toggle();
    element.find(".demo-gif").toggle();
    element.find("a").css("pointer-events", "auto");
  }

  // jQuery event handlers to swap out the static jpg for gifs in projects section
  $(".project-wrapper").hover(swapStaticImages);
  $(".project-links > a").focus(swapStaticImages);

  // Resetting the project-text element opacity to zero when un-focused
  $(".project-links > a").blur(function() {
    let element = $(this);
    element.closest(".project-text").css({ opacity: 0 });
  });

  // flip more-soon card animation
  $(".more-soon").hover(function() {
    $(this).toggleClass("flip-card");
  });

});
