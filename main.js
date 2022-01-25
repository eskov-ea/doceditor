const boldBtn = document.querySelector('#bold-btn');
const underlineBtn = document.querySelector('#underline-btn');
const italicBtn = document.querySelector('#italic-btn');
const colorBtn = document.querySelector('#color-btn');

const newDocBtn = document.querySelector('#create_new_doc');
const content = document.querySelector('#content');
const toTextFileBtn = document.querySelector('#to_text_file');
const toPdfFileBtn = document.querySelector('#to_pdf_file');

boldBtn.addEventListener('click', function (){
    document.execCommand('bold');
});
underlineBtn.addEventListener('click', function (){
    document.execCommand('underline');
});
italicBtn.addEventListener('click', function (){
    document.execCommand('italic');
});
colorBtn.addEventListener('input', function (){
    document.execCommand('forecolor', false, colorBtn.value);
});

newDocBtn.addEventListener('click', function (){
    if (window.confirm("Do you want to create a new document?")) {
        content.innerText = '';
    }
});
toTextFileBtn.addEventListener('click', function (){
    const link = document.createElement('a');
    const blob = new Blob([content.innerText]);
    const dataUrl = URL.createObjectURL(blob);
    const fileName = document.querySelector('#filename-input').value;
    link.href = dataUrl;
    link.download = `${fileName}.txt`;
    link.click();
});

let opt = {
    margin:       1,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
toPdfFileBtn.addEventListener('click', function (){
    const fileName = document.querySelector('#filename-input').value;
    html2pdf().set(opt).from(content).save(fileName);
});