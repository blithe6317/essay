var data = [
  {
    name: "设备1",
    id: "1",
    children: [
      {
        name: "设备1-1",
        id: "11"
      },
      {
        name: "设备1-2",
        id: "12"
      },
      {
        name: "设备1-3",
        id: "13",
        children: [
          {
            name: "设备1-3-1",
            id: "131"
          },
          {
            name: "设备1-3-2",
            id: "132"
          }
        ]
      },
      {
        name: "设备1-4",
        id: "14"
      }
    ]
  },
  {
    name: "设备2",
    id: "2"
  },
  {
    name: "设备3",
    id: "3",
    children: [
      {
        name: "设备3-1",
        id: "31"
      },
      {
        name: "设备3-2",
        id: "32"
      }
    ]
  },
  {
    name: "设备4",
    id: "4"
  }
];

(function(undefined) {
  "use strict";

  var _global;

  const icon_group = `<svg viewBox="64 64 896 896" width="1em" height="1em"><path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path></svg>`;
  const icon_arrow = `<svg class="arrow" viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>`;
  const icon_device = `<svg viewBox="64 64 896 896" width="1em" height="1em"><path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"></path></svg>`;
  const empty_img = "<img/>";

  function getTreeDom(str) {
    let dom;
    if (typeof str === "string") {
      dom = document.querySelector(str);
    } else if (str instanceof HTMLElement) {
      dom = str;
    }
    return dom;
  }
  function getParent(dom, str) {
    if (!dom || dom.nodeName === "body") {
      return null;
    }
    if (str) {
      if (str.indexOf(".") === 0) {
        if (
          dom.parentNode &&
          dom.parentNode.className &&
          typeof dom.parentNode.className === "string" &&
          dom.parentNode.className.split(" ").includes(str.slice(1))
        ) {
          return dom.parentNode;
        } else {
          return getParent(dom.parentNode, str);
        }
      } else if (str.indexOf("#") === 0) {
        if (dom.parentNode.id === str.slice(1)) {
          return dom.parentNode;
        } else {
          return getParent(dom.parentNode, str);
        }
      }
    }
    return dom.parentNode;
  }

  function Tree(options) {
    this._initTree(options);
  }
  const default_options = {};

  Tree.prototype = {
    constructor: this,
    treeDom: null,
    dataSource: null,
    _clickHandler: null,
    _initTree: function(options) {
      if (typeof options === "string") {
        this.treeDom = getTreeDom(options);
      } else if (options instanceof HTMLElement) {
        this.treeDom = options;
      } else if (typeof options === "object") {
        const { dom, data, hasRoot = true, rootText, click } = options;
        this.treeDom = getTreeDom(dom);
        if (hasRoot) {
          this.dataSource = [
            {
              name: rootText || "全部设备",
              id: -1,
              children: data
            }
          ];
        } else {
          this.dataSource = data;
        }
        if (typeof click === "function") {
          this._clickHandler = click;
        }
      }

      if (!this.treeDom) {
        throw "请确保dom存在！";
      }

      this.resetrendererTree();
      return this;
    },
    setData: function(data) {
      this.dataSource = data;
      this.resetrendererTree();
    },
    resetrendererTree: function() {
      if (!this.treeDom) {
        throw "请确保dom存在！";
      }
      if (!Array.isArray(this.dataSource)) {
        throw "数据应该是一个数组！";
      }
      const treeDom = this._getRendererDom(this.dataSource);
      const treeClassName = this.treeDom.className;
      if (treeClassName) {
        if (!treeClassName.splict(" ").includes("tree")) {
          this.treeDom.className = treeClassName + " tree";
        }
      } else {
        this.treeDom.className = "tree";
      }
      if (treeDom) {
        this.treeDom.append(treeDom);
      }
    },
    _depCount: 0,
    _getRendererDom: function(data) {
      if (data && data.length > 0) {
        const ul = document.createElement("ul");
        for (let i = 0; i < data.length; i++) {
          const li = document.createElement("li");
          const item = data[i];
          const itemName = this._rendererItemName(item);
          li.append(itemName);

          if (item.children && item.children.length > 0) {
            this._depCount++;
            const childrenDom = this._getRendererDom(item.children);
            li.append(childrenDom);
            this._depCount--;
          }
          ul.append(li);
        }
        return ul;
      }
    },

    _rendererItemName: function(data) {
      let icon = data.type === 1 ? icon_device : icon_group;
      let emptyHtml = "";
      if (this._depCount > 0) {
        for (let i = 0; i < this._depCount; i++) {
          emptyHtml += empty_img;
        }
      }
      const treeItemDiv = document.createElement("div");
      treeItemDiv.className = "tree-item";

      let arrowIcon;
      if (data.children && data.children.length > 0) {
        arrowIcon = document.createElement("i");
        arrowIcon.className = "icon-arrow expand";
        arrowIcon.innerHTML = icon_arrow;

        arrowIcon.addEventListener("click", this._toggleTreeItem);
      } else {
        arrowIcon = document.createElement("img");
      }
      let iconDevice = document.createElement("i");
      if (data.type === 1) {
        iconDevice.innerHTML = icon_device;
      } else {
        iconDevice.innerHTML = icon_group;
      }
      const treeName = document.createElement("span");
      treeName.className = "tree-name";
      treeName.innerText = data.name;

      treeName.addEventListener("click", () => {
        this._treeNameClick(data);
      });

      const treePrefix = document.createElement("span");
      treePrefix.className = "tree-prefix";
      treePrefix.innerHTML = emptyHtml;
      treePrefix.append(arrowIcon);
      treePrefix.append(iconDevice);
      treeItemDiv.append(treePrefix);
      treeItemDiv.append(treeName);

      return treeItemDiv;
    },
    _toggleTreeItem: function(e) {
      const iconArrow = getParent(e.target, ".icon-arrow");
      if (!iconArrow) return;
      if (iconArrow.className.indexOf("expand") >= 0) {
        iconArrow.className = iconArrow.className.replace("expand", "collapse");
      } else {
        iconArrow.className = iconArrow.className.replace("collapse", "expand");
      }

      const treeItem = getParent(e.target, ".tree-item");
      const ul = treeItem.parentNode.querySelector("ul");
      if (ul.className.indexOf("collapse") >= 0) {
        ul.className = ul.className.replace("collapse", "");
      } else {
        ul.className = ul.className += "collapse";
      }
    },
    _treeNameClick: function(data) {
      if (this._clickHandler && typeof this._clickHandler === "function") {
        this._clickHandler(data);
      }
    }
  };
  // 最后将插件对象暴露给全局对象
  _global = (function() {
    return this || (0, eval)("this");
  })();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Tree;
  } else if (typeof define === "function" && define.amd) {
    define(function() {
      return Tree;
    });
  } else {
    !("Tree" in _global) && (_global.Tree = Tree);
  }
})();

var tree = new Tree({
  dom: "#tree",
  data: data,
  click: function(data) {
    console.log("data:", data);
  }
});
