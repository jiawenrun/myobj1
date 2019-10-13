<template>
  <div>
    <div class="tob-bar">
      <img src="https://image.zhihuishu.com/zhs/able-commons/demo/201904/c738f6c722d5440e81936eaea808571e.png" class="logo" />
      <div class="input-search">
        <input class="searchKey1" type="text" v-model="tosearch" placeholder="搜索课程、视频、老师和学校"/>
        <el-button class="search-btn" icon="el-icon-search" circle @click="fineMore"></el-button>
      </div>
      <div class="right-route">
        <div class="apply" @click="dialogFormVisible = true">申请加入</div>
        <el-dialog title="申请加入专业共享联盟" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="学校名称" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所在学院" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="职务" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注说明" :label-width="formLabelWidth">
              <el-input id="myform-input" v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <div><router-link to="/Login">登录</router-link></div>
        <div><router-link to="/Reg">注册</router-link></div>
      </div>
    </div>
    <div style="height:60px"></div>
    <div class="banner1">
      <div class="search-box"  @onclick="fineMore">
        <input type="text" id="my-elinput"  placeholder="搜索课程、视频、老师和学校"  v-model="tosearch" @keyup.enter="fineMore">
        <!-- <el-input id="my-elinput"  placeholder="搜索课程、视频、老师和学校" readonly="false" @onclick="fineMore"></el-input> -->
        <el-button id="search-btn1" icon="el-icon-search"   @click.native="fineMore">搜索</el-button>
      </div>
    </div>
    <!-- 国家金课 -->
    <div class="goldclass">
      <div class="title">
        <div  class="title-span">
          <img src="https://image.zhihuishu.com/zhs/able-commons/demo/201905/8499e1efdc30483b8d9e7e167dc9085f.png">
          <span>国家金课</span>
        </div>
        <p>教育部授权认证精品课程，质量有保障</p>
      </div>
      <!-- 选项卡 -->
      <div class="goldclass-bar">
        <el-tabs class="mybar" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="医学" name="first">
            <div class="items">
              <div class="items-left firstitems" @onclick="search-items">
                <div class="items-left-dec">
                  <p class="teacher-name">辛宝</p>
                  <p class="teacher-tags">副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。</p>
                  <p class="teacher-detail">辛宝，陕西中医药大学副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。陕西省重点扶持学科中</p>
                  <p class="about-course">相关课程&ensp;&gt;</p>
                </div>
              </div>
              <div class="items-right">
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201512/4ff78540a47c499493229610c25c90d0_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201709/eea5df678b17479f941efcccb4c9f0a5_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/course/201703/209682e58e8140ada4cbe57ecb47f4e8_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201701/c80a6f14ed9940639ba44044a157d3e7_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201708/12fde2164f3648e7878e47c636569632_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201612/1e50aebc03a74ad286f832ef8275e936_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="文学" name="second">
            <div class="items">
              <div class="items-left seconditems">
                <div class="items-left-dec">
                  <p class="teacher-name">王红</p>
                  <p class="teacher-tags">四川大学教授</p>
                  <p class="teacher-detail">四川大学文学与新闻学院教授，硕士生导师。
主要获奖有：
1、宝钢优秀教师奖，2006年； 
2、华为优秀教师奖，2005年； 
3、《中国文学》，教育部“全国普通高校优秀教材”二等奖（谢谦、刘黎明、王红等），2002 年；
4、《中国诗歌艺术》，国家级精品课，2005年；四川省优秀教学成果二等奖（王红，谢谦）， 2006 年；
5、四川大学教学名师，2009年；
6、《中国诗歌艺术》慕课，首批“国家精品在线开放课程”，2107年。</p>
                  <p class="about-course">相关课程&ensp;&gt;</p>
                </div>
              </div>
              <div class="items-right">
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201812/4083645d3ab04030a44c49d28ec023b8_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">中国诗歌艺术</p>
                    <div class="info-university">
                      <p>四川大学</p>
                      <p>王红</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201609/c4a50bdc399e41498a00982eea92c0a0_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201601/682b1538e6e741c4896c2feeaa81ba58_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201604/6e0cfb6ad0f64e3194a712e1b0bdfa18_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/course/201703/2f41be6b37fc4aea8c59aab98c2989bc_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201609/88416e507dff4e13a9a5b00c30868c3e_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="理学" name="third">
            <div class="items">
              <div class="items-left thirditems">
                <div class="items-left-dec">
                  <p class="teacher-name">关静</p>
                  <p class="teacher-tags">天津大学教授</p>
                  <p class="teacher-detail">研究方向：数理统计，金融数学。
