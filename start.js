//声明式渲染
const component = new Vue({
    el: '#component',
    data: {
        message: 'hello,vue(declarative way)'
    }
});
const interpolation = new Vue({
    el: "#interpolation",
    data: {
        url: 'https://www.github.com',
        school: {
            name: 'foo',
            url: 'https://www.zhihu.com'
        }
    }
}
)
//单向绑定（只能由用户输入【加载时间】改变应用状态）
const oneWay = new Vue({
    el: '#oneWay',
    data: {
        message: '页面加载的时间为' + new Date().toLocaleString()
    }
});
//条件
const component3 = new Vue({
    el: '#component3',
    data: {
        seen: true
    }
});
//循环
const component4 = new Vue({
    el: '#component4',
    data: {
        items: [{
            text: '第1个条目'
        },
        {
            text: '第2个条目'
        },
        {
            text: '第3个条目'
        }
        ]
    }
});
//表单输入和应用状态之间的双向绑定
const twoWay = new Vue({
    el: '#twoWay',
    data: {
        message: 'twoWay-bind'
    }
});
//父组件与子组件，通过props接口解耦
Vue.component('food-entry', {
    props: ['food'],
    template: '<li>{{food.text}}</li>'
});
const component7 = new Vue({
    el: '#component7',
    data: {
        foodList: [{
            id: '0',
            text: 'rice'
        }, {
            id: '1',
            text: 'tomato'
        }, {
            id: '2',
            text: 'hanberg'
        }]
    }
})

const component8 = new Vue({
    el: '#component8',
    // The abbreviation of    data:function(){
    // do NOT use arrow => 
    data() {
        console.log('*', this)
        return {
            content: 'CONTENT'
        }
    }
});

console.log(component8)

    // If you want to manually mount Vue component on DOM tree element.
    // component7.$mount("#component7");