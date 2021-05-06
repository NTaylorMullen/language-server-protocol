$('#small-nav-dropdown').change(function () {
  window.location = $(this)
    .find('option:selected')
    .val()
})

function onConsentChanged() {
  console.log(WcpConsent.siteConsent.getConsent());

  // Where we would handle non-essential cookies in the future
}

$(function () {
  // Load GA upfront because we classify it as essential cookie
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  // set cookie to expire in 12 x 28 days
  gtag('config', 'UA-62780441-30', { 'anonymize_ip': true, 'cookie_expires': 29030400 })

  window.WcpConsent && WcpConsent.init("en-US", "cookie-banner", function (err, _siteConsent) {
  }, onConsentChanged, WcpConsent.themes.light);

  const cookieManager = document.querySelector('#footer-cookie-link');
  if (WcpConsent.siteConsent.isConsentRequired && cookieManager && cookieManager.parentElement) {
    cookieManager.parentElement.style.display = '';
  }

  // initialize consent
  onConsentChanged();

  var pageHash = window.location.hash;
  if (pageHash) {
    // There's a hash.
    var fragment = pageHash.substr(1);

    openCodeDetails(fragment);
  }

  $('a.anchor').click((event) => {
    if (event.target.name) {
      openCodeDetails(event.target.name);
    }
  });

  var expandClass = 'expandInner';
  var collapseClass = 'collapseInner';
  $('#toggleCodeSections').click(() => {
    var target = $('#toggleCodeSections');

    if ($(target).hasClass(expandClass)) {
      $('details').attr('open', true);
      $(target).removeClass(expandClass);
      $(target).addClass(collapseClass);
    } else if ($(target).hasClass(collapseClass)) {
      $('details').removeAttr('open');
      $(target).removeClass(collapseClass);
      $(target).addClass(expandClass);
    }
  });

  function openCodeDetails(name) {
    $(`details[data-parent='${name}']`).attr('open', true)
  }
})