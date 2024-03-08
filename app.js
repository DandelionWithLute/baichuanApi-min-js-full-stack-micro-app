const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

const baseUrl = "http://localhost:8383/";
const BCUrl = "https://api.baichuan-ai.com/v1/chat/completions";

getBtn.addEventListener("click", getInfo);
postBtn.addEventListener("click", postInfo);

async function getInfo(e) {
  e.preventDefault();
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  console.log(res);
  const data = await res.json();
  input.value = data.info;
}

async function sayFEMsg(e) {
  e.preventDefault();
  const res = await fetch("http://localhost:8383/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: input.value,
    }),
  });
  console.log(res);
}

async function postInfo(e) {
  e.preventDefault();
  console.log(input.value);

  const requestDataContent = await input.value;
  console.log(requestDataContent);
//请介绍一下马云是谁
  const requestData = {
    model: "Baichuan2-Turbo",
    messages: [{ role: "user", content: requestDataContent }],
    temperature: 0.3,
    stream: false,
  };

  const res = await fetch(BCUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer sk-08f8a5cc0988ec27eea12f3564a805e7",
    },
    body: JSON.stringify(requestData),
  });
  const data = res.json();
  console.log(data);
}
