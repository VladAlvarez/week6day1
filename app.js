const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

// Going through storeItems array and appending them to index.html
for (let i = 0; i < storeItems.length; i++) {
    if (storeItems[i].inStock === true) {
      $("#huge").append('<div class="productContainer">'
        + '<div class="storeItems">$' + storeItems[i].price + "</div>"
        + '<div class="storeItems">' + storeItems[i].name + "</div>"
        + '<div class="storeItems">' + storeItems[i].details + "</div>");
        + '</div>'
    };
  };

// Will toggle each divs class in here
$(".toggleButton").click(function(){
    $("#body").toggleClass("darkBody");
    $(".h1").toggleClass("darkH1");
    $(".toggleButton").toggleClass("darkToggleButton");
    $(".productContainer").toggleClass("darkProductContainer");
});