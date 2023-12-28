// 出错时等待 10
exports.errorSleepTime = 10;
// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
exports.restartTime = 0;
exports.submit = {

    host: '127.0.0.3',
    path: '/admin778899.php/data/kj'
}
exports.dbinfo = {
   
	host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'sands',
    database: 'hjlh'
	

}

exports.cp = [
/*{
       title: '幸运飞艇',
        source: '开彩网',
        name: 'xyft',
        enable: true,
        timer: 'xyft',
        option: {
            host: "127.0.0.9",
            path: '/xml/xyft/xyft.php',
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              
                str = str.substr(0, 200);	                                                                      	
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	
                var m;
                if (m = str.match(reg)) {                                                                         	
                    return {                                                                                  	
                        type: 55,                                                                              	
                        time: m[3],                                                                            	
                        number: m[1],                                                                          
                        data: m[2]                                                                             	
                    };                                                                                        	
                }					                                                                          	
            } catch (err) {                                                                                      	
                throw('幸运飞艇 解析数据不正确');                                                            	
            }
        }
    },*/
{
        title: '腾讯分分彩',
        source: 'BOT',
        name: 'txffc',
        enable: true,
        timer: 'txffc',
        option: {
            host: "127.0.0.9",
            path: '/sylot/tx_ffc',
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              
                str = str.substr(0, 200);	                                                                      	
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	
                var m;
                if (m = str.match(reg)) {                                                                         	
                    return {                                                                                  	
                        type: 81,                                                                              	
                        time: m[3],                                                                            	
                        number: m[1],                                                                          
                        data: m[2]                                                                             	
                    };                                                                                        	
                }					                                                                          	
            } catch (err) {                                                                                      	
                throw('腾讯分分彩 解析数据不正确');                                                            	
            }
        }
    },
 {
        title: '极速90秒赛车',
        source: 'BOT',
        name: 'jspk10',
        enable: true,
        timer: 'jspk10',
        option: {
            timeout: 5000,
            host: "127.0.0.9",
            path: '/sylot/js_pk10',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                	//
                var m;                                                                                        	//
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 72,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
                throw('极速90秒车解析数据不正确');                                                            	//
            }
        }
    },
{
        title: '极速1.5分彩',
        source: 'BOT',
        name: 'jsssc',
        enable: true,
        timer: 'jsssc',
        option: {
            host: "127.0.0.9",
            path: '/sylot/js_ssc',
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              
                str = str.substr(0, 200);	                                                                      	
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	
                var m;
                if (m = str.match(reg)) {                                                                         	
                    return {                                                                                  	
                        type: 73,                                                                              	
                        time: m[3],                                                                            	
                        number: m[1],                                                                          
                        data: m[2]                                                                             	
                    };                                                                                        	
                }					                                                                          	
            } catch (err) {                                                                                      	
               throw('极速1.5分彩 解析数据不正确');                                                            	
            }
        }
    },
    
    {
        title: '5分六合彩',
        source: 'BOT',
        name: 'jslhc',
        enable: true,
        timer: 'jslhc',
        option: {
            host: "127.0.0.9",
            timeout: 50000,
            path: '/sylot/js_lhc',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {                                                                                              	//
                str = str.substr(0, 200);	                                                                      	//
                var reg = /<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                    	//
                var m;                                                                                        	//
                if (m = str.match(reg)) {                                                                         	//
                    return {                                                                                  	//
                        type: 74,                                                                              	//
                        time: m[3],                                                                            	//
                        number: m[1],                                                                          	//
                        data: m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            } catch (err) {                                                                                      	//
               throw('5分六合彩 解析数据不正确');                                                            	//
            }
        }
    },
  
    {
        title:'极速5分彩',
        source:'BOT',
        name:'js5fc',
        enable:true,
        timer:'js5fc',

        option:{

            host:"127.0.0.9",

            path: '/sylot/js_wfc',
            timeout:5000,
            headers:{
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse:function(str){
            try{                                                                                              	//
                str=str.substr(0,200);	                                                                      	//
                var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	//
                var m;
                if(m=str.match(reg)){                                                                         	//
                    return {                                                                                  	//
                        type:82,                                                                              	//
                        time:m[3],                                                                            	//
                        number:m[1],                                                                          	//
                        data:m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            }catch(err){                                                                                      	//
               throw('极速5分彩 解析数据不正确');                                                            	//
            }
        }
    },
	 {
        title:'俄罗斯8',
        source:'BOT',
        name:'elskl8',
        enable:true,
        timer:'elskl8',

        option:{

            host:"127.0.0.9",

            path: '/sylot/js_els',
            timeout:5000,
            headers:{
                
				//"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)"
				"User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; Sleipnir/2.9.8) "
            }
        },

        parse:function(str){
            try{                                                                                              	//
                str=str.substr(0,200);	                                                                      	//
                var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                   	//
                var m;
                if(m=str.match(reg)){                                                                         	//
                    return {                                                                                  	//
                        type:86,                                                                              	//
                        time:m[3],                                                                            	//
                        number:m[1],                                                                          	//
                        data:m[2]                                                                             	//
                    };                                                                                        	//
                }					                                                                          	//
            }catch(err){                                                                                      	//
                throw('俄罗斯8 解析数据不正确');                                                            	//
            }
        }
    },

	{
        title:'天津时时彩',
        source:'168',
        name:'tjssc',
        enable:true,
        timer:'ssc-tj',
        option:getOption(83),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(83, json);
                }
            }catch(err){
                throw('天津时时彩解析数据不正确');
            }
        }
    },
	
	{
        title:'新疆时时彩',
        source:'168',
        name:'xjssc',
        enable:true,
        timer:'ssc-xj',
        option:getOption(80),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(80, json);
                }
            }catch(err){
                throw('新疆时时彩解析数据不正确');
            }
        }
    },
	{
        title:'重庆时时彩',
        source:'168',
        name:'cqssc',
        enable:true,
        timer:'ssc-cq',
        option:getOption(1),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(1, json);
                }
            }catch(err){
                throw('重庆时时彩解析数据不正确');
            }
        }
    },
 
	 {                                                                                                           //
		title:'江苏快3',                                                                           		//
		source:'163彩票',                                                                                 		//
		name:'jsk3',                                                                                            //
		enable:true,                                                                                            //
		timer:'jsk3',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.9",                                                                                   //
			timeout:50000,                                                                                      //江
			path: '/xml/jsk3/jsk3_163.php',                                                                      	//苏
			headers:{                                                                                           //快
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //3
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:10,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
			//	throw('江苏163彩票快3解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //江
	},
   {
        title:'江苏快3',
        source:'168',
        name:'jsk3',
        enable:true,
        timer:'jsk3',
        option:getOption(10),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(10, json);
                }
            }catch(err){
                throw('江苏快3解析数据不正确');
            }
        }
    },
	 {
        title:'北京快3',
        source:'168',
        name:'shk3',
        enable:true,
        timer:'shk3',
        option:getOption(84),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(84, json);
                }
            }catch(err){
                throw('北京快三解析数据不正确');
            }
        }
    },
	{
        title:'安徽快3',
        source:'168',
        name:'ahk3',
        enable:true,
        timer:'ahk3',
        option:getOption(85),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(85, json);
                }
            }catch(err){
                throw('安徽快三解析数据不正确');
            }
        }
    },
    
	   {
        title:'广东11选5',
        source:'168',
        name:'gd11x5',
        enable:true,
        timer:'gd11x5',
        option:getOption(21),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(21, json);
                }
            }catch(err){
                throw('广东11选5解析数据不正确');
            }
        }
    },
    
       {
		title:'广东快乐十分',
        source:'168',
        name:'gdklsf',
        enable:true,
        timer:'gdklsf',
        option:getOption(60),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(60, json);
                }
            }catch(err){
                throw('广东快乐十分解析数据不正确');
            }
        }
    },


	
    {
        title:'重庆幸运农场',
        source:'168',
        name:'klsf',
        enable:true,
        timer:'klsf',
        option:getOption(61),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(61, json);
                }
            }catch(err){
                throw('重庆幸运农场解析数据不正确');
            }
        }
    },
	{
        title:'北京赛车(PK10)',
        source:'168',
        name:'bjpk10',
        enable:true,
        timer:'bjpk10',
        option:getOption(50),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(50, json);
                }
            }catch(err){
                throw('北京赛车(PK10)解析数据不正确');
            }
        }
    },
	{                                                                                                           //
		title:'赛车彩',                                                                           	    	//
		source:'168',                                                                                 	//
		name:'bjpk10',                                                                                           //
		enable:true,                                                                                            //
		timer:'bjpk10',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.9",                                                                                   //
			timeout:50000,                                                                                      //新
			path: '/xml/pk10/pk10.php',                                                                       	//疆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:50,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('北京赛车(PK10)解析数据不正确');                                                    //
			}                                                                                                   //
		}                                                                                                       //新
	},
		
    {
        title:'北京快乐8',
        source:'168',
        name:'bjk8',
        enable:true,
        timer:'bjk8',
        option:getOption(65),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(65, json);
                }
            }catch(err){
                throw('北京快乐8解析数据不正确');
            }
        }
    },
    {

        title:'PC蛋蛋',
        source:'168',
        name:'pcdd',
        enable:true,
        timer:'pcdd',
        option:getOption(66),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(66, json);
                }
            }catch(err){
                throw('PC蛋蛋解析数据不正确');
            }
        }
    },
	
   {
        title:'香港六合彩',
        source:'168',
        name:'lhc',
        enable:true,
        timer:'lhc',
        option:getOption(70),
        parse:function(str){
            try{
                var json={};
                if (json = JSON.parse(str)) {
                    return getData(70, json);
                }
            }catch(err){
                throw('六合彩解析数据不正确');
            }
        }
    },
	/*9800六合比较准，只是开慢*/
	{
		title: '9800六合彩',
		source: '叁督网络科技',
		name: 'hklhc',
		enable: true,
		timer: 'hklhc',
		stype: 59,
		option: {
			host: "www.9800.com.tw",
			timeout: 50000,
			path: '/html/a6/',
			hhost: "www.9800.com.tw",
			npath: '/html/a6/',
			headers: {
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/22.0.1271.64 Safari/537.11"
			}
		},
		parse: function(str) {
			try {
				return getFrom9800(str, 70);
			} catch (err) {}
		},
		reparse: function(bet) {
			try {
				log(bet.actionNo);
				return reparseFrom9800(bet, 70);
			} catch (err) {

			}
          }
		},


  {
        title: '幸运飞艇',
        source: '开彩网',
        name: 'xyft',
        enable: true,
        timer: 'xyft',

        option: {

            host: "luckyairship.com",
            timeout: 30000,
            path: '/api/getwiningnumbers.ashx',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },

        parse: function (str) {
            try {

                var myDate = new Date();
                var year = myDate.getFullYear();       //年
                var month = myDate.getMonth() + 1;     //月
                var day = myDate.getDate();            //日
                if (month < 10) month = "0" + month;
                if (day < 10) day = "0" + day;
                var mytime = year + "-" + month + "-" + day + " " + myDate.toLocaleTimeString();


                var m;
                var reg = /"openedPeriodNumber":(\d+?),"openedDate"[\s\S]*?"numbersArray":\["([\S]+)"],"curDate"/;
                if (m = str.match(reg)) {
                    return {
                        type: 55,
                        time: mytime,
                        number: m[1],
                        data: m[2].replace(/"/g, '')
                    };
                }
            } catch (err) {
                throw('幸运飞艇解析数据不正确');
            }
        }
    },
	{                                                                                                           //
		title:'天津时时彩',                                                                           	    	//
		source:'天津福利彩票网',                                                                                //
		name:'tjssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'tjssc',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.9",                                                                                   //天
			timeout:50000,                                                                                      //津
			path: '/xml/tjssc/tjssc.php',                                                                 		    //时
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //彩
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:83,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //天
				}					                                                                            //津
			}catch(err){                                                                                        //时
				throw('天津时时彩解析数据不正确');                                                      //时
			}                                                                                                   //彩
		}                                                                                                       //
	},
	{                                                                                                           //
		title:'新疆时时彩',                                                                           	    	//
		source:'新疆福彩网',                                                                                 	//
		name:'xjssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'xjssc',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.9",                                                                                   //
			timeout:50000,                                                                                      //新
			path: '/xml/xjssc/xjssc.php',                                                                       	//疆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:80,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('新疆福利彩票解析数据不正确');                                                    //
			}                                                                                                   //
		}                                                                                                       //新
	},
	

	{                                                                                                           //
		title:'北京pk10',                                                                           	    	//
		source:'叁督网络科技',                                                                                 			//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                            //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/pk10_129kai.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:50,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('北京pk10解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},
{                                                                                                           //
		title:'广东快乐十分',                                                                           	    	//
		source:'叁督网络科技',                                                                                 			//
		name:'gdklsf',                                                                                          //
		enable:true,                                                                                            //
		timer:'gdklsf',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/gdklsf.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){  
				var bian1=m[1].substr(-2);
                var bian2=m[1].substr(0,8);
 				var zong=bian2+bian1;
					return {                                                                                    //
						type:60,                                                                                //
						time:m[3],                                                                              //
						number:zong,                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('广东快乐十分解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},
	{                                                                                                           //
		title:'北京快乐8',                                                                           	    	//
		source:'叁督网络科技',                                                                                 			//
		name:'bjk8',                                                                                          //
		enable:true,                                                                                            //
		timer:'bjk8',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/kl8.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){ 
				var bian1=m[1].substr(-9);
                var bian2=m[1].substr(0,8);
 				var zong=bian2+bian1;				//
					return {                                                                                    //
						type:65,                                                                                //
						time:m[3],                                                                              //
						number:bian1,                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('北京快乐8解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},
	
	

	{                                                                                                           //
		title:'幸运飞艇',                                                                           	    	//
		source:'叁督网络科技',                                                                                 			//
		name:'mlaft',                                                                                          //
		enable:true,                                                                                            //
		timer:'mlaft',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/xyft.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:55,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('幸运飞艇解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},



	{                                                                                                           //
		title:'重庆幸运农场',                                                                           	    	//
		source:'叁督网络科技',                                                                                 			//
		name:'klsf',                                                                                          //
		enable:true,                                                                                            //
		timer:'klsf',                                                                                         //
		option:{                                                                                                //
			host:"kj.dzmz007.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/xync.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){ 
				var bian1=m[1].substr(-9);
                var bian2=m[1].substr(0,8);
 				var zong=bian2+bian1;				//
					return {                                                                                    //
						type:61,                                                                                //
						time:m[3],                                                                              //
						number:bian1,                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('重庆幸运农场解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},
	
{
		title:'新疆时时彩',
		source:'叁督网络科技',
		name:'xjssc',
		enable:true,
		timer:'xjssc',

		option:{
			host:"www.xjflcp.com",
			timeout:50000,
			path: '/game/sscAnnounce',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		
		parse:function(str){
			return getFromXJFLCPWeb(str,80);
		}
	},

];

global.log = function (log) {
    var date = new Date();
    console.log('[' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + '] ' + log)
}

function getOption(type) {
    //var host="api.1680210.com";
	var host = "api.api68.com";
    var uri = "";
    switch (type) {
		case 1:
            uri = "/CQShiCai/getBaseCQShiCai.do?lotCode=10002";
            break;
		case 80:
            uri = "/CQShiCai/getBaseCQShiCai.do?lotCode=10004";
            break;	
		case 83:
            uri = "/CQShiCai/getBaseCQShiCai.do?lotCode=10003";
            break;	
        case 10:
            uri = "/lotteryJSFastThree/getBaseJSFastThree.do?lotCode=10007";
            break;
		case 84:
            uri = "/lotteryJSFastThree/getBaseJSFastThree.do?lotCode=10033";
            break;
		case 85:
            uri = "/lotteryJSFastThree/getBaseJSFastThree.do?lotCode=10030";
            break;	
        case 21:
            uri = "/ElevenFive/getElevenFiveInfo.do?lotCode=10006";
            break;
        case 50:
            uri = "/pks/getLotteryPksInfo.do?lotCode=10001";
            break;
        case 60:
            uri = "/klsf/getLotteryInfo.do?lotCode=10005";
            break;
        case 61:
            uri = "/klsf/getLotteryInfo.do?lotCode=10009";
            break;
        case 65:
            uri = "/LuckTwenty/getBaseLuckTewnty.do?lotCode=10014";
            break;
        case 66:
            uri = "/LuckTwenty/getPcLucky28.do?&lotCode=";
            break;	
        case 70:
            host="1680660.com"
            uri = "/smallSix/findSmallSixInfo.do?lotCode=10048";
            break;
    }
    return {
        host: host,
        timeout: 5000,
        path: uri,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
			"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)"

        }
    }
}

function getData(type, json) {
    var data = {};
    if (json.errorCode == 0 && json.result.businessCode == 0) {
        data = json.result.data;
        var numbers=data.preDrawIssue.toString();
        if(type==61){
            numbers=numbers.substr(2)
        }
        return {
            type: type,
            time: getNowTime(),
            number: numbers,
            data: data.preDrawCode,
        };
    }
}
function getNowTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var mytime = year + "-" + month + "-" + day + " " + myDate.toLocaleTimeString();
    return mytime;
}

function getFrompcdd(str, type) {
    var exp_data = /var latest_draw_result = {"red":\[([0-9\[\]\,\s"]+)\]/;
    var exp_phase = /var latest_draw_phase = '(\d+)';/;
    var exp_time = /var latest_draw_time = '([0-9\-\:\s]+)';/;
    var m_data = str.match(exp_data);
    var m_phase = str.match(exp_phase);
    var m_time = str.match(exp_time);
    if (m_data && m_phase && m_time) {
        var mytime = m_time[1];
        var mynumber = m_phase[1];
        var data = m_data[1].replace(/"/g, '');
    }
    if (!mytime || !mynumber || !data) throw new Error('PC蛋蛋数据不正确');
    data = data.split(',').sort();
    var kj1 = 0, kj2 = 0, kj3 = 0;
    for (var i = 0 in data) {
        if (i < 6) {
            kj1 += parseInt(data[i], 10);
        } else if (i >= 6 && i < 12) {
            kj2 += parseInt(data[i], 10);
        } else if (i >= 12 && i <= 17) {
            kj3 += parseInt(data[i], 10);
        }
    }
    if (kj1 >= 10) {
        kj1 = kj1.toString().substr(-1);
    }
    if (kj2 >= 10) {
        kj2 = kj2.toString().substr(-1);
    }
    if (kj3 >= 10) {
        kj3 = kj3.toString().substr(-1);
    }
    if (kj1 < 0 || kj3 < 0) throw new Error('PC蛋蛋开奖数据不正确');
    data = kj1 + ',' + kj2 + ',' + kj3;
    try {

        var data = {
            type: type,
            time: mytime,
            number: mynumber,
            data: data
        };
        //console.log(data);
        return data;
    } catch (err) {
        throw('解析PC蛋蛋数据失败');
    }

}
/*360对奖代码*/
 function getFrom360CP(str, type){

	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(match);
	if(match.length>1){
		if(match[1].length==7) match[1]=year+match[1].replace(/(\d{8})(\d{3})/,'$1-$2');
		if(match[1].length==6) match[1]=year+match[1].replace(/(\d{4})(\d{2})/,'$1-0$2');
		if(match[1].length==9) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');
		if(match[1].length==10) match[1]=match[1].replace(/(\d{8})(\d{2})/,'$10$2');
		var mynumber=match[1].replace('-','');
		
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber
			}
			
			reg=/<li class=".*?">(\d+)<\/li>/g;
			data.data=match[2].match(reg).map(function(v){
				var reg=/<li class=".*?">(\d+)<\/li>/;
				return v.match(reg)[1];
			}).join(',');
			
			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
	}
}

function getFrom9800(str, type) {

	str = str.substr(str.indexOf('bai12'), 560);


	var reg = /<TD bgColor=#f6f6f6 align="center">(\d+)<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color="#FF0000"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color="#009933">(\d+)<\/font><\/b>/,
		match = str.match(reg);

	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[2] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: match[1]
		}

		data.data = match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[8] + "," + match[9];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}

function getFrom360CPK3(str, type){
	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(match);
	match[1]=match[1].replace(/(\d{4})(\d{2})/,'$1$2');
		
		try{
			var data={
				type:type,
				time:mytime,
				number:match[1]
			}
			
			reg=/<li class=".*?">(\d+)<\/li>/g;
			data.data=match[2].match(reg).map(function(v){
				var reg=/<li class=".*?">(\d+)<\/li>/;
				return v.match(reg)[1];
			}).join(',');
			
			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
}

function getFrom360sd11x5(str, type){
	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString(); 
	//console.log(mytime);
	//console.log(match);
	
	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:mytime,
			number:year+match[1].replace(/(\d{4})(\d{2})/,'$1-0$2')
		}
		
		reg=/<li class=".*?">(\d+)<\/li>/g;
		data.data=match[2].match(reg).map(function(v){
			var reg=/<li class=".*?">(\d+)<\/li>/;
			return v.match(reg)[1];
		}).join(',');
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFromPK10(str, type){
	str=str.substr(str.indexOf('<div class="lott_cont">'),350).replace(/[\r\n]+/g,'');
    //console.log(str);
	var reg=/<tr class=".*?">[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	try{
		var data={
			type:type,
			time:match[3],
			number:match[1],
			data:match[2]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
	
}


function getFromK8(str, type){
	str=str.substr(str.indexOf('<div class="lott_cont">'),450).replace(/[\r\n]+/g,'');
    //console.log(str);
	var reg=/<tr class=".*?">[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	try{
		var data={
			type:type,
			time:match[4],
			number:match[1],
			data:match[2]+'|'+match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}	
}

function getFromKUAICAILEWeb(str, type){	
	str=str.replace('var issueJson=','');
	var jsonObj = JSON.parse(str),match=[]; 
	
	if(jsonObj){
		$Lottery=jsonObj.historyLotteryTerms;
		match[1]=$Lottery[0].termNo;
		match[2]=$Lottery[0].openPrizeTime;
		match[3]=$Lottery[0].result;
		if(match[1].length==6) match[1]='2017'+match[1].replace(/(\d{4})(\d{2})/,'$1-0$2');
		if(match[1].length==7) match[1]='2017'+match[1].replace(/(\d{4})(\d{3})/,'$1-$2');
		if(match[1].length==8){
			if(parseInt(type)!=11){
				match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-0$2');
			}else{match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');}
		}
		if(match[1].length==9) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');
		if(match[1].length==10) match[1]=match[1].replace(/(\d{8})(\d{2})/,'$1-0$2');
		var mynumber=match[1].replace(/(\d{8})(\d{3})/,'$1-$2');
	try{
		var data={
			type:type,
			time:match[2],
			number:mynumber,
			data:match[3]
		}
	
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
   }
}

function getFromCJCPWeb(str, type){
	str=str.substr(str.indexOf('<table class="qgkj_table">'),1200);	
	//console.log(str);
	
	var reg=/<tr>[\s\S]*?<td class=".*">(\d+).*?<\/td>[\s\S]*?<td class=".*">([\d\- \:]+)<\/td>[\s\S]*?<td class=".*">((?:[\s\S]*?<input type="button" value="\d+" class=".*?" \/>){3,5})[\s\S]*?<\/td>/,
	match=str.match(reg);
	
	//console.log(match);
	
	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:match[2],
			number:match[1].replace(/(\d{8})(\d{2})/,'$1-0$2')
		}
		
		reg=/<input type="button" value="(\d+)" class=".*?" \/>/g;
		data.data=match[3].match(reg).map(function(v){
			var reg=/<input type="button" value="(\d+)" class=".*?" \/>/;
			return v.match(reg)[1];
		}).join(',');
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
	
}

function getFromCaileleWeb(str, type, slen){
	if(!slen) slen=380;
	str=str.substr(str.indexOf('<tr bgcolor="#FFFAF3">'),slen);
	//console.log(str);
	var reg=/<td.*?>(\d+)<\/td>[\s\S]*?<td.*?>([\d\- \:]+)<\/td>[\s\S]*?<td.*?>((?:[\s\S]*?<div class="ball_yellow">\d+<\/div>){3,5})\s*<\/td>/,
	match=str.match(reg);
	if(match.length>1){
		
		if(match[1].length==7) match[1]='2014'+match[1].replace(/(\d{4})(\d{3})/,'$1-$2');
		if(match[1].length==8){
			if(parseInt(type)!=11){
				match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-0$2');
			}else{match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');}
		}
		if(match[1].length==9) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');
		if(match[1].length==10) match[1]=match[1].replace(/(\d{8})(\d{2})/,'$1-0$2');
		var mynumber=match[1].replace(/(\d{8})(\d{3})/,'$1-$2');
	try{
		var data={
			type:type,
			time:match[2],
			number:mynumber
		}
		
		reg=/<div.*>(\d+)<\/div>/g;
		data.data=match[3].match(reg).map(function(v){
			var reg=/<div.*>(\d+)<\/div>/;
			return v.match(reg)[1];
		}).join(',');
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
   }
}

function getFromCaileleWeb_1(str, type){
	str=str.substr(str.indexOf('<tbody id="openPanel">'), 120).replace(/[\r\n]+/g,'');
         
	var reg=/<tr.*?>[\s\S]*?<td.*?>(\d+)<\/td>[\s\S]*?<td.*?>([\d\:\- ]+?)<\/td>[\s\S]*?<td.*?>([\d\,]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	var number,_number,number2;
	var d = new Date();
	var y = d.getFullYear();
	if(match[1].length==9 || match[1].length==8){number='20'+match[1];}else if(match[1].length==7){number='2014'+match[1];}else{number=match[1];}
	_number=number;
	if(number.length==11){number2=number.replace(/^(\d{8})(\d{3})$/, '$1-$2');}else{number2=number.replace(/^(\d{8})(\d{2})$/, '$1-0$2');_number=number.replace(/^(\d{8})(\d{2})$/, '$10$2');}
	try{
		var data={
			type:type,
			time:_number.replace(/^(\d{4})(\d{2})(\d{2})\d{3}/, '$1-$2-$3 ')+match[2],
			number:number2,
			data:match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFromCaileleWeb_2(str, type){
	str=str.substr(str.indexOf('<tbody id="openPanel">'), 500).replace(/[\r\n]+/g,'');
	//console.log(str);
	var reg=/<tr>[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<td>([\d\,]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	var number,_number,number2;
	var d = new Date();
	var y = d.getFullYear();
	if(match[1].length==9 || match[1].length==8){number='20'+match[1];}else if(match[1].length==7){number='2014'+match[1];}else{number=match[1];}
	_number=number;
	if(number.length==11){number2=number.replace(/^(\d{8})(\d{3})$/, '$1-$2');}else{number2=number.replace(/^(\d{8})(\d{2})$/, '$1-0$2');_number=number.replace(/^(\d{8})(\d{2})$/, '$10$2');}
	try{
		var data={
			type:type,
			time:_number.replace(/^(\d{4})(\d{2})(\d{2})\d{3}/, '$1-$2-$3 ')+match[2],
			number:number2,
			data:match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFromCJCPWeb_2(str, type){
	str=str.substr(str.indexOf('<table class="kjjg_table">'),880);
	//console.log(str);
	
	var reg=/<tr>[\s\S]*?<td>(\d+).*?<\/td>[\s\S]*?<td>([\d\- \:]+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	
	//console.log(match);
	if(match[1].length==7) match[1]='2017'+match[1].replace(/(\d{4})(\d{3})/,'$1-$2');
	if(match[1].length==8) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-0$2');
	if(match[1].length==9) match[1]='20'+match[1].replace(/(\d{6})(\d{2})/,'$1-$2');
	if(match[1].length==10) match[1]=match[1].replace(/(\d{8})(\d{2})/,'$1-0$2');
	var mynumber=match[1].replace(/(\d{8})(\d{3})/,'$1-$2');
	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:match[2],
			number:mynumber
		}
		
		reg=/<div class="hm_bg">(\d+)<\/div>/g;
		data.data=match[3].match(reg).map(function(v){
			var reg=/<div class="hm_bg">(\d+)<\/div>/;
			return v.match(reg)[1];
		}).join(',');
		
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}	
}


//五分彩开奖
function getFromWANJINYULE(str, type){
	//console.log(str);
	var reg=/<ul><li>(.*)<\/li><li>(.*)<\/li><li>([\d\:\- ]+?)<\/li><li>(\d+)<\/li><\/ul>/,
	match=str.match(reg);
	
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString(); 
	var mydata=GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9)+','+GetRandomNum(0,9);
	//console.log('wanjin'+mydata);
	if(!match) throw new Error('数据不正确');
	if(parseInt(match[4])==1){
	try{
		var data={
			type:type,
			time:mytime,
			number:match[1],
			data:mydata
		}
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
   }
}

  
function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}    

function getCQsscGw(str, type,gameName){
	


	str = str.substr(str.indexOf('name="description"'),100).replace(/[\r\n]+/g,'');
	var reg =new RegExp(gameName+"第(\\d+-\\d+)期开奖号码:(\\d+),开奖时间",""); 
	
	var match=str.match(reg);
	
	if(!match) throw new Error('-'+gameName+'官网数据不正确');
	

	var ano =  match[1];
	
	var data= match[2]+'';
	var data = data.split("").join(',');
	
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	
	
	
	try{
		var data={
			type:type,
			time:mytime,
			number:ano,
			data:data
		}
		
	//	console.log(gameName);
		//console.log(data);
		return data;
	}catch(err){
		throw('解析'+gameName+'官网数据失败');
	}
}
function getFromcpmlaft(str, type){
	str=str.substr(0,300);
	//console.log(str);
	var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mynumber=match[1];
	var mydata=match[2];
	var mytime=match[3];
	//var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(mynumber);
	try{
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:mydata
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFrom360CPlhc(str, type){
	str=str.substr(0,300);
	//console.log(str);
	var reg=/<row expect="(\d+?)" opencode="([\d\,\+]+?)" opentime="([\d\:\- ]+?)"/;
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mynumber=match[1];
	var mydata=match[2].replace('+',',');
	var mytime=match[3];
	//console.log(mynumber);
	try{
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:mydata
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFrom360CPa(str, type){
	//str=str.substr(80192,1642);////为了缩小范围，截取要取的期号跟号码所在区域，字符数可以在word文档里先查看是多少个字符
	str=str.replace(/[\u4E00-\u9FA5]/g,'');//去掉中文字符
	str= str.replace(/<style[^>]*?>[\s\S]*?<\/style>/,'');
	str=str.replace(/<\/?td[^>]*>/g,'@@');
	str=str.replace(/<.*?>/gi,"");
    str=str.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
	str=str.replace(/[\n\f\r\t\v\0]/,'');
	str=str.match(/@@(.*?)@@/g)
	strnum=str[1].replace(/[^0-9]/g,'');
	strdata=str[2].replace(/[^0-9]/g,'');
	//console.log(strnum);//打印出匹配到的内容
	//console.log(strdata);
	//console.log(str);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	if((strnum.length>1) && (strdata.length>1)){
		var mynumber=year+strnum.substr(2,4)+'-'+strnum.substr(6,3);
		var mydata=strdata[0]+','+strdata[1]+','+strdata[2]+','+strdata[3]+','+strdata[4];
		//console.log(mynumber);
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber,
				data:mydata
			};

			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
	}
}
function getFromPK10a(str, type){
	//str=str.substr(80192,1642);////为了缩小范围，截取要取的期号跟号码所在区域，字符数可以在word文档里先查看是多少个字符
	str=str.replace(/[\u4E00-\u9FA5]/g,'');//去掉中文字符
	str= str.replace(/<style[^>]*?>[\s\S]*?<\/style>/,'');
	str=str.replace(/<\/?td[^>]*>/g,'@@');
	str=str.replace(/<.*?>/gi,"");
    str=str.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
	str=str.replace(/[\n\f\r\t\v\0]/,'');
	str=str.match(/@@(.*?)@@/g);
	strnum=str[1].replace(/[^0-9]/g,'');
	strdata=str[2].replace(/[^0-9\,]/g,'');
	//console.log(strnum);//打印出匹配到的内容
	//console.log(strdata);
	//console.log(str);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	if((strnum.length>1) && (strdata.length>1)){
		var mynumber=strnum;
		var mydata=strdata;
		//console.log(mynumber);
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber,
				data:mydata
			};

			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
	}

}

function getFrom360CPb11x5(str, type){
	str=str.replace(/[\u4E00-\u9FA5]/g,'');//去掉中文字符
	str= str.replace(/<style[^>]*?>[\s\S]*?<\/style>/,'');
	str=str.replace(/<\/?td[^>]*>/g,'@@');
	str=str.replace(/<.*?>/gi,"");
    str=str.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
	str=str.replace(/[\n\f\r\t\v\0]/,'');
	str=str.match(/@@(.*?)@@/g)
	strnum=str[1].replace(/[^0-9]/g,'');
	strdata=str[2].replace(/[^0-9]/g,'');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	if((strnum.length>1) && (strdata.length>1)){
		var mynumber=year+strnum.substr(2,4)+'-0'+strnum.substr(6,3);
		var mydata=strdata[0]+strdata[1]+','+strdata[2]+strdata[3]+','+strdata[4]+strdata[5]+','+strdata[6]+strdata[7]+','+strdata[8]+strdata[9];
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber,
				data:mydata
			};

			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
	}
}


function getFrom360CPK3(str, type){

	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	match[1]=match[1].replace(/(\d{4})(\d{2})/,'$1'+0+'$2');
	//console.log(match[1]);
	var mynumber=year.toString().substr(-2)+match[1];
		try{
			var data={
				type:type,
				time:mytime,
				number:mynumber
			}

			reg=/<li class=".*?">(\d+)<\/li>/g;
			data.data=match[2].match(reg).map(function(v){
				var reg=/<li class=".*?">(\d+)<\/li>/;
				return v.match(reg)[1];
			}).join(',');

			//console.log(data);
			return data;
		}catch(err){
			throw('解析数据失败');
		}
}


function getFromK8(str, type){

	str=str.substr(str.indexOf('<div class="lott_cont">'),450).replace(/[\r\n]+/g,'');
    //console.log(str);
	var reg=/<tr class=".*?">[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	try{
		var data={
			type:type,
			time:match[4],
			number:match[1],
			data:match[2]//+'|'+match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}

}
function getFrompcdd(str, type){
	str=str.substr(0,300);	
	//console.log(str);	
	var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mynumber=match[1];
	var data=match[2];
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(mynumber);
	if(!mytime || !mynumber || !data) throw new Error('PC蛋蛋数据不正确');
	data=data.split(',').sort();
	var kj1=0,kj2=0,kj3=0;
	for(var i=0 in data){
		if(i<6){
			kj1+=parseInt(data[i],10);
		}else if(i>=6 && i<12){
			kj2+=parseInt(data[i],10);
		}else if(i>=12 && i<=17){
			kj3+=parseInt(data[i],10);
		}	
	}
	if(kj1>=10){kj1=kj1.toString().substr(-1);}
	if(kj2>=10){kj2=kj2.toString().substr(-1);}
	if(kj3>=10){kj3=kj3.toString().substr(-1);}
	if(kj1<0 || kj3<0) throw new Error('PC蛋蛋开奖数据不正确');
	data=kj1+','+kj2+','+kj3;
	try{
		
		var data={
			type:type,
			time:mytime,
			number:mynumber,
			data:data
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析PC蛋蛋数据失败');
	}
	
}

function getFromCJCPWeb(str, type){

	//console.log(str);
	str=str.substr(str.indexOf('<table class="qgkj_table">'),1200);

	//console.log(str);

	var reg=/<tr>[\s\S]*?<td class=".*">(\d+).*?<\/td>[\s\S]*?<td class=".*">([\d\- \:]+)<\/td>[\s\S]*?<td class=".*">((?:[\s\S]*?<input type="button" value="\d+" class=".*?" \/>){3,5})[\s\S]*?<\/td>/,
	match=str.match(reg);

	//console.log(match);

	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:match[2],
			number:match[1].replace(/(\d{8})(\d{2})/,'$1-0$2')
		}

		reg=/<input type="button" value="(\d+)" class=".*?" \/>/g;
		data.data=match[3].match(reg).map(function(v){
			var reg=/<input type="button" value="(\d+)" class=".*?" \/>/;
			return v.match(reg)[1];
		}).join(',');

		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}

}

function getFromCaileleWeb_1(str, type){
	str=str.substr(str.indexOf('<tbody id="openPanel">'), 120).replace(/[\r\n]+/g,'');

	var reg=/<tr.*?>[\s\S]*?<td.*?>(\d+)<\/td>[\s\S]*?<td.*?>([\d\:\- ]+?)<\/td>[\s\S]*?<td.*?>([\d\,]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	var number,_number,number2;
	var d = new Date();
	var y = d.getFullYear();
	if(match[1].length==9 || match[1].length==8){number='20'+match[1];}else if(match[1].length==7){number='2014'+match[1];}else{number=match[1];}
	_number=number;
	if(number.length==11){number2=number.replace(/^(\d{8})(\d{3})$/, '$1-$2');}else{number2=number.replace(/^(\d{8})(\d{2})$/, '$1-0$2');_number=number.replace(/^(\d{8})(\d{2})$/, '$10$2');}
	try{
		var data={
			type:type,
			time:_number.replace(/^(\d{4})(\d{2})(\d{2})\d{3}/, '$1-$2-$3 ')+match[2],
			number:number2,
			data:match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFrom360sd11x5(str, type){

	str=str.substr(str.indexOf('<em class="red" id="open_issue">'),380);
	//console.log(str);
	var reg=/[\s\S]*?(\d+)<\/em>[\s\S].*?<ul id="open_code_list">((?:[\s\S]*?<li class=".*?">\d+<\/li>){3,5})[\s\S]*?<\/ul>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	//console.log(mytime);
	//console.log(match);

	if(!match) throw new Error('数据不正确');
	try{
		var data={
			type:type,
			time:mytime,
			number:year+match[1].replace(/(\d{4})(\d{2})/,'$1-0$2')
		}

		reg=/<li class=".*?">(\d+)<\/li>/g;
		data.data=match[2].match(reg).map(function(v){
			var reg=/<li class=".*?">(\d+)<\/li>/;
			return v.match(reg)[1];
		}).join(',');

		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

function getFromCaileleWeb_2(str, type){

	str=str.substr(str.indexOf('<tbody id="openPanel">'), 500).replace(/[\r\n]+/g,'');
	//console.log(str);
	var reg=/<tr>[\s\S]*?<td>(\d+)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<td>([\d\,]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	//console.log(match);
	var number,_number,number2;
	var d = new Date();
	var y = d.getFullYear();
	if(match[1].length==9 || match[1].length==8){number='20'+match[1];}else if(match[1].length==7){number='2014'+match[1];}else{number=match[1];}
	_number=number;
	if(number.length==11){number2=number.replace(/^(\d{8})(\d{3})$/, '$1-$2');}else{number2=number.replace(/^(\d{8})(\d{2})$/, '$1-0$2');_number=number.replace(/^(\d{8})(\d{2})$/, '$10$2');}
	try{
		var data={
			type:type,
			time:_number.replace(/^(\d{4})(\d{2})(\d{2})\d{3}/, '$1-$2-$3 ')+match[2],
			number:number2,
			data:match[3]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}

//Maleo 2015-06-02 UPDATE  Maleo is handsome boy
function getFromPK10(str, type){
	str=str.substr(str.indexOf('<div class="lott_cont">'),320).replace(/[\r\n]+/g,'');


	var reg=/<td>(\d+)<\/td>[\s\S]*?<td>(.*)<\/td>[\s\S]*?<td>([\d\:\- ]+?)<\/td>[\s\S]*?<\/tr>/,
	match=str.match(reg);
	if(!match) throw new Error('数据不正确');
	var myDate = new Date();
	var year = myDate.getFullYear();
	var mytime=match[3];
	try{
		var data={
			type:type,
			time:mytime,

			number:match[1],
			data:match[2]
		};

		return data;
	}catch(err){
		throw('解析数据失败');
	}

}
function getFromshishicai(str, type){
	str=str.substr(str.indexOf('<th class="borRB">'),380);
	var reg=/<th class=".*?">[\s\S]*?<\/th>[\s\S]*?<th class=".*?">[\s\S]*?<\/th>[\s\S]*?<tr><td class=".*?">([\d+\-]+?)<\/td><td class=".*?">(\d+)<\/td><\/tr>/,
	match=str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear();       //年
    var month = myDate.getMonth() + 1;     //月
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	    try{
			var data={
				type:type,
				time:mytime,
				number:match[1],
				data:match[2].split('').join(',')
			}
			return data;
		}catch(err){
			throw('解析数据失败');
		}
}
function strCut(str, len){
	var strlen = str.length;
	if(strlen == 0) return false;
	var j = Math.ceil(strlen / len);
	var arr = Array();
	for(var i=0; i<j; i++)
		arr[i] = str.substr(i*len, len)
	return arr;
}
function getFromXJFLCPWeb(str, type){
	str=str.substr(str.indexOf('<tbody id="list1">'), 150).replace(/[\r\n]+/g,'');
         
	var reg=/<td class="bold">(\d+)<\/td>[\s\S].*?<td class="kj_codes">([\d\,]+?)<\/td>[\s\S].*?/,
	match=str.match(reg);
	
		var myDate = new Date();
	var year = myDate.getFullYear();       //年   
    var month = myDate.getMonth() + 1;     //月   
    var day = myDate.getDate();            //日
	if(month < 10) month="0"+month;
	if(day < 10) day="0"+day;
	var mytime=year + "-" + month + "-" + day + " " +myDate.toLocaleTimeString();
	if(!match) throw new Error('数据不正确') ;
	try{
		var data={
			type:type,
			time:mytime,
			number:match[1].replace(/^(\d{8})(\d{2})$/, '$1$2'),
			data:match[2]
		};
		//console.log(data);
		return data;
	}catch(err){
		throw('解析数据失败');
	}
}
