const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const HTML = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return HTML;
};



function post () {
  const submit = document.getElementById('submit');
  submit.addEventListener('click',(e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const list = document.getElementById('list');
      const formText = document.getElementById('form-text');
      list.insertAdjacentHTML("beforebegin", buildHTML(XHR));
      formText.value = ""
    };
  });
};

window.addEventListener('load', post);