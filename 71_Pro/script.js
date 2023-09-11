let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
let images = {
    "HackerRank":"https://hrcdn.net/og/default.jpg",
    "HackerEarth":"https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/07/16/HackerEarthFeatureImage.png",
    "AtCoder" : "https://images.velog.io/images/inwooleeme/post/f01ca242-f9e8-4773-a31f-67bd1d91481a/AtCoder.png",
    "LeetCode" : "https://leetcode.com/static/images/LeetCode_Sharing.png",
    "CodeForces::Gym" : "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
    "CodeForces" : "https://miro.medium.com/v2/resize:fit:1200/1*iPZ00kImJY8oVioV5Dy75A.jpeg",
    "CodeChef" : "https://miro.medium.com/v2/resize:fit:1200/1*00C_a6JMPYeLdFyx0g28aQ.png",
}


response.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest)
    ihtml = ""
    for(item in contest){
        console.log(contest[item])
        let start_date = contest[item].start_time.slice(0,10)
        let end_date = contest[item].end_time.slice(0,10)
        let start_time = contest[item].start_time.slice(11,16)
        let end_time = contest[item].end_time.slice(11,16)
        ihtml += `
        <div class="card" style="width: 18rem;">
        <img src="${images[contest[item].site]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name} </h5>
          <p class="card-text">Conducted By:<br> <b>${contest[item].site} </b> </p>
          <p class="card-text">Start Date: <b> ${start_date}</b> at <b>${start_time}</b></p>
          <p class="card-text">End Date: <b>${end_date}</b> at <b>${end_time}</b> </p>
          <a href="${contest[item].url}" class="btn btn-primary">Lets Go</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML = ihtml

    for(itm in contest){
        let a = []
        a.push(contest[itm].site)
        console.log(a)
    }

})

