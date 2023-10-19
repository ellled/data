$(function() {
  const $imgs = $('.main img');
  const $search = $('#filter-search');
  const cache = [];

  $imgs.each(function(){
    cache.push({
      element:this,
      text: this.alt.trim().toLowerCase()
    });
  });

  function filter(){
    const query = this.value.trim().toLowerCase();
    cache.forEach(function(img) {
      let index = 0;
      if (query) {
        index = img.text.indexOf(query);
      }
      img.element.style.display = index === -1 ? 'none' : '';
    });
  }
  $search.on('keyup',filter)
});