天津市统计学会常务理事.
获得天津市第八届青年教师教学基本功大赛一等奖，天津市师德先进个人,天津大学第六届青年教师讲课大赛一等奖等。
曾以博士后、访问学者身份到加拿大曼尼托巴大学统计系访问交流。
作为项目负责人完成国家级、省部级项目各一项，天津大学教改项目7项，自主创新项目1项，引智项目2项等，在国内外重要期刊发表论文二十余篇，出版著作1部，翻译著作一部。目前为天津大学数学学院概率论与数理统计课程负责人，主要讲授概率论与数理统计、应用统计学、多元统计分析以及高等数理统计等本科生和研究生课程。</p>
                  <p class="about-course">相关课程&ensp;&gt;</p>
                </div>
              </div>
              <div class="items-right">
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/course/201703/2d16169f21c14decbae6429acf6f84f5_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201709/b78ff05577e346f6ad1ed2a482ff8f2c_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201707/862e4cf561e346179b8ca5e47edd15ba_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201712/5b365633f2be43c6b51b2b903e73121d_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201711/3504f4c27cab490dabd21ad27920d284_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201705/0f2992eec7ba42ad92c414ec7d7de52e_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="管理学" name="fourth">
            <div class="items">
              <div class="items-left fourthitems">
                <div class="items-left-dec">
                  <p class="teacher-name">辛宝</p>
                  <p class="teacher-tags">副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。</p>
                  <p class="teacher-detail">辛宝，陕西中医药大学副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。陕西省重点扶持学科中</p>
                  <p class="about-course">相关课程&ensp;&gt;</p>
                </div>
              </div>
              <div class="items-right">
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201611/ed0eaa9a291b4d82ba5b78268a6ce1c9_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201707/60a06eb5e38d4784953027a47deeb348_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201603/23a4b3b613204f88a9cf90eac58f895a_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/course/201704/7667f4609e504748b070450d4062c933_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201708/5cabafa4c3fa448aaa86bb237c1bd85c_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201608/885e2e035b3b4d12ad2d994534d40c16_s1.png"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="工学" name="five"><div class="items">
              <div class="items-left fifthitems">
                <div class="items-left-dec">
                  <p class="teacher-name">辛宝</p>
                  <p class="teacher-tags">副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。</p>
                  <p class="teacher-detail">辛宝，陕西中医药大学副教授，执业中医师，国家一级营养师，临床营养师，硕士生导师。陕西省重点扶持学科中</p>
                  <p class="about-course">相关课程&ensp;&gt;</p>
                </div>
              </div>
              <div class="items-right">
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201609/2a47df2e91ba4dcdbfc3829f7a86b92a_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201702/9c467736f52e4149a80aa95df958f5e1_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201706/91da8c2115e44ffbbf4e67aff22abdaa_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/COURSE/201702/1487cb96352e4b03a532b18cd9bfb67a_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/testzhs/createcourse/course/201704/b4caa311aa524226aa2e0348cbe48eff_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
                <div class="items-right-info myinfo">
                  <div class="imgs"><img src="https://image.zhihuishu.com/zhs/createcourse/course/201710/657748c1deeb439693e193594ffb5ec9_s1.jpg"></div>
                  <div class="items-right-info-div">
                    <p class="info-title">生命科学导论（上海交通大学版）</p>
                    <div class="info-university">
                      <p>上海交通大学</p>
                      <p>林志新,陈峰,曹阳,柳向龙,张霞,马伟</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </el-tab-pane>
          <el-button id="find-more" type="info"  @onclick="fineMore">
            <router-link to="/Findmore">发现更多</router-link>
            </el-button>
      </el-tabs>
      </div>
    </div>
    <!-- 热门学科 -->
    <div class="hot-subject">
      <div class="title">
        <div  class="title-span">
          <span>热门学科</span>
        </div>
        <p>已为110个学科专业提供优质资源</p>
      </div>
      <div class="subject-items">
        <img src="http://localhost:81/1569348152403_3984079027.png">
        <!-- 1569348152403_3984079027 -->
        <!-- <div>计算机</div>
        <div>数学</div>
        <div>电子信息</div>
        <div>基础医学</div>
        <div>外语</div> -->
      </div>
      <el-button id="find-more" type="info"  @onclick="fineMore">发现更多</el-button>
    </div>
    <!-- 课程上新 -->
    <div class="course-new">
      <div class="title">
        <div  class="title-span">
          <span style="color:#fff">课程上新</span>
        </div>
        <p style="color:#fff">内容持续更新，课程与时俱进</p>
      </div>
      <div class="subject-items" id="items-bg">
        <div class="subject-items-div">
          <p>2016年</p>
          <span>新增</span>
          <p>274门课</p>          
        </div>
        <div class="subject-items-div">
          <p>2017年</p>
          <span>新增</span>
          <p>865门课</p> 
        </div>
        <div class="subject-items-div">
          <p>2018年</p>
          <span>新增</span>
          <p>1605门课</p> 
        </div>
        <div class="subject-items-div">
          <p>2019年</p>
          <span>新增</span>
          <p>617门课</p> 
        </div>
      </div>
    </div>

    <!-- 为什么选我们 -->
    <div class="chooseUs">
      <div class="title">
        <div  class="title-span">
          <span>为什么选我们</span>
        </div>
        <p>只做优质内容，为你的教学助力</p>
      </div>
      <div class="joinUs-items">
        <div class="joinUs-div">
          <img src="https://image.zhihuishu.com/zhs_yanfa_150820/able-commons/demo/201904/12c26236c2da4b62853c16fd215606d0.png">
          <span>150+</span>
          <p>国家金课</p>
        </div>
        <div class="joinUs-div">
          <span>4000+</span>
          <p>最好的专业课程</p>
        </div>
        <div class="joinUs-div">
          <span>10+</span>
          <p>日均新增课程</p>
        </div>
        <div class="joinUs-div">
          <span>1000+</span>
          <p>优质名校</p>
        </div>
        <div class="joinUs-div">
          <span>40000+</span>
          <p>优秀名师</p>
        </div>
      </div>
      <div class="joinUs">申请加入</div>
    </div>

    <!-- 巅峰名校 -->
    <div class="pop-university">
      <div class="title">
        <div  class="title-span">
          <span>巅峰名校</span>
        </div>
        <p>零距离接触全国名校名师，助力你成长</p>
      </div>
      <img src="https://image.zhihuishu.com/zhs_yanfa_150820/able-commons/demo/201904/b3a7bc5d095840b78976e00a97428761.jpg">
    </div>
    <div class="footer">Copyright © 2003-2018 Zhihuishu. All rights reserved.沪ICP备10007183号-5</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tosearch:'',
      input: "",
      activeName: 'first',
      subject:[],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          
        },
        formLabelWidth: '120px'
    };
  },
 watch:{
   tosearch:function(a,b){
     this.tosearch=a
   }
 },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      fineMore(event){
        this.$router.push({path:"/SearchBar?key="+this.tosearch})
      },
      searchitems(event){
        console.log(event);
      },
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
                
        });
      }
    },
     created() {
    this.axios.get("/subject/subject1").then(res => {
      this.subject = res.data;
    }).catch(function(err){
      console.log(err);
    })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, SF Pro SC, SF Pro Text,
    Helvetica Neue, Helvetica, PingFang SC, Segoe UI, Roboto, Hiragino Sans GB,
    arial, Source Han Sans CN, sans-serif;
}
.tob-bar {
  width: 100%;
  height: 60px;
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 15px 10px -15px #777777;
  background-color: #fff;
  position: fixed;
  z-index: 99;
}
.tob-bar > .logo {
  width: 275px;
  height: 30px;
}
.input-search {
  display: flex;
}
.input-search > .searchKey1 {
  width: 245px;
  height: 30px;
  border: 1px solid #f5f5f5;
  border-radius: 16px;
  background-color: #f5f5f5;
  padding-left: 15px;
  font-weight: 400;
  outline: none;
}
.input-search > .search-btn {
  width: 30px;
  height: 30px;
  background-color: #ffc726;
  margin-left: 3px;
  border: 1px solid #ffc726;
  position: relative;
}
.el-icon-search:before {
  position: absolute;
  top: 8px;
  left: 8px;
  font-weight: bolder;
}

