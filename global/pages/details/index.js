var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        shopppingDetails:{
            id: 14965866291,
            title: "美国California baby加州宝宝镇静婴幼儿舒缓滋面霜 2OZ",
            brand: 31,
            goodstype: 9,
            keywords: null,
            format: null,
            marketprice: 129,
            ourprice: 85,
            tax: null,
            purchaselimit: null,
            prodplace: 10,
            goodspics: "http://image.huanqiuxiaozhen.com/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85/2016_4_13_1460533432437#",
            prodparams: "|||商品名称|||加洲宝宝镇静婴幼儿舒缓滋面霜2OZ|||品牌|||加州宝宝 CALIFORNIA BABY|||分类|||宝宝洗护|||规格|||57g|||产地|||美国|||保质期|||3年|||适用年龄|||新生儿及以上|||",
            detailinfo: '<img src="http://img01.miyabaobei.com/item/10/1003/1003109_detail_1.jpg" class="lazyload" width="750px" alt="loading"><span style="color:#666666;font-family:Verdana, Geneva, sans-serif;line-height:normal;background-color:#FFFFFF;"></span><img src="http://img01.miyabaobei.com/item/10/1003/1003109_detail_2.jpg" class="lazyload" width="750px" alt="loading"><span style="color:#666666;font-family:Verdana, Geneva, sans-serif;line-height:normal;background-color:#FFFFFF;"></span><img src="http://img01.miyabaobei.com/item/10/1003/1003109_detail_3.jpg" class="lazyload" width="750px" alt="loading"><span style="color:#666666;font-family:Verdana, Geneva, sans-serif;line-height:normal;background-color:#FFFFFF;"></span><img src="http://img01.miyabaobei.com/item/10/1003/1003109_detail_4.jpg" class="lazyload" width="750px" alt="loading">',
            reason: "富含可持续生长因子，深度滋润，有机安全温和。独特的镇定舒缓香薰配方，缓解皮炎瘙痒，改善肤质。天然植物，安全就是爱~植物精华镇静婴儿保湿滋润补水面霜（57g）",
            status: 2,
            createtime: null,
            updatetime: 1470388130000,
            createuser: null,
            updateuser: null,
            shelftime: 1464336462000,
            itemcode: "myam107",
            supcode: "",
            typeid: 4,
            englishname: null,
            chinesename: null,
            subdesc: null,
            parentdesc: null,
            country: "美国",
            waresname: null,
            wareid: null,
            bigname: "跨境2号仓",
            bigid: "xa",
            days: 3,
            choicepic: null,
            supname: null,
            qty: 8,
            erpqty: null,
            lockqty: null,
            recommand: "富含可持续生长因子，深度滋润，有机安全温和。独特的镇定舒缓香薰配方，缓解皮炎瘙痒，改善肤质。天然植物，安全就是爱~植物精华镇静婴儿保湿滋润补水面霜（57g）",
            bigtype: "3",
            onnew: null,
            guideroyalty: null
            }
    },

    onLoad: function(options) {

        var that = this
        var goodsPicsInfo = [];
        var goodsPicsObj = {};
        var goodspic = that.data.shopppingDetails.goodspics;
        console.log(goodspic);
        var goodspics = goodspic.substring(0, goodspic.length - 1);
        var goodspicsArr = goodspics.split("#");
        for (var i = 0; i < goodspicsArr.length; i++) {
            goodsPicsInfo.push({
                "picurl": goodspicsArr[i]
            });
        }
        that.setData({
            goodsPicsInfo: goodsPicsInfo
        })
        // 商品详情
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         //console.log(res.data.data);
        //         that.data.shopppingDetails = res.data.data;

        //         var goodsPicsInfo = [];
        //         var goodsPicsObj = {};
        //         var goodspic = res.data.data.goodspics;
        //         var goodspics = goodspic.substring(0, goodspic.length - 1);
        //         var goodspicsArr = goodspics.split("#");
        //         for (var i = 0; i < goodspicsArr.length; i++) {
        //             goodsPicsInfo.push({
        //                 "picurl": goodspicsArr[i]
        //             });
        //         }
        //         that.setData({
        //             goodsPicsInfo: goodsPicsInfo
        //         })
        //     }
        // })

    }
})
