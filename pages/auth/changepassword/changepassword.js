/**
 * WeeShop 声明
 * ===========================================================
 * 网站： https://www.darlang.com
 * 标题： ECShop 小程序「weeshop 」- 基于 ECShop 为后台系统开发的非官方微信商城小程序
 * 链接： https://www.darlang.com/?p=709
 * 说明： 源码已开源并遵循 Apache 2.0 协议，你有权利进行任何修改，但请保留出处，请不要删除该注释。
 * ==========================================================
 * Copyright 2019 darlang
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ===========================================================
 */

// changepassword.js
import {PNT,setNavBarTitle,showToast} from "../../../utils/utils";
import {ChangePassword} from "../../../utils/apis";



Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loginModal = this.selectComponent("#login-modal");
    setNavBarTitle(PNT.auth.changepassword);
  },

  /**
   * 修改密码
   * @author darlang
   */
  changePassword(e) {
    let params = e.detail.value || '';
    if (params.old_password.length < 6) {
      showToast('旧密码不能少于6个字符');
      return false;
    }

    if(params.password.length < 6) {
      showToast('密码不能少于6个字符');
      return false;
    }else{
      if(params.password !== params.repassword){
        showToast('两次密码不一致');
        return false;
      }
    }

    ChangePassword(params.old_password,params.password).then(() => {
      showToast('修改成功!','success');
      setTimeout(() => {
        wx.navigateBack();
      },1200);
    });
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
});