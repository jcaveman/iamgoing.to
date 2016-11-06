window.APP = window.APP || {};
(function(APP) {
  // https://api.unsplash.com/photos/?client_id=YOUR_APPLICATION_ID
  var unsplashUrl = 'https://api.unsplash.com/photos/?client_id=bfa951008c6418a30addf0bc9b0b95a34ea16c087377ecb77be8fd7d5a457293';
  var clipEl = document.querySelector('.clip-text');
  var revealTimeout;

  // APP.helpers.ajax(unsplashUrl, function() {
  //   debugger;
  // });
  APP.mockdata.photos.shuffle(true);

  var photo = APP.mockdata.photos[0];
  console.log(photo);

  clipEl.style.backgroundImage = photo.urls.regular;
  clipEl.style.backgroundImage = 'url("' + photo.urls.regular + '")';

  document.styleSheets[0].insertRule('.clip-text:after { background-color: ' + photo.color + '}', 0);

  document.querySelector('.wrapper.mask .mask').style.color = photo.color;

  function toggleReveal() {
    let revealClassName = 'reveal';

    clearTimeout(revealTimeout);

    document.body.hasClass(revealClassName) ? document.body.classList.remove(revealClassName): document.body.classList.add(revealClassName);
    document.removeEventListener('click', toggleReveal);
    setTimeout(function() {
      document.querySelector('.clip-text').classList.add('animated');
    }, 500);
  }

  document.addEventListener('click', toggleReveal);
  revealTimeout = setTimeout(function() {
    toggleReveal();
  }, 4000);

  document.querySelector('input.mask').addEventListener('click', function(e) {
    e.preventDefault();
    e.target.focus();
  });

})(window.APP);
