<template>
  <div>4
    {{goods}}
  <div class="top">
    <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
    <div class="search">
      <form>
        <input type="text" value="" class="s_ipt" />
        <input type="submit" value="搜索" class="s_btn" />
      </form>
      <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
    </div>
    <div class="i_car">
      <div class="car_t">购物车 [ <span>3</span> ]</div>
      <div class="car_bg">

        <div>
          <router-link :to="{path:  '/Buycar'}">购物车结算</router-link>
        </div>
      </div>
    </div>
  </div>
  <!--End Header End-->
  <!--Begin Menu Begin-->
  <div class="menu_bg">
    <div class="menu">
      <!--Begin 商品分类详情 Begin-->
      <div class="nav">
        <div class="nav_t">全部商品分类</div>
        <div class="leftNav none">
          <ul>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav1.png" /></span>
                <span class="fl">进口食品、生鲜</span>
              </div>
              <div class="zj">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav2.png" /></span>
                <span class="fl">食品、饮料、酒</span>
              </div>
              <div class="zj" style="top:-40px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力2</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav3.png" /></span>
                <span class="fl">母婴、玩具、童装</span>
              </div>
              <div class="zj" style="top:-80px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力3</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav4.png" /></span>
                <span class="fl">家居、家庭清洁、纸品</span>
              </div>
              <div class="zj" style="top:-120px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力4</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav5.png" /></span>
                <span class="fl">美妆、个人护理、洗护</span>
              </div>
              <div class="zj" style="top:-160px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力5</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav6.png" /></span>
                <span class="fl">女装、内衣、中老年</span>
              </div>
              <div class="zj" style="top:-200px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力6</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav7.png" /></span>
                <span class="fl">鞋靴、箱包、腕表配饰</span>
              </div>
              <div class="zj" style="top:-240px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力7</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav8.png" /></span>
                <span class="fl">男装、运动</span>
              </div>
              <div class="zj" style="top:-280px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力8</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav9.png" /></span>
                <span class="fl">手机、小家电、电脑</span>
              </div>
              <div class="zj" style="top:-320px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力9</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
            <li>
              <div class="fj">
                <span class="n_img"><span></span><img src="../assets/images/nav10.png" /></span>
                <span class="fl">礼品、充值</span>
              </div>
              <div class="zj" style="top:-360px;">
                <div class="zj_l">
                  <div class="zj_l_c">
                    <h2>零食 / 糖果 / 巧克力10</h2>
                    <a href="#">坚果</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">巧克力</a>|
                    <a href="#">口香糖</a>|<a href="#">海苔</a>|<a href="#">鱼干</a>|<a href="#">蜜饯</a>|<a href="#">红枣</a>|
                    <a href="#">蜜饯</a>|<a href="#">红枣</a>|<a href="#">牛肉干</a>|<a href="#">蜜饯</a>|
                  </div>
                </div>
                <div class="zj_r">
                  <a href="#"><img src="../assets/images/n_img1.jpg" width="236" height="200" /></a>
                  <a href="#"><img src="../assets/images/n_img2.jpg" width="236" height="200" /></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--End 商品分类详情 End-->
      <ul class="menu_r">
        <li><a href="Index.html">首页</a></li>
        <li><a href="Food.html">美食</a></li>
        <li><a href="Fresh.html">生鲜</a></li>
        <li><a href="HomeDecoration.html">家居</a></li>
        <li><a href="SuitDress.html">女装</a></li>
        <li><a href="MakeUp.html">美妆</a></li>
        <li><a href="Digital.html">数码</a></li>
        <li><a href="GroupBuying.html">团购</a></li>
      </ul>
      <div class="m_ad">中秋送好礼！</div>
    </div>
  </div>
  <!--End Menu End-->
  <div class="i_bg">
    <div class="postion">
      <span class="fl">全部 > 美妆个护 > 香水 > 迪奥 > 迪奥真我香水</span>
    </div>
    <div class="content">

      <div id="tsShopContainer">
        <div id="tsImgS"><a href="images/p_big.jpg" title="Images" class="MagicZoom" id="MagicZoom"><img src="../assets/images/p_big.jpg" width="390" height="390" /></a></div>
        <div id="tsPicContainer">
          <div id="tsImgSArrL" onclick="tsScrollArrLeft()"></div>
          <div id="tsImgSCon">
            <ul>
              <li onclick="showPic(0)" rel="MagicZoom" class="tsSelectImg"><img src="../assets/images/ps1.jpg" tsImgS="images/ps1.jpg" width="79" height="79" /></li>
              <li onclick="showPic(1)" rel="MagicZoom"><img src="../assets/images/ps2.jpg" tsImgS="images/ps2.jpg" width="79" height="79" /></li>
              <li onclick="showPic(2)" rel="MagicZoom"><img src="../assets/images/ps3.jpg" tsImgS="images/ps3.jpg" width="79" height="79" /></li>
              <li onclick="showPic(3)" rel="MagicZoom"><img src="../assets/images/ps4.jpg" tsImgS="images/ps4.jpg" width="79" height="79" /></li>
              <li onclick="showPic(4)" rel="MagicZoom"><img src="../assets/images/ps1.jpg" tsImgS="images/ps1.jpg" width="79" height="79" /></li>
              <li onclick="showPic(5)" rel="MagicZoom"><img src="../assets/images/ps2.jpg" tsImgS="images/ps2.jpg" width="79" height="79" /></li>
              <li onclick="showPic(6)" rel="MagicZoom"><img src="../assets/images/ps3.jpg" tsImgS="images/ps3.jpg" width="79" height="79" /></li>
              <li onclick="showPic(7)" rel="MagicZoom"><img src="../assets/images/ps4.jpg" tsImgS="images/ps4.jpg" width="79" height="79" /></li>
            </ul>
          </div>
          <div id="tsImgSArrR" onclick="tsScrollArrRight()"></div>
        </div>
        <img class="MagicZoomLoading" width="16" height="16"  alt="Loading..." />
      </div>
      <div class="pro_des" >
        <div class="des_name">
          <p>{{goods_name}}</p>
          “开业巨惠，北京专柜直供”，不光低价，“真”才靠谱！
        </div>
        <div class="des_price">
          <span v-for="response in price">
            <b>{{response.price}}</b><br />
          </span>
          消费积分：<span>28R</span>
        </div>
        <div class="des_choice" v-for="(value,key) in goods">
          <span class="fl">{{key}} ：</span>
          <label>
            <span v-for="val in value">
              <input class="checked" type="radio" v-bind:id="val[0]" v-bind:value="val[1]" v-bind:name="key" @click="getradio">{{val[0]}}
            </span>
          </label>
        </div>
        <div class="des_share">
          <div class="d_sh">
            分享
            <div class="d_sh_bg">
              <a href="#"><img src="../assets/images/sh_1.gif" /></a>
              <a href="#"><img src="../assets/images/sh_2.gif" /></a>
              <a href="#"><img src="../assets/images/sh_3.gif" /></a>
              <a href="#"><img src="../assets/images/sh_4.gif" /></a>
              <a href="#"><img src="../assets/images/sh_5.gif" /></a>
            </div>
          </div>
