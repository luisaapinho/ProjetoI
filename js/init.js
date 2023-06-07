initdata();

function initdata() {
    if (!localStorage.users) {
        const users = [
          {
            username: "luisa",
            email: "luisa@gmail.com",
            password: "luisa123",
            time: 2800,
            hasFinished:true,

          },
          {
            username: "nelson",
            email: "nelson@gmail.com",
            password: "nelson123",
            time: 2920,
            hasFinished:true,
          },
          {
            username: "simao",
            email: "simao@gmail.com",
            password: "simao123",
            time: 2345,
            hasFinished:true,
          },
          {
            username: "nerdgamer11",
            email: "nerdgamer@gmail.com",
            password: "nerd123",
            time: 2000,
            hasFinished:true,
          },
          {
            username: "gamergirl",
            email: "gamergirl@gmail.com",
            password: "girl123",
            time: 1910,
            hasFinished:true,
          },
          {
            username: "teste",
            email: "teste@gmail.com",
            password: "teste123",
            time: 1910,
            hasFinished:false,
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
    }
}