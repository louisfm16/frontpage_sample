// Hard-coded fake data for products
var database = `
    [
        {
            "id": 1,
            "order": 1,
            "title": "Product Title 1",
            "price": 500,
            "short_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",
            "list": [
                "Non porta dui euismod nec",
                "Ut tristique ipsum velit",
                "Quisque mollis justo"
            ],
            "src": "dist/images/cereal_b.jpg"
        },
        {
            "id": 2,
            "order": 2,
            "title": "Product Title 2",
            "price": 1900,
            "short_desc": "Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.",
            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",
            "src": "dist/images/flower_b.jpg"
        },
        {
            "id": 3,
            "order": 3,
            "title": "Product Title 3",
            "price": 2730,
            "short_desc": "Cras non metus sed odio tristique imperdiet.",
            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",
            "src": "dist/images/machine_b.jpg"
        },
        {
            "id": 4,
            "order": 4,
            "title": "Product Title 4",
            "price": 731,
            "short_desc": "Pellentesque mattis tellus ut molestie dapibus.",
            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",
            "src": "dist/images/candy_b.jpg"
        }
    ]
    `;

$(document).ready(function() {
    // Parsing hard-coded json data found @ top of .html file
    var db = JSON.parse(database);

    LoadProducts(db);

    // Search for a state
    $('.header__finder--search').on('change paste keyup', function() {
        var search = $(this).val().toLowerCase();
        var results = $('.header__finder--results span');

        FindStates(search, results);
    });

    $('.header__finder--results span').click(function() {
        $('.state-modal').css('display', 'block');
        $('.state-modal--title').empty().append($(this).text());
    });

    $('.state-modal--close').click(function() {
        $('.state-modal').css('display', 'none');
    });

    // Filter through products by price range
    $('.products__filter select').change(function() {
        var min = 0;
        var max = 999999999;
        var products = $('#product__list').find('li');

        switch($(this).val()) {
            case 'all':
                min = 0;
                max = 999999999;
                break;
            case '<500':
                min = 0;
                max = 500;
                break;
            case '500-1000':
                min = 500;
                max = 1000;
                break;
            case '1000-2000':
                min = 1000;
                max = 2000;
                break;
            case '2000>':
                min = 2000;
                max = 999999999;
                break;
        }

        for(var i = 0; i < products.length; i++) {
            if(products[i].id == 'products__item--template') continue;

            var item = FindByID(products[i].id, db);
            
            if(item.price >= min && item.price <= max) {
                $(products[i]).css('display', 'inline-block');
            }
            else  {
                $(products[i]).css('display', 'none');
            }
        }
    });

    // Display more info. of the product clicked
    $('.products__item').click(function() {
        PopulateDetails(this.id, db);
    });

    // Close product info.
    $('.products__details--close').click(function() {
        PopulateDetails(-1);
    });
});

let FindByID = function(id, db) {
    for(var i = 0; i < db.length; i++) {
        if(db[i].id == id) {
            return db[i];
        }
    }
}

let FindStates = function(s, r) {
    for(var i = 0; i < r.length; i++) {
        var currRes = $(r[i]).text().toLowerCase();

        if(s.length > 0 && currRes.includes(s)) {
            $('.header__finder--results').css('display', 'block'); // Workaround for list showing on refresh
            $(r[i]).css('display', 'block');
        }
        else {
            $(r[i]).css('display', 'none');
        }
    }
}

// Populate the products section with db info
let LoadProducts = function(arr) {
    arr.forEach(product => {
        var temp = $('#products__item--template')
            .clone()
            .attr('id', product.id)
            .css('display', 'inline-block');
                    
        var title = temp.find('.products__item--title');
        var price = temp.find('.products__item--price');
        var desc = temp.find('.products__item--short-description');
        var pic = temp.find('.products__item--picture');

        title.append(product.title);
        price.append(`Starting at \$${product.price}`).attr('data-price', product.price);
        desc.append(product.short_desc);
        pic.attr('style', `background-image: url(\"${product.src}\");`);

        $('#product__list').append(temp);
    });

    $('.products__item--template').remove();
}

let PopulateDetails = function(id, db) {
    var temp = $('#products__details--template').css('display', 'flex');

    if(id <= 0) return temp.css('display', 'none');
    
    var product = FindByID(id, db);
    var title = temp.find('.products__details--title');
    var price = temp.find('.products__details--price');
    var desc = temp.find('.products__details--description');
    var list = temp.find('.products__details--list');
    var pic = temp.find('.products__details--picture');

    if(typeof(product.list) != 'undefined') {
        list.empty().css('display', 'block');

        for(var i = 0; i < product.list.length; i++) {
            list.append(`<li class="products__details--item"><span></span> ${product.list[i]}</li>`);
        }
    }
    else {
        list.css('display', 'none');
    }

    title.empty().append(product.title);
    price.empty().append(`Starting at \$${product.price}`).attr('data-price', product.price);
    desc.empty().append(product.desc);
    pic.empty().attr('src', product.src);
}