<!--          <div class="d_care"><a onclick="ShowDiv('MyDiv','fade')">关注商品</a></div>-->
        </div>
        <div class="des_join">
          <div class="j_nums">
            <input type="text" value="1" name="" id="num" class="n_ipt" />
            <input type="button" value="" onclick="addUpdate(jq(this));" class="n_btn_1" />
            <input type="button" value="" onclick="jianUpdate(jq(this));" class="n_btn_2" />
          </div>
          <span class="fl"><a @click="cat"><img src="../assets/images/j_car.png" /></a></span>
        </div>
      </div>
      <div class="s_brand">
        <div class="s_brand_img"><img src="../assets/images/sbrand.jpg" width="188" height="132" /></div>
        <div class="s_brand_c"><a href="#">进入品牌专区</a></div>
      </div>
    </div>
    <div class="content mar_20">
      <div class="l_history">
        <div class="fav_t">用户还喜欢</div>
        <ul>
          <li>
            <div class="img"><a href="#"><img src="../assets/images/his_1.jpg" width="185" height="162" /></a></div>
            <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
            <div class="price">
              <font>￥<span>368.00</span></font> &nbsp; 18R
            </div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/images/his_2.jpg" width="185" height="162" /></a></div>
            <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
            <div class="price">
              <font>￥<span>768.00</span></font> &nbsp; 18R
            </div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/images/his_3.jpg" width="185" height="162" /></a></div>
            <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
            <div class="price">
              <font>￥<span>680.00</span></font> &nbsp; 18R
            </div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/images/his_4.jpg" width="185" height="162" /></a></div>
            <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
            <div class="price">
              <font>￥<span>368.00</span></font> &nbsp; 18R
            </div>
          </li>
          <li>
            <div class="img"><a href="#"><img src="../assets/images/his_5.jpg" width="185" height="162" /></a></div>
            <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
            <div class="price">
              <font>￥<span>368.00</span></font> &nbsp; 18R
            </div>
          </li>
        </ul>
      </div>
      <div class="l_list">
        <div class="des_border">
          <div class="des_tit">
            <ul>
              <li class="current">推荐搭配</li>
            </ul>
          </div>
          <div class="team_list">
            <div class="img"><a href="#"><img src="../assets/images/mat_1.jpg" width="160" height="140" /></a></div>
            <div class="name"><a href="#">倩碧补水组合套装8折促销</a></div>
            <div class="price">
              <div class="checkbox"><input type="checkbox" name="zuhe" checked="checked" /></div>
              <font>￥<span>768.00</span></font> &nbsp; 18R
            </div>
          </div>
          <div class="team_icon"><img src="../assets/images/jia_b.gif" /></div>
          <div class="team_list">
            <div class="img"><a href="#"><img src="../assets/images/mat_2.jpg" width="160" height="140" /></a></div>
            <div class="name"><a href="#">香奈儿邂逅清新淡香水50ml</a></div>
            <div class="price">
              <div class="checkbox"><input type="checkbox" name="zuhe" /></div>
              <font>￥<span>749.00</span></font> &nbsp; 18R
            </div>
          </div>
          <div class="team_icon"><img src="../assets/images/jia_b.gif" /></div>
          <div class="team_list">
            <div class="img"><a href="#"><img src="../assets/images/mat_3.jpg" width="160" height="140" /></a></div>
            <div class="name"><a href="#">香奈儿邂逅清新淡香水50ml</a></div>
            <div class="price">
              <div class="checkbox"><input type="checkbox" name="zuhe" checked="checked" /></div>
              <font>￥<span>749.00</span></font> &nbsp; 18R
            </div>
          </div>
          <div class="team_icon"><img src="../assets/images/equl.gif" /></div>
          <div class="team_sum">
            套餐价：￥<span>1517</span><br />
            <input type="text" value="1" class="sum_ipt" /><br />
            <a href="#"><img src="../assets/images/z_buy.gif" /></a>
          </div>

        </div>
        <div class="des_border">
          <div class="des_tit">
            <ul>
              <li class="current"><a href="#p_attribute">商品属性</a></li>
              <li><a href="#p_details">商品详情</a></li>
              <li><a href="#p_comment">商品评论</a></li>
            </ul>
          </div>
          <div class="des_con" id="p_attribute">

            <table border="0" align="center" style="width:100%; font-family:'宋体'; margin:10px auto;" cellspacing="0" cellpadding="0">
              <tr>
                <td>商品名称：迪奥香水</td>
                <td>商品编号：1546211</td>
                <td>品牌： 迪奥（Dior）</td>
                <td>上架时间：2015-09-06 09:19:09 </td>
              </tr>
              <tr>
                <td>商品毛重：160.00g</td>
                <td>商品产地：法国</td>
                <td>香调：果香调香型：淡香水/香露EDT</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>容量：1ml-15ml </td>
                <td>类型：女士香水，Q版香水，组合套装</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="des_border" id="p_details">
          <div class="des_t">商品详情</div>
          <div class="des_con">
            <table border="0" align="center" style="width:745px; font-size:14px; font-family:'宋体';" cellspacing="0" cellpadding="0">
              <tr>
                <td width="265"><img src="../assets/images/de1.jpg" width="206" height="412" /></td>
                <td>
                  <b>迪奥真我香水(Q版)</b><br />
                  【商品规格】：5ml<br />
                  【商品质地】：液体<br />
                  【商品日期】：与专柜同步更新<br />
                  【商品产地】：法国<br />
                  【商品包装】：无外盒 无塑封<br />
                  【商品香调】：花束花香调<br />
                  【适用人群】：适合女性（都市白领，性感，有女人味的成熟女性）<br />
                </td>
              </tr>
            </table>

            <p align="center">
              <img src="../assets/images/de2.jpg" width="746" height="425" /><br /><br />
              <img src="../assets/images/de3.jpg" width="750" height="417" /><br /><br />
              <img src="../assets/images/de4.jpg" width="750" height="409" /><br /><br />
              <img src="../assets/images/de5.jpg" width="750" height="409" />
            </p>

          </div>
        </div>

        <div class="des_border" id="p_comment">
          <div class="des_t">商品评论</div>

          <table border="0" class="jud_tab" cellspacing="0" cellpadding="0">
            <tr>
              <td width="175" class="jud_per">
                <p>80.0%</p>好评度
              </td>
              <td width="300">
                <table border="0" style="width:100%;" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="90">好评<font color="#999999">（80%）</font></td>
                    <td><img src="../assets/images/pl.gif" align="absmiddle" /></td>
                  </tr>
                  <tr>
                    <td>中评<font color="#999999">（20%）</font></td>
                    <td><img src="../assets/images/pl.gif" align="absmiddle" /></td>
                  </tr>
                  <tr>
                    <td>差评<font color="#999999">（0%）</font></td>
                    <td><img src="../assets/images/pl.gif" align="absmiddle" /></td>
                  </tr>
                </table>
              </td>
              <td width="185" class="jud_bg">
                购买过雅诗兰黛第六代特润精华露50ml的顾客，在收到商品才可以对该商品发表评论
              </td>
              <td class="jud_bg">您可对已购买商品进行评价<br /><a href="#"><img src="../assets/images/btn_jud.gif" /></a></td>
            </tr>
          </table>

          <table border="0" class="jud_list" style="width:100%; margin-top:30px;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td width="160"><img src="../assets/images/peo1.jpg" width="20" height="20" align="absmiddle" />&nbsp;向死而生</td>
              <td width="180">
                颜色分类：<font color="#999999">粉色</font> <br />
                型号：<font color="#999999">50ml</font>
              </td>
              <td>
                产品很好，香味很喜欢，必须给赞。 <br />
                <font color="#999999">2015-09-24</font>
              </td>
            </tr>
            <tr valign="top">
              <td width="160"><img src="../assets/images/peo2.jpg" width="20" height="20" align="absmiddle" />&nbsp;就是这么想的</td>
              <td width="180">
                颜色分类：<font color="#999999">粉色</font> <br />
                型号：<font color="#999999">50ml</font>
              </td>
              <td>
                送朋友，她很喜欢，大爱。 <br />
                <font color="#999999">2015-09-24</font>
              </td>
            </tr>
            <tr valign="top">
              <td width="160"><img src="../assets/images/peo3.jpg" width="20" height="20" align="absmiddle" />&nbsp;墨镜墨镜</td>
              <td width="180">
                颜色分类：<font color="#999999">粉色</font> <br />
                型号：<font color="#999999">50ml</font>
              </td>
              <td>
                大家都说不错<br />
                <font color="#999999">2015-09-24</font>
              </td>
            </tr>
            <tr valign="top">
              <td width="160"><img src="../assets/images/peo4.jpg" width="20" height="20" align="absmiddle" />&nbsp;那*****洋 <br /><font color="#999999">（匿名用户）</font></td>
              <td width="180">
                颜色分类：<font color="#999999">粉色</font> <br />
                型号：<font color="#999999">50ml</font>
              </td>
              <td>
                下次还会来买，推荐。<br />
                <font color="#999999">2015-09-24</font>
              </td>
            </tr>
          </table>

          <div class="pages">
            <a href="#" class="p_pre">上一页</a><a href="#" class="cur">1</a><a href="#">2</a><a href="#">3</a>...<a href="#">20</a><a href="#" class="p_pre">下一页</a>
          </div>
        </div>
      </div>
    </div>
    <!--Begin 弹出层-收藏成功 Begin-->
    <div id="fade" class="black_overlay"></div>
    <div id="MyDiv" class="white_content">
      <div class="white_d">
        <div class="notice_t">
          <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="../assets/images/close.gif" /></span>
        </div>
        <div class="notice_c">

          <table border="0" align="center" style="margin-top:;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td width="40"><img src="../assets/images/suc.png" /></td>
              <td>
                <span style="color:#3e3e3e; font-size:18px; font-weight:bold;">您已成功收藏该商品</span><br />
                <a href="#">查看我的关注 >></a>
              </td>
            </tr>
            <tr height="50" valign="bottom">
              <td>&nbsp;</td>
              <td><a href="#" class="b_sure">确定</a></td>
            </tr>
          </table>

        </div>
      </div>
    </div>
    <!--End 弹出层-收藏成功 End-->


    <!--Begin 弹出层-加入购物车 Begin-->
    <div id="fade1" class="black_overlay"></div>
    <div id="MyDiv1" class="white_content">
      <div class="white_d">
        <div class="notice_t">
          <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv_1('MyDiv1','fade1')"><img src="../assets/images/close.gif" /></span>
        </div>
        <div class="notice_c">

          <table border="0" align="center" style="margin-top:;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td width="40"><img src="../assets/images/suc.png" /></td>
              <td>
                <span style="color:#3e3e3e; font-size:18px; font-weight:bold;">宝贝已成功添加到购物车</span><br />
                购物车共有1种宝贝（3件） &nbsp; &nbsp; 合计：1120元
              </td>
            </tr>
            <tr height="50" valign="bottom">
              <td>&nbsp;</td>
              <td><a href="#" class="b_sure">去购物车结算</a><a href="#" class="b_buy">继续购物</a></td>
            </tr>
          </table>

        </div>
      </div>
    </div>
    <!--End 弹出层-加入购物车 End-->



    <!--Begin Footer Begin -->
    <div class="b_btm_bg bg_color">
      <div class="b_btm">
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="../assets/images/b1.png" width="62" height="62" /></td>
            <td><h2>正品保障</h2>正品行货  放心购买</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="../assets/images/b2.png" width="62" height="62" /></td>
            <td><h2>满38包邮</h2>满38包邮 免运费</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="../assets/images/b3.png" width="62" height="62" /></td>
            <td><h2>天天低价</h2>天天低价 畅选无忧</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="../assets/images/b4.png" width="62" height="62" /></td>
            <td><h2>准时送达</h2>收货时间由你做主</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="b_nav">
      <dl>
        <dt><a href="#">新手上路</a></dt>
        <dd><a href="#">售后流程</a></dd>
        <dd><a href="#">购物流程</a></dd>
        <dd><a href="#">订购方式</a></dd>
        <dd><a href="#">隐私声明</a></dd>
        <dd><a href="#">推荐分享说明</a></dd>
      </dl>
      <dl>
        <dt><a href="#">配送与支付</a></dt>
        <dd><a href="#">货到付款区域</a></dd>
        <dd><a href="#">配送支付查询</a></dd>
        <dd><a href="#">支付方式说明</a></dd>
      </dl>
      <dl>
        <dt><a href="#">会员中心</a></dt>
        <dd><a href="#">资金管理</a></dd>
        <dd><a href="#">我的收藏</a></dd>
        <dd><a href="#">我的订单</a></dd>
      </dl>
      <dl>
        <dt><a href="#">服务保证</a></dt>
        <dd><a href="#">退换货原则</a></dd>
        <dd><a href="#">售后服务保证</a></dd>
        <dd><a href="#">产品质量保证</a></dd>
      </dl>
      <dl>
        <dt><a href="#">联系我们</a></dt>
        <dd><a href="#">网站故障报告</a></dd>
        <dd><a href="#">购物咨询</a></dd>
        <dd><a href="#">投诉与建议</a></dd>
      </dl>
      <div class="b_tel_bg">
        <a href="#" class="b_sh1">新浪微博</a>
        <a href="#" class="b_sh2">腾讯微博</a>
        <p>
          服务热线：<br />
          <span>400-123-4567</span>
        </p>
      </div>
      <div class="b_er">
        <div class="b_er_c"><img src="../assets/images/er.gif" width="118" height="118" /></div>
        <img src="../assets/images/ss.png" />
      </div>
    </div>
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
        <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
      </div>
    </div>
    <!--End Footer End -->
  </div>
  </div>
