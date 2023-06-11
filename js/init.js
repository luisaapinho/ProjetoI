initdata();

function initdata() {
    if (!localStorage.users) {
        const users = [
          {
            username: "luisa",
            email: "luisa@gmail.com",
            password: "luisa123",
            time: 3010,
            inventory:[],
            hasFinished:true,

          },
          {
            username: "nelson",
            email: "nelson@gmail.com",
            password: "nelson123",
            time: 2920,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "simao",
            email: "simao@gmail.com",
            password: "simao123",
            time: 2345,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "nerdgamer11",
            email: "nerdgamer@gmail.com",
            password: "nerd123",
            time: 2000,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "gamergirl",
            email: "gamergirl@gmail.com",
            password: "girl123",
            time: 1910,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "teste0",
            email: "teste@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:[],
            hasFinished:false,
          },
          {
            username: "teste1",
            email: "teste2@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:['"The"'],
            hasFinished:false,
          },
          {
            username: "teste2",
            email: "teste2@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:['"The"','"real"'],
            hasFinished:false,
          },
          {
            username: "teste3",
            email: "teste2@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:['"The"','"real"','"game"'],
            hasFinished:false,
          },
          {
            username: "teste4",
            email: "teste2@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:['"The"','"real"','"game"','"starts"'],
            hasFinished:false,
          },
          {
            username: "teste5",
            email: "teste2@gmail.com",
            password: "teste123",
            time: 1910,
            inventory:['"The"','"real"','"game"','"starts"','"now"'],
            hasFinished:false,
          },
          {
            username: "mei4657",
            email: "mei@gmail.com",
            password: "mei123",
            time: 1610,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "steca",
            email: "steca@gmail.com",
            password: "steca123",
            time: 1320,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "demonkiller",
            email: "demon@gmail.com",
            password: "demon123",
            time: 1020,
            inventory:[],
            hasFinished:true,
          },
          {
            username: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            time: 1020,
            hasFinished:true,
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
    }
}
//teste