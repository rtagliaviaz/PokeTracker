(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{45:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(0),n=c.n(a),o=c(16),s=c.n(o),i=(c(45),c(10)),l=c(4),d=c(9),j=c.p+"static/media/pokeball.ed58ec53.png",u=function(){var e=Object(d.c)((function(e){return e.trackerReducer})).darkTheme;return Object(a.useEffect)((function(){localStorage.removeItem("generation"),localStorage.removeItem("startFrom")}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:"text-center",id:"title",style:{color:e?"#c4d2e1":"red"},children:[Object(r.jsx)("img",{className:"pokeballImgW",src:j,alt:"pokeball"}),"Pok\xe9Tracker",Object(r.jsx)("img",{className:"pokeImg",src:"https://pokeres.bastionbot.org/images/pokemon/25.png",alt:"pikachu"})]}),Object(r.jsx)("h2",{className:"text-center",style:{color:e?"#c4d2e1":"black",fontFamily:"Pokemon"},children:"Instructions"}),Object(r.jsx)("p",{style:{color:e?"#c4d2e1":"black"},children:"Select the generation of pokemons that you want to be shown, when you click on the pokemon it will appear as captured, to revert click on the pokemon again."})]})},b=c(39),m=c(22),p=c.n(m),k=c(2),g=c(35),h=c(36),O=c.n(h),x="tracker_loading",f="tracker_error",y="tracker_get_pokemons",v="tracker_catched",N="tracker_increment_counter",A="tracker_decrement_counter",S="tracker_start_from_pokemon_number",w="tracker_pokemon_generation",C="tracker_counter",I="tracker_dark",_=function(e,t){return function(){var c=Object(g.a)(p.a.mark((function c(r,a){var n,o;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r({type:x}),c.prev=1,void 0===e&&void 0===t&&localStorage.getItem("generation")&&(e=parseInt(localStorage.getItem("generation")),t=parseInt(localStorage.getItem("startFrom"))),c.next=5,O.a.get("https://pokeapi.co/api/v2/generation/".concat(e,"/"));case 5:n=c.sent,o=[],e>=2&&e<=7?n.data.pokemon_species.map((function(e,c){return o[c]=Object(k.a)(Object(k.a)({},o[c]),{},{catched:!1,id:c+t,img:"https://db.pokemongohub.net/images/official/detail/".concat(c+t,".png")})})):8===e?n.data.pokemon_species.map((function(e,c){return o[c]=Object(k.a)(Object(k.a)({},o[c]),{},{catched:!1,id:c+t,img:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(c+t,".png")})})):n.data.pokemon_species.map((function(e,c){return o[c]=Object(k.a)(Object(k.a)({},o[c]),{},{catched:!1,id:c+t,img:"https://pokeres.bastionbot.org/images/pokemon/".concat(c+t,".png")})})),parseInt(localStorage.getItem("catchedGen"))===e?r({type:y,payload:JSON.parse(localStorage.getItem("catchedPokemons"))}):(r({type:y,payload:o}),r({type:C,payload:0})),r({type:w,payload:e}),r({type:S,payload:t}),c.next=17;break;case 13:c.prev=13,c.t0=c.catch(1),console.log("error: ",c.t0.message),r({type:f,payload:"Sorry. Page Not Found."});case 17:case"end":return c.stop()}}),c,null,[[1,13]])})));return function(e,t){return c.apply(this,arguments)}}()},E=c.p+"static/media/dayNight.a4716d34.png",F=function(){var e=Object(d.c)((function(e){return e.trackerReducer})),t=e.counter,c=e.darkTheme,a=Object(d.b)();return Object(r.jsx)("nav",{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("div",{className:"nav-title",children:Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"/",className:"navTitle",style:{color:c?"#c4d2e1":"white"},children:"Pok\xe9Tracker"})})}),Object(r.jsxs)("div",{className:"nav-links",children:[Object(r.jsx)("div",{className:"darkMode",children:Object(r.jsx)("img",{onClick:function(){a((function(e,t){if(t().trackerReducer.darkTheme)return e({type:I,payload:!1});e({type:I,payload:!0})}))},src:E,alt:""})}),Object(r.jsxs)("li",{className:"catched",children:["Counter: ",t]}),Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{className:"dropbtn",style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},children:"Generation"}),Object(r.jsxs)("div",{className:"dropdown-content",children:[Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(1,1))},children:"gen 1"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(2,152))},children:"gen 2"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(3,252))},children:"gen 3"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(4,387))},children:"gen 4"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(5,494))},children:"gen 5"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(6,650))},children:"gen 6"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(7,722))},children:"gen 7"}),Object(r.jsx)(i.b,{style:{backgroundColor:c?"#1c2228":"red",color:c?"#c4d2e1":"white"},className:"Link",to:"/tracker",onClick:function(e){return a(_(8,810))},children:"gen 8"})]})]})]})]})})},L=c(38),T=(c(69),function(){return Object(r.jsx)("div",{className:"center centerSpinner",children:Object(r.jsxs)("div",{className:"lds-ellipsis",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})}),R=(c(70),c.p+"static/media/error.833b7ecb.png"),P=function(e){return Object(r.jsxs)("div",{className:"error",children:[Object(r.jsx)("h2",{className:"center",children:e.message}),Object(r.jsx)("img",{className:"errorImg",src:R,alt:"error"})]})},B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAIVBMVEWwsLD4+PjYyPD40Dj4kDigoMDYWDh4eICYSDhIUFAwMDBYuqD0AAAAAXRSTlMAQObYZgAAAIdJREFUeNpjYCAecK1atQDOXuLi4gXjLXFxcXHJgko4m7i4uLhBpJYYCoM4WRgcLheIsrQFYA4YpGHhtLiAVWWAOTNcZk5xS0vrBHNmzgyMTMuYORNs0fKZgpIzZ86sAtuzSDwwcubMoiiIcxTLi5SUVKEuXaqkpKQaBfPC0tDQqAXYPEcEAABe8TFfQf3ksAAAAABJRU5ErkJggg==",D=function(){var e=Object(d.c)((function(e){return e.trackerReducer})),t=e.pokemonEntries,c=e.loader,o=e.error,s=e.counter,i=e.generation,l=e.startFrom,u=e.darkTheme,m=Object(d.b)(),p=Object(a.useState)(!1),g=Object(L.a)(p,2),h=g[0],O=g[1],x=function(){O(!h)},f=function(e){var c=t[e];return Object(r.jsx)("div",{onClick:function(t){return y(e)},className:"pokemon",children:c.catched?Object(r.jsx)(n.a.Fragment,{children:h?Object(r.jsx)("img",{className:"pokeballSprite",src:B,alt:"",style:{outline:u?"1px solid #c4d2e1":"1px solid red"}}):Object(r.jsx)("img",{className:"pokeballImg",src:j,alt:"",style:{outline:u?"1px solid #c4d2e1":"1px solid red"}})}):Object(r.jsx)(n.a.Fragment,{children:h?Object(r.jsx)("img",{className:"pokeSprites",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(c.id,".png"),alt:""}):Object(r.jsx)("img",{className:"pokeImg",src:c.img,alt:""})})},c.id)},y=function(e){m(function(e){return function(t,c){var r=c().trackerReducer,a=r.pokemonEntries,n=r.generation,o=a[e],s=Object(b.a)(a);s[e]=Object(k.a)(Object(k.a)({},a[e]),{},{catched:!o.catched}),localStorage.setItem("catchedPokemons",JSON.stringify(s)),localStorage.setItem("catchedGen",n),t({type:v,payload:s})}}(e)),m(function(e){return function(t,c){c().trackerReducer.pokemonEntries[e].catched&&t({type:N})}}(e)),m(function(e){return function(t,c){c().trackerReducer.pokemonEntries[e].catched||t({type:A})}}(e))};return Object(a.useEffect)((function(){m(_()),localStorage.getItem("catchedPokemons")&&m((function(e,t){for(var c=JSON.parse(localStorage.getItem("catchedPokemons")),r=0,a=0;a<c.length;a++)!0===c[a].catched&&r++;e({type:C,payload:r})}))}),[]),Object(a.useEffect)((function(){localStorage.setItem("generation",i),localStorage.setItem("startFrom",l)})),Object(r.jsx)("div",{children:c?Object(r.jsx)(T,{}):o&&void 0===i?Object(r.jsx)(P,{message:o}):Object(r.jsxs)("div",{className:"pokemonsContainer",children:[Object(r.jsxs)("h1",{className:"catchedTracker",children:[h?Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)("img",{className:"pokeballSpriteCounter",src:B,alt:""}),Object(r.jsx)("p",{}),s]}):Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)("img",{className:"pokeballCounter",src:j,alt:""}),s]})," "]}),Object(r.jsx)("div",{className:"spritesButton",children:Object(r.jsx)("button",{className:"spritesButton",onClick:x,style:{backgroundColor:u?"#1c2228":"red",outline:u?"1px solid #c4d2e1":"none",color:u?"#c4d2e1":"white"},children:h?"Models":"Sprites"})}),Object(r.jsx)("div",{className:"pokemons",children:Object.keys(t).map((function(e){return Object(r.jsx)(n.a.Fragment,{children:f(e)},e)}))})]})})},Y=function(){var e=Object(d.c)((function(e){return e.trackerReducer})).darkTheme;return document.body.style.background=e?"#23292f":"white",Object(r.jsx)("div",{style:{backgroundColor:e?"#23292f":"white"},children:Object(r.jsxs)(i.a,{basename:"/",children:[Object(r.jsx)(F,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(r.jsx)(l.a,{exact:!0,path:"/tracker",component:D})]})]})})},M=c(12),J=c(37),W={loader:!1,error:"",counter:0,pokemonEntries:[],generation:"",startFrom:"",darkTheme:!1},X=Object(M.c)({trackerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(k.a)(Object(k.a)({},e),{},{pokemonEntries:t.payload,loader:!1,error:""});case C:return Object(k.a)(Object(k.a)({},e),{},{counter:t.payload});case S:return Object(k.a)(Object(k.a)({},e),{},{startFrom:t.payload});case w:return Object(k.a)(Object(k.a)({},e),{},{generation:t.payload});case v:return Object(k.a)(Object(k.a)({},e),{},{pokemonEntries:t.payload,loader:!1,error:""});case I:return Object(k.a)(Object(k.a)({},e),{},{darkTheme:t.payload});case N:return Object(k.a)(Object(k.a)({},e),{},{counter:e.counter+1});case A:return Object(k.a)(Object(k.a)({},e),{},{counter:e.counter-1});case x:return Object(k.a)(Object(k.a)({},e),{},{loader:!0});case f:return Object(k.a)(Object(k.a)({},e),{},{loader:!1,error:t.payload});default:return e}}}),Q=Object(M.d)(X,{},Object(M.a)(J.a));s.a.render(Object(r.jsx)(d.a,{store:Q,children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c8772f3e.chunk.js.map