</template>

<script>
    import axios from "axios";
    name:"Product"
    export default {
        data() {
            return {
                goods_name:'',
                goods:'',
                price:'',
                id:'',
                isajax:1,
                res:[]
            }
        },
        methods:{
            getradio(){
                // console.log(this.res.data)
                 var _this=this
                    $.each(this.goods,function (key,val) {
                        console.log($("input[name='"+key+"']:checked").val())
                        // console.log(val)
                        //当input标签里面内容单个被选中时将提示undefined,只有所有标签里的内容全部被选择时才会出发ajax将所获取的值传过去
                        if($("input[name='"+key+"']:checked").val()==undefined){
                            _this.isajax=0
                            console.log('不作为')
                        }
                    })
                if(this.isajax==1){
                    //当都被选择中时去除标签中的内容并循环进一个新的数组中
                    $.each(this.goods,function (keys,value) {
                        _this.id=_this.id+"-"+$("input[name='"+keys+"']:checked").val()
                    })
                    //获取价格
                    axios.post(this.url+'/product',{
                        id:_this.id,
                        goods_id:this.$route.query.goods_id,
                    })
                        .then(res =>{
                            _this.price=res.data
                            console.log(res);

                        })
                    _this.id=''
                }
             this.isajax=1
            },
    cat(){
        var _this=this
        var attr_name=''
        $.each(this.goods,function (keys,value) {
            console.log($("input[name='"+keys+"']:checked").attr("id"))
            _this.names=$("input[name='"+keys+"']:checked").attr("id"),
                //获取name=k的input框中id的属性值
                attr_name=attr_name+' '+keys+":"+_this.names
            //将属性与属性细分绑在一起用：隔开
        }),
        console.log(attr_name)
        axios.post(this.url+'/auth/insert',{
            token:localStorage.getItem("token"),
            goodsp_id:this.price[0].id,
            num:document.getElementById('num').value,
            details:attr_name
        })
            .then(res=>{
                console.log(res)
            });
        }
    },
        mounted() {
            axios.post(this.url+'/goods',{
                goods_id:this.$route.query.goods_id
            })
            .then(res=>{
                // console.log(res)
                this.goods =res.data.data
                this.goods_name =res.data.name
            });
        },
    }
</script>

<style scoped>

</style>
