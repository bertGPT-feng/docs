import{_ as o,a as d,b as h,c,d as p,e as l}from"./x6-be6707e5.js";import{_ as g,r as s,o as m,c as u,a as n,b as a,e,f as r}from"./app-5cd96f8a.js";const x={},v=r('<h1 id="迅雷云盘" tabindex="-1"><a class="header-anchor" href="#迅雷云盘" aria-hidden="true">#</a> 迅雷云盘</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>小白请直接使用 Thunder 不要使用 ThunderExpert</p><p>ThunderExpert 主要提供更自由的设置,实现更多登录方式</p></div><h2 id="迅雷" tabindex="-1"><a class="header-anchor" href="#迅雷" aria-hidden="true">#</a> <strong>迅雷</strong></h2><h3 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名" aria-hidden="true">#</a> <strong>用户名</strong></h3><p>即用于登陆的手机号,邮箱,用户名(有概率无法登录,需要尝试)</p><h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> <strong>密码</strong></h3><p>即用于登陆的密码</p><h3 id="captchatoken" tabindex="-1"><a class="header-anchor" href="#captchatoken" aria-hidden="true">#</a> <strong>CaptchaToken</strong></h3><p>在登录或上传是可能出现 need verify: {url},请访问错误中的链接完成验证得到 CaptchaToken（验证码）</p><p><img src="'+o+'" alt="xunlei"></p><p>填写好挂载目录 ID 账号 密码后保存，右上角会出现一大坨(没法复制)，</p><p>我们回到添加账号这里来复制 从 Https 开始复制到结束到一个新窗口进行获取验证码参数(CaptchaToken)</p><p>看下图添加</p><p><img src="'+d+'" alt="xunlei"></p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',15),b=r(`<h2 id="迅雷专家版" tabindex="-1"><a class="header-anchor" href="#迅雷专家版" aria-hidden="true">#</a> <strong>迅雷专家版</strong></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>迅雷如果需要下载必须指定 UserAgent(同下 DownUserAgent) 或使用本程序中的代理功能进行中转。</p></div><h3 id="登录类型" tabindex="-1"><a class="header-anchor" href="#登录类型" aria-hidden="true">#</a> <strong>登录类型</strong></h3><p>选择 User 时填用户名和密码</p><p>选择 RefreshToken 时只需填写 <code>RefreshToken</code></p><h3 id="签名类型" tabindex="-1"><a class="header-anchor" href="#签名类型" aria-hidden="true">#</a> <strong>签名类型</strong></h3><p>选择 Algorithms 时需填写 <code>Algorithms</code>(比较难获取,需要逆向)</p><p>选择 CaptchaSign 时只需填写 <code>CaptchaSign</code> 和 <code>Timestamp</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//签名算法
str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp
for (Algorithm in Algorithms) {
    str = md5(str + Algorithm)
}
CaptchaSign = &quot;1.&quot; + str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录类型(Login type) 和 签名类型(Sign type) 推荐选择选项</p><p><img src="`+h+'" alt="xunlei"></p><h3 id="deviceid" tabindex="-1"><a class="header-anchor" href="#deviceid" aria-hidden="true">#</a> <strong>DeviceID</strong></h3><p>通过 MD5 计算的值，用于判断登录的设备</p><h3 id="clientid-clientsecret-clientversion-packagename" tabindex="-1"><a class="header-anchor" href="#clientid-clientsecret-clientversion-packagename" aria-hidden="true">#</a> <strong>ClientID, ClientSecret, ClientVersion, PackageName</strong></h3><p>与签名有关，根据实际情况填写</p><h3 id="useragent" tabindex="-1"><a class="header-anchor" href="#useragent" aria-hidden="true">#</a> <strong>UserAgent</strong></h3><p>API 请求使用的 UserAgent，设置错误可能无法访问或限速</p><h3 id="downuseragent" tabindex="-1"><a class="header-anchor" href="#downuseragent" aria-hidden="true">#</a> <strong>DownUserAgent</strong></h3><p>下载时用到的 User Agent，如果设置错误会无法下载(开启代理会使用) 固定参数：</p><p><code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36</code></p><h2 id="关键数据获取流程" tabindex="-1"><a class="header-anchor" href="#关键数据获取流程" aria-hidden="true">#</a> <strong>关键数据获取流程</strong></h2><p>通过网络分析工具(抓包工具)获取迅雷请求数据</p><p>打开迅雷并登录账号（下图使用的是 PC 客户端来操作的，Web 端也可以）</p>',23),f={href:"https://xluser-ssl.xunlei.com/v1/shield/captcha/init",target:"_blank",rel:"noopener noreferrer"},_=r('<p>注：获取好两张图信息后再慢慢的从抓到的两条数据内挑选数据填进去</p><p>登录迅雷 打开抓包工具后，这时候可能，不能立马获取到 <code>v1/shield/captcha/init</code> 的信息，</p><p>迅雷 PC 客户端 和抓包工具不要关闭，等待即可，<strong>5 分钟左右</strong> 就会自动刷新</p><p>就会看到如下图的参数 照着获取填写即可(看不清的话可以右键复制图片链接到浏览器新开个窗口打开)</p><p>看到 <code>v1/shield/captcha/init</code> 抓取到后 请<strong>立刻马上不要耽误一秒钟</strong> 把迅雷在右下角任务栏的迅雷右键点击退出，彻底退出 然后重新打开 获取到<strong>图二</strong></p><p><img src="'+c+'" alt="xunlei"></p><p>重启迅雷会刷新 token</p>',7),k={href:"https://xluser-ssl.xunlei.com/v1/auth/token",target:"_blank",rel:"noopener noreferrer"},C=r('<p><img src="'+p+'" alt="xunlei"></p><p>图一包含 <strong>7 条</strong> 参数 | 图一包含 <strong>2 条</strong> 参数 | 一条固定参数(Down UserAgent) ，十条参数 和 3 个选项 以及一个挂载路径，写好保存即可，保存前记得检查喔~~</p><h3 id="thunderexpert-完整的参数填演示图" tabindex="-1"><a class="header-anchor" href="#thunderexpert-完整的参数填演示图" aria-hidden="true">#</a> <strong>ThunderExpert 完整的参数填演示图</strong></h3><p><img src="'+l+'" alt="xunlei"></p><h3 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',5);function K(T,S){const t=s("Mermaid"),i=s("ExternalLinkIcon");return m(),u("div",null,[v,n(t,{id:"mermaid-50",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="}),b,a("p",null,[e("请求 "),a("a",f,[e("https://xluser-ssl.xunlei.com/v1/shield/captcha/init"),n(i)]),e(" 中包含 CaptchaSign、Timestamp、DeviceID、ClientID、ClientVersion、PackageName、User-Agent")]),_,a("p",null,[e("请求 "),a("a",k,[e("https://xluser-ssl.xunlei.com/v1/auth/token"),n(i)]),e(" 中包含 RefreshToken（请使用返回的值）、ClientSecret（web 端不存在）")]),C,n(t,{id:"mermaid-162",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const W=g(x,[["render",K],["__file","thunder.html.vue"]]);export{W as default};
