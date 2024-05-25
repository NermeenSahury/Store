
// htmlال الموجود في    الid ل    من خلال  inputs بدي اعمل اول شي استدعاء لكل  
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let Total = document.getElementById('Total');
let category = document.getElementById('category');
let submit = document.getElementById('submit');// اسمو submit   زرالcreat  

let mood = 'creat'; 
let nero;//هون عملت متغير عام مشان استخدمو في  الموود تاع الابديت 

// 1-get total
    //totalعملت الشرط مشان اتاكد انو السعر موجود فيه قيمةو اذا مش موجودة القيمة ما يطلع 
function getTotal()
{
    
   if(price.value != ''){
      let result = (+price.value + +taxes.value + +ads.value) //اشارة + التانية مشان يحول بدل السترينج لرقم 
     - +discount.value;
     Total.innerHTML = result;//حط التوتال في الريزالت
     Total.style.background = '#70db70';// لما تحط البيانات رح تتغير لون التوتال
    
    }else
    {
        Total.innerHTML = '';//اذا البيانات في البرايس مش موجودة فضي التوتال 
        Total.style.background = '#a00d02';//وغير اللون للي كان عليه اول
    }
}




//2-creat product
//بدي احفظ الداتا تاعتي في الاري  
//واهم شي انو المطلوب من الاري انها ما ينحذف الاوبجيكت السابق يعني اذا اضفت تلفون  ايفون 
//وبعدو عملت كرييت واضفت واحد تاني ما ينحذف الاول 

 //اذا كانت اللوكال ستوريج فاضية  رح يعطيني  ىn ull
 //واذا فيها بيانات جيبلي الاري  وخليها تساوي اللوكال ستوريج
 let arr; 
 if(localStorage.product != null){
     arr = JSON.parse(localStorage.product)
 }
else{
    
 arr = [];
}

//وبدي لما اضغط على الزر الكرييت  يعمللي الداتا ويحفظهن جوات الاري 
submit.onclick = function(){
//عمل اوبجيكت مشان اجمع بيانات المنتج الواحد  كلها في اوبجيكت واحد
let newnn ={
    title:title.value.tolowercase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    Total:Total.value,
    title:title.innerHTML,
    count:count.value,
    category:category.value.tolowercase(),


}

//ما تعمل اللوب التانية عند المود الا اذا كانت البيانات صحيحة
if(title.value != ''){

//اذا المود كان كرييت شغل الكلام الي تحت واذا لا 
if(mood === 'creat'){
//الcount عملت هاي اللوب مشان اقدر اضيف الداتا الي بدي ياها باي عدد بدي ياه داخل 
if (newnn.count > 1){
     for(let i =0; i<newnn.count;i++){
        arr.push(newnn);
     }}
     else{
        arr.push(newnn);
     } 
}//else اذا لا  يعني الموود هي الابديت 
else{
    arr[   nero   ] =newnn;
    // بعد ما يعدل زر الابديت يرجع لزر الكرييت ثم ارجع مربع الكاونت
    mood = 'creat';
    submit.innerHTML = 'creat';
    count.style.display ='block';
    
}
cleardata()
}



//3-save local storage
 // حطيت هاي JSON.stringify(arr) 
  // مشان الlocal storage ما بتاخد غير string 
  //ففي هاي الحالة لازم اعملها مشان اقدر اهندلها
 //productهون بدي اخزن الداتا الموجودة في الاري داخل عنصر اسمو 
 localStorage.setItem('product',     JSON.stringify(arr)        ) 

 cleardata()
 showdata()
}






//4-clear inputs
function cleardata(){//اول ما يضغط على الكرييت بفضيلي الداتا كلها 
    //''استدعاء  الفنكشن الي بدي ياهن ثم تفريغها عن طريق 
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    Total.innerHTML='';
    count.value='';
    category.value='';
}




