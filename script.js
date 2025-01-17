console.log("測試");

// 建立Vue應用程式
const app = Vue.createApp({
    // 資料區域
    data() {
        // 資料物件
        return {
            // 第一個文字:值
            firstText:"嗨，這是 Vue 的資料!",
            textColor:"red",
            fontSize: 24,
            canBuy: false,
            web:[
                "HTML", "CSS", "JavaScript", "jQuery", "Vue", "React", "Angular", "Git"
            ],
            count: 0,
            pointX: 0,pointY: 0,
            inputText: "預設文字",
            toDoList: [], addToDo: "", isCheck: false, clickPoint: 0
        }
    },
    // 方法區(函式區)
    methods: {
        // 方法名稱() {}
        test(){
            console.log("我是測試方法");
        },
        methodEvent(e) {
            console.log(e);
            console.log(e.target);
            console.log(e.x, e.y);
        },
        getPoint(e) {
            this.pointX = e.x;
            this.pointY = e.y;
        },
        addToDoList() {
            // 將 addToDo 添加到 toDoList 陣列內
            this.toDoList.push(this.addToDo);
        },
        updatePoint(e){
            this.clickPoint = e.x;
        },
        // 新的資料是第一個參數
        newAndOldPoint(newX, oldX){
            console.log("舊座標", oldX);
            console.log("新座標", newX);
        }
    },
    // 計算處理區
    computed: {
        // 需要監聽資料以及處理的內容
        // 當資料內的 isCheck 被改變時會處理
        checked() {
            if (this.isCheck) return "已經勾選";    // 如果使用者將 isCheck 打勾會執行這裡
            else return "尚未勾選";                 // 否則執行這裡
        }
    },
    watch: {
        clickPoint(newPoint) {
                console.log(newPoint);
            },
            // 記錄新與舊資料(新資料會在第一個參數)
            clickPoint:"newAndOldPoint"
        }
});

// 將 app 變數安裝到 #app 元素
app.mount("#app");