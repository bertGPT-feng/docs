import{_ as s,a as d,b as l,c,d as h,e as p}from"./add-family-566bf70e.js";import{_,r,o as u,c as m,b as e,e as t,a as i,f as o}from"./app-5cd96f8a.js";const g={},f=e("h1",{id:"中国移动云盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#中国移动云盘","aria-hidden":"true"},"#"),t(" 中国移动云盘")],-1),b=e("h2",{id:"帐户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#帐户","aria-hidden":"true"},"#"),t(),e("strong",null,"帐户")],-1),v=e("p",null,"用于登录的手机号码",-1),x={href:"https://yun.139.com/",target:"_blank",rel:"noopener noreferrer"},C=o('<ul><li>⚠️ AList版本必须大于 <code>v3.18.0</code> 版本才能使用本教程（不包含v3.18.0）</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>已更换鉴权方式，请获取 <code>Authorization</code> 进行填写</p></div><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><ul><li><p>个人云：root，会将所有的都列出来，涵盖18项(自行查看)，正常文件在 <strong>我的文件夹</strong> 这个里面.</p><ul><li>如果写文件夹ID列出的是正常的根目录文件夹（推荐使用这个）</li></ul></li><li><p>家庭云：根目录为空就是全部文件</p><ul><li>若想挂载单独某个文件夹，在下方图片家庭云中获取目录ID方法</li></ul></li></ul><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> <strong>类型</strong></h2><p>个人云：选择个人云</p><p>家庭云：选择家庭云</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> <strong>其他</strong></h2><ol><li><p>其他信息取自请求，已经从获取cookie改变成获取<code>Authorization</code></p></li><li><p>请求信息中底部找不到<code>载荷</code>，就去顶部<code>上面一排</code>，标记了紫色高亮</p></li></ol><h3 id="cloud-id" tabindex="-1"><a class="header-anchor" href="#cloud-id" aria-hidden="true">#</a> <strong>Cloud ID</strong></h3><p>个人云不需要填写，<strong>家庭云专用</strong>。</p><h3 id="搜索关键词" tabindex="-1"><a class="header-anchor" href="#搜索关键词" aria-hidden="true">#</a> <strong>搜索关键词</strong></h3><p>注意查看关键词，下方获取 <strong><code>Authorization</code></strong> 时使用</p><ul><li>个人云：<strong>getDisk</strong></li><li>家庭云：<strong>queryContentList</strong></li></ul><h3 id="个人云" tabindex="-1"><a class="header-anchor" href="#个人云" aria-hidden="true">#</a> <strong>个人云：</strong></h3><div class="image-preview"><img src="'+s+'" alt="其他浏览器" title="其他浏览器"><img src="'+d+'" alt="Chrome浏览器" title="Chrome浏览器"></div><h3 id="家庭云" tabindex="-1"><a class="header-anchor" href="#家庭云" aria-hidden="true">#</a> <strong>家庭云：</strong></h3><p>注意：家庭云不支持重命名、移动、复制和上传。</p><div class="image-preview"><img src="'+l+'" alt="其他浏览器" title="其他浏览器"><img src="'+c+'" alt="Chrome浏览器" title="Chrome浏览器"></div>',19),k={class:"hint-container details"},A=e("summary",null,"手把手教学视频",-1),K=e("p",null,"虽然视频是V2版本，但是获取目录ID 和 Cloud ID的方式一样，",-1),w={href:"https://www.bilibili.com/video/BV1US4y1w79a",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[t("现在已经从获取Cookie的方式变成了获取"),e("code",null,"Authorization"),t("，获取方式可以看下方"),e("a",{href:"#%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B"},"填写示例"),t("教程")],-1),B=o('<h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例" aria-hidden="true">#</a> <strong>AList挂载填写示例：</strong></h3><p><mark><code>Authorization</code>只需要填写Basic空格后面开始的内容</mark></p><div class="image-preview"><img src="'+h+'" alt="个人云" title="个人云"><img src="'+p+'" alt="家庭云" title="家庭云"></div><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',4);function E(y,D){const a=r("ExternalLinkIcon"),n=r("Mermaid");return u(),m("div",null,[f,b,v,e("p",null,[t("云盘地址："),e("strong",null,[e("a",x,[t("https://yun.139.com/"),i(a)])])]),C,e("details",k,[A,K,e("p",null,[e("strong",null,[e("a",w,[t("https://www.bilibili.com/video/BV1US4y1w79a"),i(a)])])]),z]),B,i(n,{id:"mermaid-133",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const q=_(g,[["render",E],["__file","139.html.vue"]]);export{q as default};
