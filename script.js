var fname= createlabels("label","for","name","FirstName");
var br1= createlinebreak("br");
var fnameinput= createinput("input","type","name","id","name");
var br2= createlinebreak("br");

var lname= createlabels("label","for","name","LastName");
var br3= createlinebreak("br");
var lnameinput= createinput("input","type","name","id","name");
var br4= createlinebreak("br");

var add= createlabels("label","for","add","Address");
var br5= createlinebreak("br");
var addinput= createinput("input","type","add","id","add");
var br6= createlinebreak("br");

var Pin= createlabels("label","for","Pin","Pincode");
var br7= createlinebreak("br");
var Pininput= createinput("input","type","Pin","id","Pin");
var br8= createlinebreak("br");

var gen= createlabels("label","for","Gen","Gender");
var br9= createlinebreak("br");
var geninput= createinput("input","type","Gen","id","Gen");
var br10= createlinebreak("br");

var foo1= createlabels("label","for","foo1","Food1");
var br11= createlinebreak("br");
var foo1input= createinput("input","type","foo1","id","foo1");
var br12= createlinebreak("br");

var foo2= createlabels("label","for","foo2","Food2");
var br13= createlinebreak("br");
var foo2input= createinput("input","type","foo2","id","foo2");
var br14= createlinebreak("br");

var St= createlabels("label","for","St","State");
var br15= createlinebreak("br");
var Stinput= createinput("input","type","St","id","St");
var br16= createlinebreak("br");

var count= createlabels("label","for","count","Country");
var br17= createlinebreak("br");
var countinput= createinput("input","type","count","id","count");
var br18= createlinebreak("br");


document.body.append(fname,br1,fnameinput,br2,lname,br3,lnameinput,br4,add,br5,addinput,br6,Pin,br7,Pininput,br8,gen,br9,geninput,br10,foo1,br11,foo1input,br12,foo2,br13,foo2input,br14,St,br15,Stinput,br16,count,br17,countinput,br18)

function createlabels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;

}

function createinput(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;  
}

function createlinebreak(tagname){
    var ele=document.createElement(tagname);
        return ele;
}
