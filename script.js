console.log("測試");

// 建立Vue應用程式
const app = Vue.createApp({
    // 資料區域
    data(){
        // 資料物件
        return{
            // 第一個文字:值
            firstText:"嗨，這是Vue的資料!",
            textColor:"red",
            fontSize:24,
            canBuy:false,
            web:[
                "HTML","CSS","Javascript","jQuery","Vue","React","Angular","Git"
            ],
            count: 0
        }
    }
});

// 將app變數安裝到#app元素
app.mount("#app");