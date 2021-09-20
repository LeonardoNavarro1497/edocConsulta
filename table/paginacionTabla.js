var data = [
    // {
    //     accion: "hdjshjds",
    //     estado: "hdjshjds",
    //     noedoc: "hdjshjds",
    //     tipodocumento: "hdjshjds",
    //     razonsocialemisor: "hdjshjds",
    //     razonsocialreceptor: "hdjshjds",
    //     ruc: "hdjshjds",
    //     fechaemision: "hdjshjds",
    //     fecharegistro: "hdjshjds",
    //     cufe: "hdjshjds",
    // },
    // {
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    // },
    // {
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    // },
    // {
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    // },
    // {
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    //     accion: "hdjshjds",
    // },
    // {
    //     name: "scutech-redmine1",
    //     stargazers_count: "6",
    //     forks_count: "3",
    //     description: "Redmine notification tools for chrome extension."
    // }
];

// function nameFormatter(value) {
//     return '<a href="https://github.com/wenzhixin/' + value + '">' + value + '</a>';
// }

// function starsFormatter(value) {
//     return '<i class="glyphicon glyphicon-star"></i> ' + value;
// }

// function forksFormatter(value) {
//     return '<i class="glyphicon glyphicon-cutlery"></i> ' + value;
// }

$(function () {
    $('#tb').bootstrapTable({
        data: data
        
    });
});

