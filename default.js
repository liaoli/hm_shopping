
//Convert HTML string to DOM object 
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

//写一个冒泡排序算法
function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}