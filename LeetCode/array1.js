/**从排序数组中删除重复 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/**
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {};

/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  for (var i = 0; i < count; i++) {
    nums.push(0);
  }
};

/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var arr = nums.splice(nums.length - k, k);
  nums.unshift(...arr);
};

/**
 * 旋转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  debugger;
  var len = s.length;
  for (var i = len - 1; i >= 0; i--) {
    s.push(s[i]);
  }
  s.splice(0, len);
  return s;
};

{
  let x = 1;
  function f(
    x,
    y = () => {
      console.log(x); //1
      x = 2;
    }
  ) {
    x = 3;
    y();
  }
  f();
  console.log(x); // 3
}

const input = [
  {
    province: "浙江",
    city: "杭州",
    name: "西湖"
  },
  {
    province: "四川",
    city: "成都",
    name: "锦里"
  },
  {
    province: "四川",
    city: "成都",
    name: "方所"
  },
  {
    province: "四川",
    city: "阿坝",
    name: "九寨沟"
  }
];

const output = [
  {
    value: "浙江",
    children: [
      {
        value: "杭州",
        children: [{ value: "西湖" }]
      }
    ]
  },
  {
    value: "四川",
    children: [
      { value: "成都", children: [{ value: "锦里" }, { value: "方所" }] },
      { value: "阿坝", children: [{ value: "九寨沟" }] }
    ]
  }
];
function test(input) {
  var data = [];
  input.forEach(item => {
    let obj, cityObj, naObj;
    obj = {
      value: item.province
    };
    if (item.city) {
      cityObj = {
        value: item.city
      };
      obj.children = [cityObj];
    }
    if (item.name) {
      naObj = {
        value: item.name
      };
      cityObj.children = [naObj];
    }

    addChidren(data, obj);
  });
  return data;
}
function addChidren(nodes, obj) {
  var node =
    nodes.length > 0 ? nodes.filter(item => item.value === obj.value) : [];
  if (node.length > 0) {
    addChidren(node[0].children, obj.children[0]);
  } else {
    nodes.push(obj);
  }
}

var tabs = [
  {
    id: 0, // 期望总览的id是一个固定的值
    name: "总览", // 模块id名称
    isDefault: 0 // 是否为默认 0 否  1 是
  },
  {
    id: 1,
    name: "自定义模块",
    isDefault: 0,
    card: {
      name: "看板1",
      chartType: "line", // 图表类型 ring 环图 line 线图 bar 柱状图 table 表格  screw 螺旋图
      top: 10, // top 排名
      timeScope: 1800, // 时间范围
      field1: "", // 统计维度 第一级
      field2: "" // 统计维度 第二级
    }
  }
];

var d = [
  {
    id: 1,
    name: "看板1",
    chartType: "line", // 图表类型 ring 环图 line 线图 bar 柱状图 table 表格  screw 螺旋图
    top: 10, // top 排名
    timeScope: 1800, // 时间范围
    field1: "", // 统计维度 第一级
    field2: "" // 统计维度 第二级
  }
];

var l = [
  {
    id: 1, // 看板id
    layout: "{x:0,y:0,h:1,w:1,size}" //位置信息 为字符串 由前端定义
  }
];
var t = {
  id: 1, // 模块id
  cards: [
    {
      id: 1, // 看板id
      layout: "{x:0,y:0,h:1,w:1,size}" //位置信息 为字符串 由前端定义
    }
  ] // "tabs"
};

var y = {
  id: 0,
  key: "tabs",
  data: "[{id:1,key:'tabs_2',...}]" // 由前端定义
};
var r = {
  key: "tab_1_card_1",
  data: "{id:1,....}"
};
// /custom-key-value-pair

var d = {
  result: {
    high: 0,
    total: 3,
    middle: 0,
    critical: 0,
    low: 3
  },
  total: 3
};