.tob-bar > .right-route {
  width: 242px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.right-route a {
  color: #333;
}
.right-route > .apply {
  height: 30px;
  padding: 0 10px 0 30px;
  background: #282828 url("https://image.zhihuishu.com/zhs/able-commons/demo/201904/1a5709f544de45a7883ab0d125322501.png") no-repeat 8px center;
  border-radius: 16px;
  color: #fff;
  line-height: 30px;
  position: relative;
  cursor: pointer;
}
.apply::before {
  content: "";
  width: 22px;
  height: 13px;
  display: block;
  background: url("https://image.zhihuishu.com/zhs/able-commons/demo/201904/895f914026f141de8932422d54e9bb73.png") no-repeat;
  position: absolute;
  right: -8px;
  top: -8px;
}
#my-elinput {
  width: 640px;
  height: 50px;
  padding-left: 15px;
}

.banner1 {
  width: 100%;
  height: 360px;
  padding-top: 250px;
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/1725d70637d44c0b82a73ea2156606d2.png");
  background-position: center center;
}

.search-box {
  width: 780px;
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.el-input__inner {
  /* width: 600px !important;
  height: 50px !important;
  border-radius: 3px !important; */
  width: 600px;
  height: 50px;
  border-radius: 3px;
  outline: none;
  box-shadow: 0px 15px 10px -15px #777777;

}
#search-btn1 {
  border-radius: 3px;
  width: 120px;
  height: 50px;
  position: relative;
  font-size: 18px;
  text-align: right;
  /* padding-right: 22px !important; */
  padding-right: 22px;
  border: 0;
  box-shadow: 0px 15px 10px -15px #777777;

}
#search-btn1 > .el-icon-search:before {
  position: absolute;
  top: 15px;
  left: 19px;
  font-weight: bolder;
  font-size: 20px;
  color: #333;
  margin-right: 3px;
}
.goldclass {
  width: 100%;
  margin-top: 40px;
}
.goldclass > .title,
.hot-subject > .title,
.course-new > .title,
.chooseUs> .title,
.pop-university> .title {
  margin: 0 auto;
  text-align: center;
}
.title-span > img {
  vertical-align: middle;
  margin-top: -12px;
  margin-right: 10px;
}
.title > .title-span > span{
  display: inline-block;
  font-size: 32px; 
  color: #282828;
}
.title > p {
    padding-top: 15px;
    font-size: 16px;
    color: #9F9F9F;
    text-align: center;
    line-height: 26px;
}
.goldclass-bar {
  width: 100%;
  padding-top: 40px;
  background-color: #fff;
}
.goldclass-bar > .mybar {
  width: 100%;
  margin: 0 auto;
  background-color: #F8F8F8;
}
.el-tabs__header {
  margin-bottom: 0 !important;
}
.el-tabs__nav-scroll {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
}
.el-tabs__item {
    width: 192px;
    text-align: center;
    padding: 0;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    color: #282828;
    position: relative;
}
.el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0 !important;
    background-color: #fff !important;    
    z-index: 1;
}
#tab-first {
  height: 130px;
  line-height: 180px;
}
#tab-first::before,
#tab-second::before,
#tab-third::before,
#tab-fourth::before,
#tab-five::before {
  content: '';
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: -18px;
  left: 45px;
}
#tab-second::before,
#tab-third::before,
#tab-fourth::before,
#tab-five::before {
  position: absolute;
  top: -86px;
  left: 55px;
}
#tab-first::before {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/768ef3234a2b428d9f1f61e5197ed5c0.png");
}
#tab-second::before {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/46f0a3cbc5b541b592eacab0fc0e76a6.png");
}
#tab-third::before {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/0fe27c852508427eaede45b4755b072d.png");
}
#tab-fourth::before {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/b2e9748ae2694917872f6689c995a562.png");
}
#tab-five::before {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/3b118a3f3bcb4d1a9115da0cd3a5e987.png");
}
#tab-first:hover,
#tab-second:hover,
#tab-third:hover,
#tab-fourth:hover,
#tab-five:hover {
    color: #282828;
}
.el-tabs__item.is-active {
   color: #282828 !important;
}
.el-tabs__active-bar {
  width: 30px !important;
  height: 3px !important;
  background: #282828 !important; 
  transition: all ease-in .1s !important;
  position: absolute !important;
  left: 70px !important;
  bottom: 0 !important;
  /* width: 30px;
  height: 3px;
  background: #282828; 
  transition: all ease-in .1s;
  position: absolute;
  left: 70px;
  bottom: 0; */
}
.el-tabs__content {
  width: 960px;
  /* height: 646px !important; */
  height: 646px;
  padding-top: 30px;
  margin: 0 auto;
}
.items,.items2 {
  width: 100%;
  height: 476px;
  display: flex;
  justify-content: space-between;
}
.items > .items-left {
  width: 235px;
  height: 476px;
}
.items > .items-left{
  background-size: 100% 100%;
  background-position: center center;
  position: relative;
}
.firstitems{
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/2dc482d8a4b6467d98770edb900b9937.jpg");
}
.seconditems {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/6d797d9016bd41c88741a6fe1f18e147.jpg");
}
.thirditems {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/a94def5f77a44faf946b5177248b9f59.jpg");
}
.fourthitems {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/0f4d7a526ab943529acfbd7f5c0b71c9.jpg");
}
.fifthitems {
  background-image: url("https://image.zhihuishu.com/zhs/able-commons/demo/201905/fae8110d3a96457c972c243d63e68c4e.jpg");
}
.items > .items-left::before{
  content: '行业名师';
  display: block;
  width: 108px;
  height: 36px;
  background: url("https://image.zhihuishu.com/zhs/able-commons/demo/201904/517c15c4817945da8321b19b505dd5d7.png") no-repeat;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
  line-height: 36px;
}
.items-left-dec{
  width: 235px;
  height: 250px;
  padding: 0 15px;
  position: absolute;
  left: 0;
  bottom: -30px;
  color: #fff;
}
.teacher-name {
  line-height: 38px;
  font-size: 24px;
}
.teacher-tags {
  height: 20px;
  overflow-wrap: break-word;
  overflow: hidden;
  padding-top: 5px;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 20px;
}
.teacher-detail {
  height: 80px;
  padding-top: 20px;
  font-size: 12px;
  color: #FFFFFF;
  overflow-wrap: break-word;
  overflow: hidden;
  line-height: 20px;
}
.about-course {
  margin-top: 10px;
  padding-right: 15px;
  font-size: 14px;
  color: #FFC726;
  line-height: 24px;
}
.items > .items-right,
.items2 > .items-right {
  width: 714px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
}
.items-right-info,
.items-left {
  cursor: pointer;
}
.items-right-info {
  width: 230px;
  height: 232px;
  background-color: #ffffff;
}
.items-right-info > .imgs {
  height: 129px;
  width: 230px; 
  overflow: hidden;

}
.items-right-info> .imgs > img {
  height: 129px;
  width: 230px;
}
.items-right-info:hover > .imgs > img{
  transform: scale(1.2);
  transition: all .3;
}
.items-right-info-div {
  padding: 0px 15px;
  width: 230px;
}
.info-title {
  height: 26px;
  font-size: 16px;
  color: #282828;
  line-height: 26px;
  padding-top: 5px;
  overflow-wrap: break-word;
  overflow: hidden;
}
.info-university {
  font-size: 12px;
  color: #9F9F9F;
  line-height: 20px;
  margin-top: 10px;
}
.info-university > p:last-child {
  margin-top: 15px;
}
.myinfo {
  margin-bottom: -11px;
}
#find-more {
  margin: 40px auto;
  width: 200px;
  height: 50px;
  cursor: pointer;
  display: block;
  text-align: center;
  background-color: #ffffff;
  border-radius: 2px;
  font-size: 16px;
  color: #282828;
  border: 0;
}
#find-more:hover{
  background-color: #ededed;
}
.hot-subject {
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 15px;
}
.subject-items {
  width: 960px;
  height: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}
