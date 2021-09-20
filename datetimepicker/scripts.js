$(document).ready(function(){
  //Se cambia el idioma al español;
  $.fn.datetimepicker.dates['en'] = {
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    meridiem: '',
    today: "Hoy"
  };

  //Se crea la variable para establecer la fecha actual
  var hoy = new Date();
  var dd = hoy.getDate();
  var mm = hoy.getMonth()+1;
  var yyyy = hoy.getFullYear();

  if(dd<10) {
      dd='0'+dd;
  } 

  if(mm<10) {
      mm='0'+mm;
  }

  $("#fechaDesde").datetimepicker({
    format: "dd/mm/yyyy hh:ii",
    autoclose: true,
    todayBtn: true,
    todayHighlight: true,
    pickerPosition: "bottom-left",
    //startDate: hoy,
    startView: 2,
    endDate: hoy,
    forceParse: false
    
  });

  $("#fechaHasta").datetimepicker({
    format: "dd/mm/yyyy hh:ii",
    autoclose: true,
    todayBtn: true,
    todayHighlight: true,
    pickerPosition: "bottom-left",
    //startDate: hoy,
    startView: 2,
    endDate: hoy,
    forceParse: false
    
  });
  
  //Se establece que el calendario comienzo en la fecha actual
  $('#fecha').datetimepicker('setStartDate', hoy);

});