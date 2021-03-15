$(function () {
    //定义全局信息一览相关控件
    var data = [{ "id": "用户id", "name": "用户名", "Email": "用户邮箱" }, { "id": "145", "name": "zhang", "Email": "2510906118@qq.com" }, { "id": "160", "name": "li", "Email": "1610906118@qq.com" }];
    var room_cahrt = "<div id='room' class='room_chart'></div>";
    var user_cahrt = "<div id='user' class='user_chart'></div>";
    var vip_table = "<table id='tab' class='table table-hover'></table>";
    var vip_table_thead = "<table class='table table-hover'><thead id='thd'></thead></table>";
    var vip_heard_div = "<div id='vipHeard'></div>";
    var vip_context_div = "<div id='vipContext'></div>";
    var card_right = document.getElementById("card_right");
    // <div class="dropdown">
    //     <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    //         Dropdown button
    // </button>
    //     <div class="dropdown-menu">
    //         <a class="dropdown-item" href="#">Link 1</a>
    //         <a class="dropdown-item" href="#">Link 2</a>
    //         <a class="dropdown-item" href="#">Link 3</a>
    //     </div>
    // </div>
    //定义导航栏用于搜索楼层
    var nav_but = "<div id='nav_but' class='dropdown'></div>";
    var but = "<button type='button' class='btn btn-primary dropdown-toggle'data-toggle='dropdown'>选择楼层</button>";
    var but_select = "<div id='nav_but_select' class='dropdown-menu'></div>"

    //定义搜索栏
    var sou = "<div id='sou'></div>";
    var sou_input = "<input id='sou_input' type='text' class='form-control'>";
    var sou_but = "<button id='sou_but' type='button' class='btn btn-primary'>输入房间号</button>";

    //定义房间一览相关控件
    var data_room = [
        { "id_room": "房间号", "stat_room": "房间状态", "type_room": "房间类型", "local_room": "房间位置", "price_room": "房间价格" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" },
        { "id_room": "103", "stat_room": "0", "type_room": "0", "local_room": "一楼103", "price_room": "100" }
    ];
    var nav_room = "<div id='nav'></div>";
    var table_heard_room = "<table class='table table-hover'><thead id='thd_room'></thead></table>";
    var table_context_room = "<table id='tab_room' class='table table-hover'></table>";
    var table_heard_room_div = "<div id='thrd'></div>";
    var table_context_room_div = "<div id='tcrd'></div>";



    //添加房间画面组件定义
    // <div class="input-group mb-3 input-group-sm">
    //   <div class="input-group-prepend">
    //     <span class="input-group-text">Small</span>
    //   </div>
    //   <input type="text" class="form-control">
    // </div>
    var tianjia = "<div id='tianjia'></div>"
    var tianjia_room_id_div = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>房间号</span></div><input type='text' class='form-control'></input></div > ";
    var tianjia_room_type_div = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>房间类型</span></div><input type='text' class='form-control'></input></div > ";
    var tianjia_room_local_div = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>房间具体位置</span></div><input type='text' class='form-control'></input></div > ";
    var tianjia_room_price_div = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>房间价格</span></div><input type='text' class='form-control'></input></div > ";

    //开房画面组件定义
    var kaifang = "<div id='kaifang'></div>"
    var kaifang_name = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>姓名</span></div><input type='text' class='form-control'></input></div > ";
    var kaifang_sex = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>性别</span></div><input type='text' class='form-control'></input></div > ";
    var kaifang_idcard = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>身份证号</span></div><input type='text' class='form-control'></input></div > ";
    var kaifang_tel = "<div class='input-group mb-3 input-group-sm'><div class='input-group-prepend'><span class='input-group-text'>电话</span></div><input type='text' class='form-control'></input></div > ";


    //退房画面组件定义
    var tuifang = "<div id='tuifang'></div>";
    var tuifang_table_heard = "<table class='table table-hover'><thead id='tuifang_table_heard'></thead></table>";
    var tuifang_table_context = "<table id='tuifang_table_context' class='table table-hover'></table>";
    var tuifang_heard_div = "<div id='thd'></div>";
    var tuifang_context_div = "<div id='tcd'></div>";
    //退房画面渲染方法
    function TuiFang() {
        $("#rightDiv").append(tuifang).append(tuifang_heard_div).append(tuifang_context_div);
        $("#tuifang").append(sou).append(nav_but);
        $("#nav_but").append(but).append(but_select);
        $("#sou").append(sou_but).append(sou_input);
        for (var i = 0; i < 5; i++) {
            console.log("导航栏");
            $("#nav_but_select").append("<a class='dropdown-item' href='#'>" + (i + 1) + "楼</a>");
        }

        $("#thd").append(tuifang_table_heard);
        $("#tcd").append(tuifang_table_context);
        for (var i = 0; i < data_room.length; i++) {
            console.log(111);
            console.log(data_room[i]['id_room']);
            console.log(data_room[i]['stat_room']);
            console.log(data_room[i]['type_room']);
            console.log(data_room[i]['local_room']);
            console.log(data_room[i]['price_room']);
            if (i == 0) {
                $("#tuifang_table_heard").append("<tr id=" + i + "_room_row></tr>")
                $("#" + i + "_room_row").append("<td>" + data_room[i]['id_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['stat_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['type_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['local_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['price_room'] + "</td>");
                $("#" + i + "_room_row").append("<td id=" + i + ">" + "操作" + "</td>");
                continue;
            }
            $("#tuifang_table_context").append("<tr id=" + i + "_room_row></tr>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['id_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['stat_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['type_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['local_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['price_room'] + "</td>");
            $("#" + i + "_room_row").append("<td id=" + i + "></td>");
            $("#" + i).append("<button>退房</button>");
        }

    }


    //定义用户一览相关组件

    var user_data = [{ "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }, { "user_name": "用户名", "user_tel": "电话", "user_email": "邮箱", "user_type": "用户类型", "user_caozuo": "操作" }];
    var user_nav = "<div id='user_nav'></div>";
    var user_table_heard_div = "<div id='user_table_heard_div'></div>";
    var user_table_context_div = "<div id='user_table_context_div'></div>";
    var user_table_heard = "<table class='table table-hover'><thead id='user_table_heard'></thead></table>";
    var user_table_context = "<table id='user_table_context' class='table table-hover'></table>";
    var user_sou_input = "<input id='user_sou_input' type='text' class='form-control'>";
    var user_sou_but = "<button id='user_sou_but' type='button' class='btn btn-primary'>输入用户名</button>";
    var user_but_select = "<div id='user_nav_but_select' class='dropdown-menu'></div>";
    var user_sou = "<div id='user_sou'></div>";
    var user_nav_but = "<div id='user_nav_but' class='dropdown'></div>";
    var user_but = "<button type='button' class='btn btn-primary dropdown-toggle'data-toggle='dropdown'>用户类型</button>";


    //定义菜品相关组件
    var caidan_data = [{ "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }, { "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }, { "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }, { "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }, { "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }, { "cai_name": "菜名", "cai_price": "价格", "cai_miaoshu": "描述" }];
    var caidan_nav = "";
    var caidan_table_heard_div = "";
    var caidan_table_context_div = "";
    var caidan_table_heard = "";
    var caidan_table_context = "";



    //用户一览画面渲染方法
    function UserYilan() {
        $("#rightDiv").append(user_nav).append(user_table_heard_div).append(user_table_context_div);
        $("#user_table_heard_div").append(user_table_heard);
        $("#user_table_context_div").append(user_table_context);
        $("#user_nav").append(user_sou).append(user_nav_but);
        $("#user_nav_but").append(user_but).append(user_but_select);
        $("#user_sou").append(user_sou_but).append(user_sou_input);
        for (var i = 0; i < 2; i++) {
            console.log("导航栏");
            if (i == 0) {
                $("#user_nav_but_select").append("<a class='dropdown-item' href='#'>普通用户</a>");
            } else if (i == 1) {
                $("#user_nav_but_select").append("<a class='dropdown-item' href='#'>vip用户</a>");
            }
        }
        for (var i = 0; i < user_data.length; i++) {
            if (i == 0) {
                $("#user_table_heard").append("<tr id=" + i + "_room_row></tr>")
                $("#" + i + "_room_row").append("<td>" + user_data[i]['user_name'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + user_data[i]['user_tel'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + user_data[i]['user_mail'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + user_data[i]['user_type'] + "</td>");
                $("#" + i + "_room_row").append("<td id=" + i + ">" + "操作" + "</td>");
                continue;
            }
            $("#user_table_context").append("<tr id=" + i + "_room_row></tr>");
            $("#" + i + "_room_row").append("<td>" + user_data[i]['user_name'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + user_data[i]['user_tel'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + user_data[i]['user_mail'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + user_data[i]['user_type'] + "</td>");
            $("#" + i + "_room_row").append("<td id=" + i + "></td>");
            $("#" + i).append("<button>删除</button>");
        }

    }

    //开房画面渲染方法
    function KaiFang() {
        $("#rightDiv").append(kaifang).append("<button type='button' class='btn btn-primary '>开房</button>").append("<button type='button' class='btn btn-primary '>清空</button>");
        $("#kaifang").append(kaifang_name).append(kaifang_sex).append(kaifang_idcard).append(kaifang_tel);

    }

    //添加房间画面渲染方法
    function AddRoom() {
        $("#rightDiv").append(tianjia).append("<button type='button' class='btn btn-primary '>添加</button>").append("<button type='button' class='btn btn-primary '>清空</button>");
        $("#tianjia").append(tianjia_room_id_div).append(tianjia_room_local_div).append(tianjia_room_price_div).append(tianjia_room_type_div);

    }





    //渲染房间一览画面方法
    function OneLookRoom() {
        $("#rightDiv").append(nav_room).append(table_heard_room_div).append(table_context_room_div);
        $("#nav").append(sou).append(nav_but);
        $("#nav_but").append(but).append(but_select);
        $("#sou").append(sou_but).append(sou_input);
        for (var i = 0; i < 5; i++) {
            console.log("导航栏");
            $("#nav_but_select").append("<a class='dropdown-item' href='#'>" + (i + 1) + "楼</a>");
        }

        $("#thrd").append(table_heard_room);
        $("#tcrd").append(table_context_room);
        for (var i = 0; i < data_room.length; i++) {
            console.log(111);
            console.log(data_room[i]['id_room']);
            console.log(data_room[i]['stat_room']);
            console.log(data_room[i]['type_room']);
            console.log(data_room[i]['local_room']);
            console.log(data_room[i]['price_room']);
            if (i == 0) {
                $("#thd_room").append("<tr id=" + i + "_room_row></tr>")
                $("#" + i + "_room_row").append("<td>" + data_room[i]['id_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['stat_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['type_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['local_room'] + "</td>");
                $("#" + i + "_room_row").append("<td>" + data_room[i]['price_room'] + "</td>");
                continue;
            }
            $("#tab_room").append("<tr id=" + i + "_room_row></tr>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['id_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['stat_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['type_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['local_room'] + "</td>");
            $("#" + i + "_room_row").append("<td>" + data_room[i]['price_room'] + "</td>");
        }

    }
    loadYilan();
    //渲染全局信息一览画面方法
    function loadYilan() {
        $("#rightDiv").append(room_cahrt).append(user_cahrt).append(vip_heard_div).append(vip_context_div);
        $("#vipHeard").append(vip_table_thead);
        $("#vipContext").append(vip_table);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]["id"]);
            console.log(data[i]["name"]);
            console.log(data[i]["Email"]);
            if (i == 0) {
                $("#thd").append("<tr id='" + (i + 1) + "row'></tr>");
                $("#" + (i + 1) + "row").append("<td>" + data[i]["id"] + "</td>").append("<td>" + data[i]["name"] + "</td>").append("<td>" + data[i]["Email"] + "</td>");
                console.log(111);
                continue;
            }
            $("#tab").append("<tr id='" + (i + 1) + "row'></tr>");
            $("#" + (i + 1) + "row").append("<td>" + data[i]["id"] + "</td>").append("<td>" + data[i]["name"] + "</td>").append("<td>" + data[i]["Email"] + "</td>");
        }

        //实现Echarts柱状图
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('room'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '总用户数量'
            },
            tooltip: {},
            legend: {
                data: ['数量']
            },
            xAxis: {
                data: ["管理员", "普通用户", "VIP用户", "员工"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [5, 20, 36, 10]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        var myChart_room = echarts.init(document.getElementById('user'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '房间信息'
            },
            tooltip: {},
            legend: {
                data: ['数量']
            },
            xAxis: {
                data: ["房间总数量", "未入住", "已入住", "维护中"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [5, 20, 36, 10]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart_room.setOption(option);


    }



    //全局一览点击后会显示全局信息一览
    $("#yilan").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        loadYilan();

    })
    //点击房间一览后会显示房间一览界面
    $("#fangjian_yilan").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        OneLookRoom();
        // $("#rightDiv").append("<div>房间一览</div>");
    })

    //点击添加房间显示相关页面
    $("#tianjia_fangjian").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        AddRoom();
        // $("#rightDiv").append("<div>添加房间</div>");
    })
    //点击开房显示相关页面
    $("#kai_fang").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        // $("#rightDiv").append("<div>开房</div>");
        KaiFang();
    })
    //点击退房显示相关页面
    $("#tui_fang").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        TuiFang();
        // $("#rightDiv").append(card_right);
        // $("#rightDiv").append("<div>退房</div>");
    })

    //点击用户一览显示相关画面
    $("#yh_yilan").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        UserYilan();
        // $("#rightDiv").append("<div>用户一览</div>");
    })

    //点击用户添加显示相关画面
    $("#yh_tianjia").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>添加用户</div>");
    })
    //菜品一览显示画面
    $("#caipin_yilan").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>菜品一览</div>");
    })
    //添加菜品显示画面
    $("#tianjia_caipin").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>添加菜品</div>");
    })

    //员工一览显示画面
    $("#yg_yilan").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>员工一览</div>");
    })

    //员工录入显示画面
    $("#xyg_luru").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>员工录入</div>");
    })


    //员工离职显示画面
    $("#yg_lizhi").click(function () {
        $("#rightDiv").empty();
        $("#rightDiv").append(card_right);
        $("#rightDiv").append("<div>员工离职</div>");
    })


})