//5-read
function showdata()
{//بدي انادي على هاي الفنكشن جوات زر الكرييت

    let table ='';
    //رح اعمل هاي اللوب مشان اجي بالبيانات الي لفي الاري واحطها في الجدول
    for(let i=0 ; i<arr.length;i++){
      table = '';

      // مشان اخلي الي بعبيهن في الاري يتعبن من البيانات الجديدة الي بضيفها مش من الجدول هاد الي تحت ${i}بحط هيك 
      table += `
      <tr>
      <td>${i}</td> 
      <td>${arr[i].title}</td>
      <td>${arr[i].price}</td>
      <td>${arr[i].taxes}</td>
      <td>${arr[i].ads}</td>
      <td>${arr[i].discount}</td>
      <td>${arr[i].Total}</td>
      <td>${arr[i].category}</td>
      <td><button  onclick="updatedata(  ${i}  )" id="Update"> Update </button></td>
      <td><button  onclick="deletedata(  ${i}  )"    id="Delete"> Delete </button></td>

  </tr>
`;
    }
    document.getElementById('tbody').innerHTML = table;
}
showdata()//تشغيل الداتا دائما بدون ما تنحذف يعني يضل الجدول مبين ع الشاشة





//6-count
//creatكلو جوات ال





//7-delete
function deletedata(i)
{
arr.splice(i,1);
 localStorage.product = JSON.stringify(arr)
 showdata()//بحتاج اشغل هاد الفنكشن في كل مرة بحذف مشان يعمل تحديث
}



//8-update
function updatedata(i){
   title.value = arr[i].title;
   price.value = arr[i].price;
   taxes.value = arr[i].taxes;
   ads.value = arr[i].ads;
   discount.value = arr[i].discount;
   getTotal()
   count.style.display = 'none';
   category.value = arr[i].category;//عملتها مشان لما احدث يعمل ستايل للواجهة ويحذف مربع الكاونت
   submit.innerHTML = 'update';
   mood = 'update';
   nero = i ;//صارت مرئية لكل الفنكشن يعني بقدر استخدمهافي الابديت الي في للمود فوق  iهسا هاي ال 
   scroll({
    top : 0 ,//هاي مشان لما نعمل update يرفع الشاشة لفوق 
    behavior:'smooth', //وهاي مشان يرفه الشاشة بشكل بطيء
   })
}



//9-search
let searchmood='title';

function getsearchmood(id)
{
    //استدعاء اول سيرتش 
    let search = document.getElementById('search')
if (id == 'searchtitle'){  
  searchmood = ' title';  
}else {
    searchmood = ' category'; 
 

}
search.ariaPlaceholder = 'search by '+ searchmood;


search.focus()
search.value = '';
showdata()
}


function searchdata(value)
{
    let table='';
    if(searchmood == 'title')
    {
     
for(let i=0; i<arr.length; i++ ){
    if(arr[i].title.includes(value.tolowercase())){
        table = '';

        // مشان اخلي الي بعبيهن في الاري يتعبن من البيانات الجديدة الي بضيفها مش من الجدول هاد الي تحت ${i}بحط هيك 
        table += `
        <tr>
        <td>${i}</td> 
        <td>${arr[i].title}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].taxes}</td>
        <td>${arr[i].ads}</td>
        <td>${arr[i].discount}</td>
        <td>${arr[i].Total}</td>
        <td>${arr[i].category}</td>
        <td><button  onclick="updatedata(  ${i}  )" id="Update"> Update </button></td>
        <td><button  onclick="deletedata(  ${i}  )"    id="Delete"> Delete </button></td>
  
    </tr>
  `;


    }
}
    }





    else{
        for(let i=0; i<arr.length; i++ ){
            if(arr[i].category.includes(value.tolowercase())){
                table = '';
        
                // مشان اخلي الي بعبيهن في الاري يتعبن من البيانات الجديدة الي بضيفها مش من الجدول هاد الي تحت ${i}بحط هيك 
                table += `
                <tr>
                <td>${i}</td> 
                <td>${arr[i].title}</td>
                <td>${arr[i].price}</td>
                <td>${arr[i].taxes}</td>
                <td>${arr[i].ads}</td>
                <td>${arr[i].discount}</td>
                <td>${arr[i].Total}</td>
                <td>${arr[i].category}</td>
                <td><button  onclick="updatedata(  ${i}  )" id="Update"> Update </button></td>
                <td><button  onclick="deletedata(  ${i}  )"    id="Delete"> Delete </button></td>
          
            </tr>
          `;
        
        
            }
        }
            }
    }
    document.getElementById('tbody').innerHTML = table;




//10-clean data //عملت هاي العملية مشان تكون الداتا الي فايتة ع القاعدة نضيفة يعني ما تكون فاضية او فيها خلل
//كلو فوق في الكرييت 


