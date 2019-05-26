"use strict";var database='\n    [\n        {\n            "id": 1,\n            "order": 1,\n            "title": "Product Title 1",\n            "price": 500,\n            "short_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",\n            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",\n            "list": [\n                "Non porta dui euismod nec",\n                "Ut tristique ipsum velit",\n                "Quisque mollis justo"\n            ],\n            "src": "dist/images/cereal_b.jpg"\n        },\n        {\n            "id": 2,\n            "order": 2,\n            "title": "Product Title 2",\n            "price": 1900,\n            "short_desc": "Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.",\n            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",\n            "src": "dist/images/flower_b.jpg"\n        },\n        {\n            "id": 3,\n            "order": 3,\n            "title": "Product Title 3",\n            "price": 2730,\n            "short_desc": "Cras non metus sed odio tristique imperdiet.",\n            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",\n            "src": "dist/images/machine_b.jpg"\n        },\n        {\n            "id": 4,\n            "order": 4,\n            "title": "Product Title 4",\n            "price": 731,\n            "short_desc": "Pellentesque mattis tellus ut molestie dapibus.",\n            "desc": "Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br><br>Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.",\n            "src": "dist/images/candy_b.jpg"\n        }\n    ]\n    ';$(document).ready(function(){var n=JSON.parse(database);LoadProducts(n),$(".header__finder--search").on("change paste keyup",function(){var e=$(this).val().toLowerCase(),s=$(".header__finder--results span");FindStates(e,s)}),$(".header__finder--results span").click(function(){$(".state-modal").css("display","block"),$(".state-modal--title").empty().append($(this).text())}),$(".state-modal--close").click(function(){$(".state-modal").css("display","none")}),$(".products__filter select").change(function(){var e=0,s=999999999,t=$("#product__list").find("li");switch($(this).val()){case"all":e=0,s=999999999;break;case"<500":e=0,s=500;break;case"500-1000":e=500,s=1e3;break;case"1000-2000":e=1e3,s=2e3;break;case"2000>":e=2e3,s=999999999}for(var i=0;i<t.length;i++)if("products__item--template"!=t[i].id){var a=FindByID(t[i].id,n);a.price>=e&&a.price<=s?$(t[i]).css("display","inline-block"):$(t[i]).css("display","none")}}),$(".products__item").click(function(){PopulateDetails(this.id,n)}),$(".products__details--close").click(function(){PopulateDetails(-1)})});var FindByID=function(e,s){for(var t=0;t<s.length;t++)if(s[t].id==e)return s[t]},FindStates=function(e,s){for(var t=0;t<s.length;t++){var i=$(s[t]).text().toLowerCase();0<e.length&&i.includes(e)?($(".header__finder--results").css("display","block"),$(s[t]).css("display","block")):$(s[t]).css("display","none")}},LoadProducts=function(e){e.forEach(function(e){var s=$("#products__item--template").clone().attr("id",e.id).css("display","inline-block"),t=s.find(".products__item--title"),i=s.find(".products__item--price"),a=s.find(".products__item--short-description"),n=s.find(".products__item--picture");t.append(e.title),i.append("Starting at $".concat(e.price)).attr("data-price",e.price),a.append(e.short_desc),n.attr("style",'background-image: url("'.concat(e.src,'");')),$("#product__list").append(s)}),$(".products__item--template").remove()},PopulateDetails=function(e,s){var t=$("#products__details--template").css("display","flex");if(e<=0)return t.css("display","none");var i=FindByID(e,s),a=t.find(".products__details--title"),n=t.find(".products__details--price"),l=t.find(".products__details--description"),u=t.find(".products__details--list"),r=t.find(".products__details--picture");if(void 0!==i.list){u.empty().css("display","block");for(var o=0;o<i.list.length;o++)u.append('<li class="products__details--item"><span></span> '.concat(i.list[o],"</li>"))}else u.css("display","none");a.empty().append(i.title),n.empty().append("Starting at $".concat(i.price)).attr("data-price",i.price),l.empty().append(i.desc),r.empty().attr("src",i.src)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibWluIiwiSlNPTiIsInBhcnNlIiwiTG9hZFByb2R1Y3RzIiwiZGIiLCJsZW5ndGgiLCJwcm9kdWN0cyIsImlkIiwidmFsIiwidG9Mb3dlckNhc2UiLCJpdGVtIiwiRmluZEJ5SUQiLCJGaW5kU3RhdGVzIiwicHJpY2UiLCJyZXN1bHRzIiwiY2xpY2siLCJjc3MiLCJlbXB0eSIsImFwcGVuZCIsInRoaXMiLCJ0ZXh0IiwiUG9wdWxhdGVEZXRhaWxzIiwiY2hhbmdlIiwibWF4IiwiZmluZCIsImkiLCJjdXJyUmVzIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJ0ZW1wIiwidGl0bGUiLCJkZXNjIiwibGlzdCIsInMiLCJyIiwiaW5jbHVkZXMiLCJhdHRyIiwiYXJyIiwiY2xvbmUiLCJwaWMiLCJjb25jYXQiLCJzaG9ydF9kZXNjIiwic3JjIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFJQSxTQUFRLDQySkE4Q1pDLEVBQUVDLFVBQVVDLE1BQU0sV0ErQ0ZDLElBQUFBLEVBQUdDLEtBQUhDLE1BQUFOLFVBRUFPLGFBQUFDLEdBR1JQLEVBQUEsMkJBQTRCUSxHQUFBQSxxQkFBYSxXQUNyQyxJQUFHQyxFQUFBVCxFQUFZVSxNQUFNQyxNQUFBQyxjQUVqQkMsRUFBT0MsRUFBQUEsaUNBRVhDLFdBQVFDLEVBQUxDLEtBSUNqQixFQUFBQSxpQ0FBOEJrQixNQUE5QixXQUNIbEIsRUFBQSxnQkFBQW1CLElBQUEsVUFBQSxTQUNKbkIsRUFBQSx1QkFBQW9CLFFBQUFDLE9BQUFyQixFQUFBc0IsTUFBQUMsVUFJSHZCLEVBQUEsdUJBQXlCa0IsTUFBQSxXQUN2Qk0sRUFBQUEsZ0JBQXFCZCxJQUFJSCxVQUF6QixVQUtBaUIsRUFBQUEsNEJBQUFDLE9BQUEsV0FESixJQUFBdEIsRUFBQSxFQXhFSnVCLEVBQUEsVUEyQllqQixFQUFXVCxFQUFFLGtCQUFrQjJCLEtBQUssTUFt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TCxxREFBQXNCLE9BQWlFWixFQUFRSSxLQUFLUCxHQUE5RSxlQUlKTyxFQUFLaEIsSUFBSSxVQUFXLFFBR3hCYyxFQUFNYixRQUFRQyxPQUFPVSxFQUFRRSxPQUM3QmpCLEVBQU1JLFFBQVFDLE9BQWQsZ0JBQUFzQixPQUFzQ1osRUFBUWYsUUFBU3VCLEtBQUssYUFBY1IsRUFBUWYsT0FDbEZrQixFQUFLZCxRQUFRQyxPQUFPVSxFQUFRRyxNQUM1QlEsRUFBSXRCLFFBQVFtQixLQUFLLE1BQU9SLEVBQVFjIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYXJkLWNvZGVkIGZha2UgZGF0YSBmb3IgcHJvZHVjdHNcclxudmFyIGRhdGFiYXNlID0gYFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICBcIm9yZGVyXCI6IDEsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcm9kdWN0IFRpdGxlIDFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1MDAsXHJcbiAgICAgICAgICAgIFwic2hvcnRfZGVzY1wiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY1wiOiBcIkNyYXMgYSBhbnRlIGVnZXQgZHVpIGRpZ25pc3NpbSBtb2xlc3RpZSBuZWMgbm9uIGxlY3R1cy4gRG9uZWMgaWQgc2FwaWVuIHRyaXN0aXF1ZSwgaWFjdWxpcyBvZGlvIGEsIGdyYXZpZGEgbGlndWxhLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gUHJhZXNlbnQgbm9uIGxhY3VzIGVsaXQuIFNlZCBjb252YWxsaXMgZXJhdCBzZW0sIGFjIGVnZXN0YXMgaXBzdW0gdGVtcG9yIGluLiBTZWQgY29uc2VjdGV0dXIgZXggYXQgZG9sb3IgdWxsYW1jb3JwZXIgdnVscHV0YXRlLiBVdCB0cmlzdGlxdWUgaXBzdW0gdmVsaXQsIGVnZXQgcHJldGl1bSBpcHN1bSBkaWN0dW0gdmVsLiBBZW5lYW4gdXQgdGVtcHVzIGVsaXQsIG5vbiBmYWNpbGlzaXMgb2Rpby4gVml2YW11cyBoZW5kcmVyaXQgaXBzdW0gdmVsIHJpc3VzIHVsdHJpY2VzLCB1dCBvcm5hcmUgbWV0dXMgb3JuYXJlLiBRdWlzcXVlIHNlbXBlciBhbnRlIGFjIHBlbGxlbnRlc3F1ZSB2ZXN0aWJ1bHVtLiBDcmFzIGEgbWFzc2EgdHVycGlzLiBQZWxsZW50ZXNxdWUgY29uZ3VlIGxlbyB2ZWxpdCwgbm9uIHBvcnRhIGR1aSBldWlzbW9kIG5lYy48YnI+PGJyPk1hdXJpcyBzZWQgZW5pbSByaXN1cy4gUXVpc3F1ZSBtb2xsaXMganVzdG8gcXVpcyBjb21tb2RvIGV1aXNtb2QuIE51bGxhbSBub24gbWFzc2EgaW4gbG9yZW0gY3Vyc3VzIHNhZ2l0dGlzLiBTZWQgbGFvcmVldCBmZWxpcyBtYXVyaXMsIGEgZWxlaWZlbmQgc2FwaWVuIG1vbGVzdGllIGVnZXQuIER1aXMgYXQgdm9sdXRwYXQgZWxpdC4gUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQgdXQgbGliZXJvIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBwZWxsZW50ZXNxdWUgYWMgbGVjdHVzLiBQaGFzZWxsdXMgdmVuZW5hdGlzIHVsdHJpY2VzIGp1c3RvIG5lYyB2ZW5lbmF0aXMuXCIsXHJcbiAgICAgICAgICAgIFwibGlzdFwiOiBbXHJcbiAgICAgICAgICAgICAgICBcIk5vbiBwb3J0YSBkdWkgZXVpc21vZCBuZWNcIixcclxuICAgICAgICAgICAgICAgIFwiVXQgdHJpc3RpcXVlIGlwc3VtIHZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIlF1aXNxdWUgbW9sbGlzIGp1c3RvXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJzcmNcIjogXCJkaXN0L2ltYWdlcy9jZXJlYWxfYi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgIFwib3JkZXJcIjogMixcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2R1Y3QgVGl0bGUgMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDE5MDAsXHJcbiAgICAgICAgICAgIFwic2hvcnRfZGVzY1wiOiBcIkRvbmVjIG9ybmFyZSBtYWduYSBzaXQgYW1ldCBlcmF0IG1vbGVzdGllIHNvbGxpY2l0dWRpbiBhYyB2aXRhZSBsZWN0dXMuXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY1wiOiBcIkNyYXMgYSBhbnRlIGVnZXQgZHVpIGRpZ25pc3NpbSBtb2xlc3RpZSBuZWMgbm9uIGxlY3R1cy4gRG9uZWMgaWQgc2FwaWVuIHRyaXN0aXF1ZSwgaWFjdWxpcyBvZGlvIGEsIGdyYXZpZGEgbGlndWxhLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gUHJhZXNlbnQgbm9uIGxhY3VzIGVsaXQuIFNlZCBjb252YWxsaXMgZXJhdCBzZW0sIGFjIGVnZXN0YXMgaXBzdW0gdGVtcG9yIGluLiBTZWQgY29uc2VjdGV0dXIgZXggYXQgZG9sb3IgdWxsYW1jb3JwZXIgdnVscHV0YXRlLiBVdCB0cmlzdGlxdWUgaXBzdW0gdmVsaXQsIGVnZXQgcHJldGl1bSBpcHN1bSBkaWN0dW0gdmVsLiBBZW5lYW4gdXQgdGVtcHVzIGVsaXQsIG5vbiBmYWNpbGlzaXMgb2Rpby4gVml2YW11cyBoZW5kcmVyaXQgaXBzdW0gdmVsIHJpc3VzIHVsdHJpY2VzLCB1dCBvcm5hcmUgbWV0dXMgb3JuYXJlLiBRdWlzcXVlIHNlbXBlciBhbnRlIGFjIHBlbGxlbnRlc3F1ZSB2ZXN0aWJ1bHVtLiBDcmFzIGEgbWFzc2EgdHVycGlzLiBQZWxsZW50ZXNxdWUgY29uZ3VlIGxlbyB2ZWxpdCwgbm9uIHBvcnRhIGR1aSBldWlzbW9kIG5lYy48YnI+PGJyPk1hdXJpcyBzZWQgZW5pbSByaXN1cy4gUXVpc3F1ZSBtb2xsaXMganVzdG8gcXVpcyBjb21tb2RvIGV1aXNtb2QuIE51bGxhbSBub24gbWFzc2EgaW4gbG9yZW0gY3Vyc3VzIHNhZ2l0dGlzLiBTZWQgbGFvcmVldCBmZWxpcyBtYXVyaXMsIGEgZWxlaWZlbmQgc2FwaWVuIG1vbGVzdGllIGVnZXQuIER1aXMgYXQgdm9sdXRwYXQgZWxpdC4gUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQgdXQgbGliZXJvIGxvYm9ydGlzIHNvbGxpY2l0dWRpbiBwZWxsZW50ZXNxdWUgYWMgbGVjdHVzLiBQaGFzZWxsdXMgdmVuZW5hdGlzIHVsdHJpY2VzIGp1c3RvIG5lYyB2ZW5lbmF0aXMuXCIsXHJcbiAgICAgICAgICAgIFwic3JjXCI6IFwiZGlzdC9pbWFnZXMvZmxvd2VyX2IuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiAzLFxyXG4gICAgICAgICAgICBcIm9yZGVyXCI6IDMsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcm9kdWN0IFRpdGxlIDNcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAyNzMwLFxyXG4gICAgICAgICAgICBcInNob3J0X2Rlc2NcIjogXCJDcmFzIG5vbiBtZXR1cyBzZWQgb2RpbyB0cmlzdGlxdWUgaW1wZXJkaWV0LlwiLFxyXG4gICAgICAgICAgICBcImRlc2NcIjogXCJDcmFzIGEgYW50ZSBlZ2V0IGR1aSBkaWduaXNzaW0gbW9sZXN0aWUgbmVjIG5vbiBsZWN0dXMuIERvbmVjIGlkIHNhcGllbiB0cmlzdGlxdWUsIGlhY3VsaXMgb2RpbyBhLCBncmF2aWRhIGxpZ3VsYS4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIFByYWVzZW50IG5vbiBsYWN1cyBlbGl0LiBTZWQgY29udmFsbGlzIGVyYXQgc2VtLCBhYyBlZ2VzdGFzIGlwc3VtIHRlbXBvciBpbi4gU2VkIGNvbnNlY3RldHVyIGV4IGF0IGRvbG9yIHVsbGFtY29ycGVyIHZ1bHB1dGF0ZS4gVXQgdHJpc3RpcXVlIGlwc3VtIHZlbGl0LCBlZ2V0IHByZXRpdW0gaXBzdW0gZGljdHVtIHZlbC4gQWVuZWFuIHV0IHRlbXB1cyBlbGl0LCBub24gZmFjaWxpc2lzIG9kaW8uIFZpdmFtdXMgaGVuZHJlcml0IGlwc3VtIHZlbCByaXN1cyB1bHRyaWNlcywgdXQgb3JuYXJlIG1ldHVzIG9ybmFyZS4gUXVpc3F1ZSBzZW1wZXIgYW50ZSBhYyBwZWxsZW50ZXNxdWUgdmVzdGlidWx1bS4gQ3JhcyBhIG1hc3NhIHR1cnBpcy4gUGVsbGVudGVzcXVlIGNvbmd1ZSBsZW8gdmVsaXQsIG5vbiBwb3J0YSBkdWkgZXVpc21vZCBuZWMuPGJyPjxicj5NYXVyaXMgc2VkIGVuaW0gcmlzdXMuIFF1aXNxdWUgbW9sbGlzIGp1c3RvIHF1aXMgY29tbW9kbyBldWlzbW9kLiBOdWxsYW0gbm9uIG1hc3NhIGluIGxvcmVtIGN1cnN1cyBzYWdpdHRpcy4gU2VkIGxhb3JlZXQgZmVsaXMgbWF1cmlzLCBhIGVsZWlmZW5kIHNhcGllbiBtb2xlc3RpZSBlZ2V0LiBEdWlzIGF0IHZvbHV0cGF0IGVsaXQuIFBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0IHV0IGxpYmVybyBsb2JvcnRpcyBzb2xsaWNpdHVkaW4gcGVsbGVudGVzcXVlIGFjIGxlY3R1cy4gUGhhc2VsbHVzIHZlbmVuYXRpcyB1bHRyaWNlcyBqdXN0byBuZWMgdmVuZW5hdGlzLlwiLFxyXG4gICAgICAgICAgICBcInNyY1wiOiBcImRpc3QvaW1hZ2VzL21hY2hpbmVfYi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IDQsXHJcbiAgICAgICAgICAgIFwib3JkZXJcIjogNCxcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2R1Y3QgVGl0bGUgNFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDczMSxcclxuICAgICAgICAgICAgXCJzaG9ydF9kZXNjXCI6IFwiUGVsbGVudGVzcXVlIG1hdHRpcyB0ZWxsdXMgdXQgbW9sZXN0aWUgZGFwaWJ1cy5cIixcclxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiQ3JhcyBhIGFudGUgZWdldCBkdWkgZGlnbmlzc2ltIG1vbGVzdGllIG5lYyBub24gbGVjdHVzLiBEb25lYyBpZCBzYXBpZW4gdHJpc3RpcXVlLCBpYWN1bGlzIG9kaW8gYSwgZ3JhdmlkYSBsaWd1bGEuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBQcmFlc2VudCBub24gbGFjdXMgZWxpdC4gU2VkIGNvbnZhbGxpcyBlcmF0IHNlbSwgYWMgZWdlc3RhcyBpcHN1bSB0ZW1wb3IgaW4uIFNlZCBjb25zZWN0ZXR1ciBleCBhdCBkb2xvciB1bGxhbWNvcnBlciB2dWxwdXRhdGUuIFV0IHRyaXN0aXF1ZSBpcHN1bSB2ZWxpdCwgZWdldCBwcmV0aXVtIGlwc3VtIGRpY3R1bSB2ZWwuIEFlbmVhbiB1dCB0ZW1wdXMgZWxpdCwgbm9uIGZhY2lsaXNpcyBvZGlvLiBWaXZhbXVzIGhlbmRyZXJpdCBpcHN1bSB2ZWwgcmlzdXMgdWx0cmljZXMsIHV0IG9ybmFyZSBtZXR1cyBvcm5hcmUuIFF1aXNxdWUgc2VtcGVyIGFudGUgYWMgcGVsbGVudGVzcXVlIHZlc3RpYnVsdW0uIENyYXMgYSBtYXNzYSB0dXJwaXMuIFBlbGxlbnRlc3F1ZSBjb25ndWUgbGVvIHZlbGl0LCBub24gcG9ydGEgZHVpIGV1aXNtb2QgbmVjLjxicj48YnI+TWF1cmlzIHNlZCBlbmltIHJpc3VzLiBRdWlzcXVlIG1vbGxpcyBqdXN0byBxdWlzIGNvbW1vZG8gZXVpc21vZC4gTnVsbGFtIG5vbiBtYXNzYSBpbiBsb3JlbSBjdXJzdXMgc2FnaXR0aXMuIFNlZCBsYW9yZWV0IGZlbGlzIG1hdXJpcywgYSBlbGVpZmVuZCBzYXBpZW4gbW9sZXN0aWUgZWdldC4gRHVpcyBhdCB2b2x1dHBhdCBlbGl0LiBQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdCB1dCBsaWJlcm8gbG9ib3J0aXMgc29sbGljaXR1ZGluIHBlbGxlbnRlc3F1ZSBhYyBsZWN0dXMuIFBoYXNlbGx1cyB2ZW5lbmF0aXMgdWx0cmljZXMganVzdG8gbmVjIHZlbmVuYXRpcy5cIixcclxuICAgICAgICAgICAgXCJzcmNcIjogXCJkaXN0L2ltYWdlcy9jYW5keV9iLmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgYDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUGFyc2luZyBoYXJkLWNvZGVkIGpzb24gZGF0YSBmb3VuZCBAIHRvcCBvZiAuaHRtbCBmaWxlXHJcbiAgICB2YXIgZGIgPSBKU09OLnBhcnNlKGRhdGFiYXNlKTtcclxuXHJcbiAgICBMb2FkUHJvZHVjdHMoZGIpO1xyXG5cclxuICAgIC8vIFNlYXJjaCBmb3IgYSBzdGF0ZVxyXG4gICAgJCgnLmhlYWRlcl9fZmluZGVyLS1zZWFyY2gnKS5vbignY2hhbmdlIHBhc3RlIGtleXVwJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaCA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9ICQoJy5oZWFkZXJfX2ZpbmRlci0tcmVzdWx0cyBzcGFuJyk7XHJcblxyXG4gICAgICAgIEZpbmRTdGF0ZXMoc2VhcmNoLCByZXN1bHRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5oZWFkZXJfX2ZpbmRlci0tcmVzdWx0cyBzcGFuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnN0YXRlLW1vZGFsJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnLnN0YXRlLW1vZGFsLS10aXRsZScpLmVtcHR5KCkuYXBwZW5kKCQodGhpcykudGV4dCgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zdGF0ZS1tb2RhbC0tY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc3RhdGUtbW9kYWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmlsdGVyIHRocm91Z2ggcHJvZHVjdHMgYnkgcHJpY2UgcmFuZ2VcclxuICAgICQoJy5wcm9kdWN0c19fZmlsdGVyIHNlbGVjdCcpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWluID0gMDtcclxuICAgICAgICB2YXIgbWF4ID0gOTk5OTk5OTk5O1xyXG4gICAgICAgIHZhciBwcm9kdWN0cyA9ICQoJyNwcm9kdWN0X19saXN0JykuZmluZCgnbGknKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgICAgICAgY2FzZSAnYWxsJzpcclxuICAgICAgICAgICAgICAgIG1pbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBtYXggPSA5OTk5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPDUwMCc6XHJcbiAgICAgICAgICAgICAgICBtaW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzUwMC0xMDAwJzpcclxuICAgICAgICAgICAgICAgIG1pbiA9IDUwMDtcclxuICAgICAgICAgICAgICAgIG1heCA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMTAwMC0yMDAwJzpcclxuICAgICAgICAgICAgICAgIG1pbiA9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICBtYXggPSAyMDAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzIwMDA+JzpcclxuICAgICAgICAgICAgICAgIG1pbiA9IDIwMDA7XHJcbiAgICAgICAgICAgICAgICBtYXggPSA5OTk5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihwcm9kdWN0c1tpXS5pZCA9PSAncHJvZHVjdHNfX2l0ZW0tLXRlbXBsYXRlJykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IEZpbmRCeUlEKHByb2R1Y3RzW2ldLmlkLCBkYik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpdGVtLnByaWNlID49IG1pbiAmJiBpdGVtLnByaWNlIDw9IG1heCkge1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0c1tpXSkuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgIHtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdHNbaV0pLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IG1vcmUgaW5mby4gb2YgdGhlIHByb2R1Y3QgY2xpY2tlZFxyXG4gICAgJCgnLnByb2R1Y3RzX19pdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUG9wdWxhdGVEZXRhaWxzKHRoaXMuaWQsIGRiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlIHByb2R1Y3QgaW5mby5cclxuICAgICQoJy5wcm9kdWN0c19fZGV0YWlscy0tY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBQb3B1bGF0ZURldGFpbHMoLTEpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubGV0IEZpbmRCeUlEID0gZnVuY3Rpb24oaWQsIGRiKSB7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihkYltpXS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgRmluZFN0YXRlcyA9IGZ1bmN0aW9uKHMsIHIpIHtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJSZXMgPSAkKHJbaV0pLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZihzLmxlbmd0aCA+IDAgJiYgY3VyclJlcy5pbmNsdWRlcyhzKSkge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyX19maW5kZXItLXJlc3VsdHMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTsgLy8gV29ya2Fyb3VuZCBmb3IgbGlzdCBzaG93aW5nIG9uIHJlZnJlc2hcclxuICAgICAgICAgICAgJChyW2ldKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQocltpXSkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHRoZSBwcm9kdWN0cyBzZWN0aW9uIHdpdGggZGIgaW5mb1xyXG5sZXQgTG9hZFByb2R1Y3RzID0gZnVuY3Rpb24oYXJyKSB7XHJcbiAgICBhcnIuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICB2YXIgdGVtcCA9ICQoJyNwcm9kdWN0c19faXRlbS0tdGVtcGxhdGUnKVxyXG4gICAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnLCBwcm9kdWN0LmlkKVxyXG4gICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB0aXRsZSA9IHRlbXAuZmluZCgnLnByb2R1Y3RzX19pdGVtLS10aXRsZScpO1xyXG4gICAgICAgIHZhciBwcmljZSA9IHRlbXAuZmluZCgnLnByb2R1Y3RzX19pdGVtLS1wcmljZScpO1xyXG4gICAgICAgIHZhciBkZXNjID0gdGVtcC5maW5kKCcucHJvZHVjdHNfX2l0ZW0tLXNob3J0LWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgdmFyIHBpYyA9IHRlbXAuZmluZCgnLnByb2R1Y3RzX19pdGVtLS1waWN0dXJlJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLmFwcGVuZChwcm9kdWN0LnRpdGxlKTtcclxuICAgICAgICBwcmljZS5hcHBlbmQoYFN0YXJ0aW5nIGF0IFxcJCR7cHJvZHVjdC5wcmljZX1gKS5hdHRyKCdkYXRhLXByaWNlJywgcHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgZGVzYy5hcHBlbmQocHJvZHVjdC5zaG9ydF9kZXNjKTtcclxuICAgICAgICBwaWMuYXR0cignc3R5bGUnLCBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIke3Byb2R1Y3Quc3JjfVxcXCIpO2ApO1xyXG5cclxuICAgICAgICAkKCcjcHJvZHVjdF9fbGlzdCcpLmFwcGVuZCh0ZW1wKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9kdWN0c19faXRlbS0tdGVtcGxhdGUnKS5yZW1vdmUoKTtcclxufVxyXG5cclxubGV0IFBvcHVsYXRlRGV0YWlscyA9IGZ1bmN0aW9uKGlkLCBkYikge1xyXG4gICAgdmFyIHRlbXAgPSAkKCcjcHJvZHVjdHNfX2RldGFpbHMtLXRlbXBsYXRlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuXHJcbiAgICBpZihpZCA8PSAwKSByZXR1cm4gdGVtcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgXHJcbiAgICB2YXIgcHJvZHVjdCA9IEZpbmRCeUlEKGlkLCBkYik7XHJcbiAgICB2YXIgdGl0bGUgPSB0ZW1wLmZpbmQoJy5wcm9kdWN0c19fZGV0YWlscy0tdGl0bGUnKTtcclxuICAgIHZhciBwcmljZSA9IHRlbXAuZmluZCgnLnByb2R1Y3RzX19kZXRhaWxzLS1wcmljZScpO1xyXG4gICAgdmFyIGRlc2MgPSB0ZW1wLmZpbmQoJy5wcm9kdWN0c19fZGV0YWlscy0tZGVzY3JpcHRpb24nKTtcclxuICAgIHZhciBsaXN0ID0gdGVtcC5maW5kKCcucHJvZHVjdHNfX2RldGFpbHMtLWxpc3QnKTtcclxuICAgIHZhciBwaWMgPSB0ZW1wLmZpbmQoJy5wcm9kdWN0c19fZGV0YWlscy0tcGljdHVyZScpO1xyXG5cclxuICAgIGlmKHR5cGVvZihwcm9kdWN0Lmxpc3QpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbGlzdC5lbXB0eSgpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcHJvZHVjdC5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kKGA8bGkgY2xhc3M9XCJwcm9kdWN0c19fZGV0YWlscy0taXRlbVwiPjxzcGFuPjwvc3Bhbj4gJHtwcm9kdWN0Lmxpc3RbaV19PC9saT5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsaXN0LmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGl0bGUuZW1wdHkoKS5hcHBlbmQocHJvZHVjdC50aXRsZSk7XHJcbiAgICBwcmljZS5lbXB0eSgpLmFwcGVuZChgU3RhcnRpbmcgYXQgXFwkJHtwcm9kdWN0LnByaWNlfWApLmF0dHIoJ2RhdGEtcHJpY2UnLCBwcm9kdWN0LnByaWNlKTtcclxuICAgIGRlc2MuZW1wdHkoKS5hcHBlbmQocHJvZHVjdC5kZXNjKTtcclxuICAgIHBpYy5lbXB0eSgpLmF0dHIoJ3NyYycsIHByb2R1Y3Quc3JjKTtcclxufSJdfQ==