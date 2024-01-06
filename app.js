const orders = [
    {
        id: 1,
        pizza: "Sonkás",
        extra: "nem kér",
        ital: "Pepsi",
        ar: 1500,
        kep: "https://kedvespalacsinta.hu/webshop/products/getPicture/pid:100/type:main/thumb:false/pictid:/virtual.jpg"
    },
    {
        id: 2,
        pizza: "Szalámis",
        extra: "Sajt",
        ital: "Fanta",
        ar: 1800,
        kep: "https://turbopizza.hu/image/catalog/pizza/Szalamis3.jpg"
    },
    {
        id: 3,
        pizza: "Hawaii",
        extra: "Ananász",
        ital: "Sprite",
        ar: 2100,
        kep: "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg"
    },
    {
        id: 4,
        pizza: "Magyaros",
        extra: "Sonka",
        ital: "Pepsi",
        ar: 2200,
        kep: "https://sprintpizzeria.hu/storage/2021/05/Magyaros-3.jpg"
    },
    {
        id: 5,
        pizza: "Carbonara",
        extra: "Nem kér",
        ital: "Miranda",
        ar: 2000,
        kep: "https://img-global.cpcdn.com/recipes/0633906e2b9682d7/680x482cq70/carbonara-pizza-recept-foto.jpg"
    },
    {
        id: 6,
        pizza: "Songoku",
        extra: "Gomba",
        ital: "Pepsi",
        ar: 2400,
        kep: "https://caprigyongyos.hu/wp-content/uploads/2019/09/Songoku_.jpg"
    }
]

window.addEventListener("load", function(){

    let output = "";

    for (var i in orders) {
        output += "<div id='order'>" +
            "<h2>Azonosító: "+ orders[i].id +"<h2>"+
            "<img src='" + orders[i].kep+"'>"+
            "<p>"+ orders[i].pizza +"</p>"+
            "<p>Extra feltét: "+ orders[i].extra +"</p>"+
            "<p>Ital: "+ orders[i].ital +"</p>"+
            "<p>Ár: "+ orders[i].ar +"</p>"
            + "</div>"


    }
this.document.getElementById("doboz").innerHTML = output;

})