
const parser = new DOMParser();
 console.log('parser', parser);

const xmlString = `
<list>
  <student>
    <name lang="en">
     Ivan Ivanov
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
  <name lang="ru">
    Петр Петров
  </name>
  <age>58</age>
  <prof>driver</prof>
  </student>
</list>
  
`;
console.log('xmlString', xmlString);


const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const nameNode =  listNode.querySelector("name");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

 //console.log('listNode', listNode);
 //console.log('nameNode', nameNode);
 //console.log('ageNode', ageNode);
 //console.log('profNode', profNode);


const listAttr = nameNode.getAttribute ('student')
const langAttr = nameNode.getAttribute('lang');
   


const result = {
  list: listAttr,
  lang: langAttr,
  name: nameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
};
console.log('result', result);




