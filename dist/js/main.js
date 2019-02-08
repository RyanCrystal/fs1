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

// get all carousel nav
const c_nav = document.querySelector('.carousel_nav');

//begin with 0
const index = move(0);
const autoSwitch =setInterval(index, 3000);

// create setinterval array
const intervals = [];

// push first one into array
intervals.push(autoSwitch)

// move the slide from index n
function move(n){
  let i=n;
    return function(){
       k=i%3+1;
       console.log(k);
        document.getElementById(`carousel_${k}`).checked = true;
        i++;         
    }
    
}

// listen to carousel label click
c_nav.addEventListener('click',function(e){
    // Clear the all setInterval
    intervals.forEach(clearInterval);
    let id;
    // Only get id when label click
        if(e.target.className === 'c_nav')
        {id =e.target.id;
        id=parseInt(id[1]);
      console.log(`id is ${id}`);

    }
   // Create new argument for move function to move from id-1
    const index_id = move(id-1);
    index_id();
// Create index_id once per 3s
    const autoSwitch_id =setInterval(index_id, 3000);
// push into intervals array    
    intervals.push(autoSwitch_id);

    })