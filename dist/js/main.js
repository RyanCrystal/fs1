const blog_dropdown = document.querySelectorAll('.dropdown_content');
const blog_dropdown_title = document.querySelectorAll('.blog_dropdown_title>a');

// toggle active class to make hover effect
for(let i=0;i<blog_dropdown_title.length;i++){
    blog_dropdown_title[i].addEventListener('mouseover',function(){
        for(let j=0;j<blog_dropdown.length;j++){
            blog_dropdown[j].classList.remove('active');
            blog_dropdown_title[j].classList.remove('active');
         
         }
         blog_dropdown[i].classList.add('active');
         blog_dropdown_title[i].classList.add('active');
    });

}
// function togggleActive(k){
//     for(let i=0;i<blog_dropdown.length;i++){
//        blog_dropdown[i].classList.remove('active');
    
//     }
//     blog_dropdown[k].classList.add('active');
// }
