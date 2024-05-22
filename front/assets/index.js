
// 加载动画
const loading = document.createElement('div');
loading.id = 'loading';
loading.innerHTML = `
<div class="loading-container">
	<div class="loading-icon-out">
		<div class="loading-icon-in"></div>
	</div>
</div>`;
document.querySelector('#root').appendChild(loading);

// 主应用
const app = document.createElement('div');
app.id = 'app';
document.querySelector('#root').appendChild(app);

// 获取数据
let myname = 'Sin';
let userlist = [
	{
		name: 'Sin',
		ip: '10.37.202.151'
	},
	{
		name: '某某某某某某某某某某某某某某某某',
		ip: '10.37.202.164'
	},
	{
		name: '某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某',
		ip: '10.37.202.164'
	},
	{
		name: '某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某',
		ip: '10.37.202.164'
	},
	{
		name: '某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某',
		ip: '10.37.202.164'
	}
];

// 显示头部
const header = document.createElement('div');
header.classList.add('header');
header.innerHTML = `
	<h1>
		Hello <i>${myname}</i> !
	</h1>
`;
app.appendChild(header);


// 显示用户列表

const userList = document.createElement('div');
userList.id = 'main';
userList.innerHTML = `
	<div class="user-list">
		${userlist.map(user => `
		<div class="user-item">
			<div class="right">
				<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="ellypsisVerticalIconTitle" stroke="#000" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000">
					<title id="ellypsisVerticalIconTitle">设置</title>
					<path d="M11 12C11 11.4477153 11.4477153 11 12 11 12.5522847 11 13 11.4477153 13 12 13 12.5522847 12.5522847 13 12 13 11.4477153 13 11 12.5522847 11 12zM11 6C11 5.44771525 11.4477153 5 12 5 12.5522847 5 13 5.44771525 13 6 13 6.55228475 12.5522847 7 12 7 11.4477153 7 11 6.55228475 11 6zM11 18C11 17.4477153 11.4477153 17 12 17 12.5522847 17 13 17.4477153 13 18 13 18.5522847 12.5522847 19 12 19 11.4477153 19 11 18.5522847 11 18z"/>
				</svg>
			</div>
			<div class="left">
				<h3 class="name">
					${user.name}
				</h3>
				<p class="ip">
					${user.ip}
				</p>
			</div>
		</div>`).join('')}
	</div>
`;
app.appendChild(userList);




// 隐藏加载动画
setTimeout(() => {
	loading.style.display = 'none';
}, 100);