.subject-items-div {
  width: 140px;
  height: 140px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  padding: 30px 0;
  line-height: 26px;
}
.subject-items-div > p:first-child{
  font-size: 18px;
  color:#282828;
}
.subject-items-div > span {
    font-size: 14px;
    color: #9F9F9F;
}
.subject-items-div > p:last-child{
  font-size: 14px;
  color: #9F9F9F;
}
/* .el-button--info {
  background-color: #f5f5f5 !important;
}
.el-button--info:hover {
  background-color: #ededed !important;
} */
.course-new {
  height: 455px;
  padding-top: 40px;
  padding-bottom: 15px;
  background-image: url("https://image.g2s.cn/zhs_yanfa_150820/ablecommons/demo/201904/91e1e00ff04e425fbd07e750400cd881.png");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #FBCC42;
}

.chooseUs {
  width: 100%;
  background-color: #fff;
  height: 353px;
  padding: 40px 0;
}
.joinUs-items {
  width: 960px;
  padding-top: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.joinUs-div {
  width: 140px;
  height: 109px;
  text-align: center;
}
.joinUs-div > span{
  font-size: 24px;
  color: #282828;
  line-height: 40px;
}
.joinUs-div > p {
  padding-top: 10px;
  font-size: 14px;
  color: #9F9F9F;
  line-height: 24px;
}
.joinUs{
  width: 300px;
  height: 56px;
  line-height: 56px;
  margin: 0px auto;
  display: block;
  cursor: pointer;
  background: #FBCC42;
  border-radius: 2px;
  font-size: 18px;
  color: #1E1E1E;
  text-align: center;
}
.joinUs:hover{
  background-color: #FEAF00;
}
.pop-university  {
  height: 450px;
  padding: 50px 0;
  text-align: center;
}
.pop-university > img {
  padding: 40px 0;
}
.footer {
  width: 100%;
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
  color: #9F9F9F;
  line-height: 20px;
  background-color: #fff;
}

#myform-input {
  width: 300px;
  box-shadow: #ffffff;
}


</style>
