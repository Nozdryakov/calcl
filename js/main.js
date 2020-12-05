$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function insert(num) {
         document.form.textview.value = document.form.textview.value + num;
      }
      function clean() {
         document.form.textview.value = "";
      }
      function back() {
         var exp = document.form.textview.value;
         document.form.textview.value = exp.substring(0,exp.length-1);
      }
      function equal() {
         var exp = document.form.textview.value;
         if(exp) {
            document.form.textview.value = eval(exp);
         }
      }