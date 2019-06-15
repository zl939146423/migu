<template>
    <div class="actor">
        <!-- 渐变部分 -->
      <div class="prc-wrap">
          <router-link to="/home"><i class="icon fa fa-arrow-left"></i></router-link>
          <div class='pull-left'>
              <img src="http://img2.imgtn.bdimg.com/it/u=1011671184,2207801498&fm=26&gp=0.jpg" alt="">
          </div>
          <div class="pull-right">
              <p class="font-18">赵小丁</p>
              <p class="font-13">Xiaoding Zhao</p>
              <p class="font-13">导演|制片</p>
            
          </div>
      </div>
      <div class="text-block">
          <p>导演|制片</p>
          <p>性别：男</p>
          <p>生日：(未知)</p>
          <p>简介：赵小丁，北京电影学院</p>
      </div>
       <router-link class="title" tag="div" to="">
            <span>作品</span>
            <i class="fa fa-chevron-right"></i>
        </router-link>
        <div class="movie">
            <img src="http://movie.miguvideo.com/publish/poms/image/5500/088/773/201809071031_98948_HSJ1080V.jpg" alt="">
            <p>三生三世十里</p>
            <p class="flower">桃花</p>
        </div>
         <div class="people" >
            <span>相关影人</span>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div class="movier">
            <div>
               <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559926098001&di=9fc0b4145120a80fc44f1d4ad25bb50c&imgtype=0&src=http%3A%2F%2Fcdn2.ettoday.net%2Fimages%2F167%2Fd167822.jpg" alt="">
               <p>刘亦菲</p>
            </div>
            <div>
                <img src="http://movie.miguvideo.com//publish/meizi/star/images/0000/009/726/star_src_695694_450_600.jpg" alt="">
                <p>杨洋</p>
            </div>
            <div>
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2610461611,926396256&fm=15&gp=0.jpg" alt="">
                <p>严一宽</p>
            </div>
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559926206845&di=d649dfd80906d3e8d6e649cb925d61bf&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2Fy5MRv0ukrkIv3D0Z5KeINI7Dmf1NCzZ1AsfdeiycPN00n1538871710272.jpeg" alt="">
                <p>罗晋</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .prc-wrap{
        width:100%;
        height:2rem;
        background: -webkit-gradient(linear, 0 0, 100% 0, from(#574525), to(#BA914C));
        .icon{
            display: block;
            width: 30px;
            height: 30px;
            border:1px solid #ccc;
            background:rgba(199,190,173,0.5);
            padding:0 5px;
            border-radius: 50%;
            font-size:20px;
            line-height: 30px;
            color:#fff;
        }
        .pull-left{
            float: left;
            margin-left:20px;
            margin-top:10px;
            img{
                display: block;
                width:100px;
                height:130px;
            }
        }
        .pull-right{
            float:left;
            margin-left: 20px;
            margin-top:20px;
            p{
                color:#fff;
            }
            .font-18{
                font-size: 18px !important;
            }
            .font-13{
            font-size: 13px !important;
            }
        }
    }
    .text-block{
        height:2rem;
        background: #fff;
        padding:5px 5px;

    }
     .title{
       display:flex;
       background:#fff;
       margin:6px 0;
        padding-bottom:6px;
        justify-content: space-between;
        span{
             margin-top:10px;
            padding-left: 8px;
            font-size: 16px !important;
            height:25px;
            line-height: 25px;
            color: #666;
            border-left:3px solid red
        }
        i{
            margin-top:15px;
            margin-right:10px;
        }
    }
    .movie{
        height:1.6rem;
        border-top:1px solid #ccc;
        background:#fff;
        img{
            display:block;
            width:90px;
            height:120px;
        }
        .flower{
            margin-left:30px;
        }
    }
    .people{
       display:flex;
       background:#fff;
       margin-top:6px;
       padding-bottom:6px;
        justify-content: space-between;
        
        span{
             margin-top:10px;
            padding-left: 8px;
            font-size: 16px !important;
            height:25px;
            line-height: 25px;
            color: #666;
            border-left:3px solid red
        }
        i{
            margin-top:15px;
            margin-right:10px;
        }
    }
    .movier{
         display:flex;
        height:1.35rem;
        background:#fff;
        margin-bottom:70px;
        div{
          width:25%;
          img{
            display:block;
            width:100%;
            height:1.1rem;
        }
        p{
            color: #1a1a1a;
            font-size: 13px !important;
            text-align: center;
            padding: 5px 0;
        }
        }
        
    }
</style>
