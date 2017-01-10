var app = getApp()
Page({
    data: {
        brandList:{
            brand: [
            {
                id: 157,
                englishname: "a2 PLATINUM",
                chinesename: null,
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg",
                brief: "新西兰高端纯天然奶粉",
                branddesc: null,
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2-1.jpg ",
                ownedland: 12,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 210
            },
            {
                id: 7,
                englishname: "Aptamil",
                chinesename: "德国爱他美",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%88%B1%E4%BB%96%E7%BE%8E.jpg",
                brief: "欧洲妈妈首选",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E7%88%B1%E4%BB%96%E7%BE%8E.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 162
            },
            {
                id: 161,
                englishname: "Aptamil pro",
                chinesename: "爱他美白金",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E7%99%BD%E9%87%91%E5%A5%B6%E7%B2%89-1.jpg",
                brief: "德爱优化升级版",
                branddesc: null,
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E7%99%BD%E9%87%91%E5%A5%B6%E7%B2%89.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 270
            },
            {
                id: 158,
                englishname: "Aptamil",
                chinesename: "澳洲爱他美",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E6%BE%B3%E6%B4%B2%E7%88%B1%E4%BB%96%E7%BE%8E.jpg",
                brief: "来自新西兰天然有机牧场",
                branddesc: null,
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E6%BE%B3%E6%B4%B2%E7%88%B1%E4%BB%96%E7%BE%8E-1.jpg",
                ownedland: 12,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 176
            },
            {
                id: 8,
                englishname: "Nutrilon",
                chinesename: "荷兰牛栏",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E6%A0%8F.jpg",
                brief: "百年历史黄金奶源",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E6%A0%8F.jpg",
                ownedland: 16,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 110
            },
            {
                id: 166,
                englishname: "Cow&Cate",
                chinesename: "英国牛栏",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E8%8B%B1%E5%9B%BD%E7%89%9B%E6%A0%8Flogo.jpeg",
                brief: "欧洲高标准之选",
                branddesc: null,
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E8%8B%B1%E5%9B%BD%E7%89%9B%E6%A0%8F%E5%A4%A7%E7%89%8C%E5%9B%BE.jpeg",
                ownedland: 22,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 149
            },
            {
                id: 9,
                englishname: "HiPP",
                chinesename: "德国喜宝有机",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D.jpg",
                brief: "有机奶粉的绝对领导者",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D%E6%9C%89%E6%9C%BA.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 123
            },
            {
                id: 11,
                englishname: "HiPP",
                chinesename: "德国喜宝益生菌",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D.jpg",
                brief: "专业呵护宝宝娇嫩肠胃",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D-%E7%9B%8A%E7%94%9F%E8%8F%8C.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 140
            },
            {
                id: 10,
                englishname: "Holle",
                chinesename: "德国泓乐",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%BE%B7%E5%9B%BD%E6%B3%93%E4%B9%90.jpg",
                brief: "demeter有机认证",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E6%B3%93%E4%B9%90.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 154
            },
            {
                id: 13,
                englishname: "BELLMAY'S",
                chinesename: "澳洲贝拉米",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%B4%9D%E6%8B%89%E7%B1%B3.jpg",
                brief: "全球三大有机奶粉之一",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%B4%9D%E6%8B%89%E7%B1%B3.jpg",
                ownedland: 1,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 240
            },
            {
                id: 14,
                englishname: "Hero Baby",
                chinesename: "荷兰美素",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%8D%B7%E5%85%B0%E7%BE%8E%E7%B4%A0.jpg",
                brief: "荷兰皇家乳液",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%BE%8E%E7%B4%A0.jpg",
                ownedland: 16,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 117
            },
            {
                id: 12,
                englishname: "Topfer",
                chinesename: "德国特福芬",
                logo: "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%B9%E7%A6%8F%E8%8A%AC.jpg",
                brief: "百年有机奶粉",
                branddesc: "",
                pic: "http://image.huanqiuxiaozhen.com/%E4%BA%BA%E6%B0%94%E5%93%81%E7%89%8C%E5%9B%BE%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%B9%E7%A6%8F%E8%8A%AC.jpg",
                ownedland: 18,
                country: null,
                vid: 25,
                bigpic: "http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86banner%2F%E5%A5%B6%E7%B2%89.jpg",
                typeid: 1,
                minprice: 164
            }
            ],
            types: [
            {
                id: 1,
                parentdesc: "宝宝奶粉",
                subid: 1,
                subdesc: "牛奶粉",
                parentpic: null,
                subpic: "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E5%A5%B6%E7%B2%89.jpg",
                parentorder: 1,
                suborder: 1,
                count: 0
            },
            {
                id: 1,
                parentdesc: "宝宝奶粉",
                subid: 2,
                subdesc: "羊奶粉",
                parentpic: null,
                subpic: "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%BE%8A%E5%A5%B6%E7%B2%89.jpg",
                parentorder: 1,
                suborder: 2,
                count: 0
            },
            {
                id: 1,
                parentdesc: "宝宝奶粉",
                subid: 3,
                subdesc: "特配奶粉",
                parentpic: null,
                subpic: "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%B9%E6%AE%8A%E9%85%8D%E6%96%B9.jpg",
                parentorder: 1,
                suborder: 3,
                count: 0
            }
            ]
        }
    },
    onLoad: function(options) {

        var that = this
        
        // wx.request({
        //     url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             brandList: res.data.data
        //         });
        //     }
        // })
    }

})