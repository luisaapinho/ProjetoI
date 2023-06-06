initdata();

function initdata() {
    if (!localStorage.users) {
        const users = [
          {
            username: "luisa",
            email: "luisa@gmail.com",
            password: "luisa123",
            time: 3600,

          },
          {
            username: "nelson",
            email: "nelson@gmail.com",
            password: "nelson123",
            time: 3600,
          },
          {
            username: "simao",
            email: "simao@gmail.com",
            password: "simao123",
            time: 3600,
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
    }
}