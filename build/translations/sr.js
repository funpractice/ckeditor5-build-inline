(function(d){	const l = d['sr'] = d['sr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1",Bold:"Подебљано","Bulleted List":"Листа са тачкама",Cancel:"Одустани","Choose heading":"Одреди стил",Downloadable:"Могуће преузимање","Dropdown toolbar":"Падајућа трака са алаткама","Edit link":"Исправи линк","Editor toolbar":"Уређивач трака са алаткама",Heading:"Стилови","Heading 1":"Наслов 1","Heading 2":"Наслов 2","Heading 3":"Наслов 3","Heading 4":"Наслов 4","Heading 5":"Наслов 5","Heading 6":"Наслов 6",Italic:"Курзив",Link:"Линк","Link URL":"УРЛ линк",Next:"Следећи","Numbered List":"Листа са бројевима","Open in a new tab":"Отвори у новој картици","Open link in new tab":"Отвори линк у новом прозору",Paragraph:"Пасус",Previous:"Претходни",Redo:"Поново","Rich Text Editor, %0":"Проширени уређивач текста, %0",Save:"Сачувај","Select all":"Означи све.","Show more items":"Прикажи још ставки","This link has no URL":"Линк не садржи УРЛ",Underline:"Подвучен",Undo:"Повлачење",Unlink:"Отклони линк"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));