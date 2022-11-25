function changeImageOver() { document.getElementById("img_desenho").src = "https://quatrorodas.abril.com.br/wp-content/uploads/2020/02/porsche-macan-gts-2020-14.jpg?quality=70&strip=info"; } 
function changeImageLeave() { document.getElementById("img_desenho").src = "https://cdn.motor1.com/images/mgl/9MVpX/s1/2020-porsche-macan-gts.jpg"; }



images = ["https://th.bing.com/th/id/OIP.dG0oq6nEb44Y90xLUkH2cQHaE8?pid=ImgDet&rs=1", "https://th.bing.com/th/id/R.5a58e8894a2325aa39747f9b7b9759e3?rik=E6GPnsR7AoNbsg&pid=ImgRaw&r=0", "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/gallery_adv_wide/public/volvo-xc60-1.jpg?itok=l_HYf2lA", "https://th.bing.com/th/id/R.aa6fba19d7a7e139c8fee9056265c884?rik=BxpX%2bQ8NZeCuFg&pid=ImgRaw&r=0"];
var i = 0;
function proximoslide() {
    if (i == 4) { i = 0; } document.getElementById("album").src = images[i];
    i++;  }