(function(d){	const l = d['sl'] = d['sl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Bold:"Krepko",Cancel:"Prekliči","Choose heading":"Izberi naslov","Dropdown toolbar":"","Editor toolbar":"",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"","Heading 4":"","Heading 5":"","Heading 6":"",Italic:"Poševno",Next:"",Paragraph:"Odstavek",Previous:"","Rich Text Editor, %0":"",Save:"Shrani","Show more items":"",Underline:"Podčrtaj"}	);l.getPluralForm=function(n){return (n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));