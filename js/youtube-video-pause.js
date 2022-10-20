$(document).on("click", "#close_vid", function () {
  jQuery("iframe").each(function () {
    jQuery(this)[0].contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  });
});
