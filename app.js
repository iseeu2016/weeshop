// app.js
const util = require('./utils/util.js');
var openid = '',session_key = '',loginCode = '';

App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },

  getUserInfo: function(cb) {
    var that = this;
    if(this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    }else{
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo;
          typeof cb == "function" && cb(that.globalData.userInfo);
        }
      });
    }
  },

  getSystemInfo: function(cb){
      var self = this;
    if(self.globalData.systemInfo){
      typeof cb == "function" && cb(self.globalData.systemInfo);
    }else{
      wx.getSystemInfo({
        success: function(res) {
          self.globalData.systemInfo = res;
          typeof cb == "function" && cb(self.globalData.systemInfo);
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
});