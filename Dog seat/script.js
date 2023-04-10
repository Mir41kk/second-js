var arr = Array();
arr['John'] = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*';
arr['Jonny'] = 'https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*';
arr['Max'] = 'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg';
arr['Dan'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JerSCU4e5WJQahAd13Cr7LdYtrtn5qq7LBBZ9tgINpLzIqI3k3Utyhaj0bGw5ir63vo&usqp=CAU';
arr['Kirill'] = 'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg';
arr['Innokentiy'] = 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg';

for (var key in arr) {
    document.write("<img src='" + arr[key] + "' width='50px>'" + "<br>" + key);
   }