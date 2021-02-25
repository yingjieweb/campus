<template>
  <div class="container">
    <img class="avatar" src="@/assets/images/headpic_male.png">
    <div class="name">{{$store.state.currentUser.name}}</div>
    <div class="trend">
      <div class="send">
        <span>已投递</span>
        <span>16</span>
      </div>
      <div class="collect">
        <span>收藏夹</span>
        <span>0</span>
      </div>
    </div>
    <div class="study">
      <span class="message">快来提升你的求职能力~</span>
      <div class="exercise">
        <div class="exercise-item" v-for="item in studyLinks" :key="item.link"  @click="jumpLink(item.link)">
          <img :src="item.avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: "ProfileInfo",
    data() {
      return {
        studyLinks: [
          {avatar: require('@/assets/images/niuke_logo.png'), link: 'https://www.nowcoder.com/'},
          {avatar: require('@/assets/images/leetcode_logo.png'), link: 'https://leetcode-cn.com/'},
          {avatar: require('@/assets/images/baixiong_logo.png'), link: 'https://icebear.me/'}
        ]
      }
    },
    methods: {
      jumpLink(link) {
        window.open(link)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    padding: 28px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      width: 90px;
    }
    .name {
      margin-top: 12px;
      font-size: 14px;
      color: #333;
      font-weight: 600;
    }
    .trend {
      width: 120px;
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      color: #999;

      .send, .collect {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 24px;
      }
    }
    .study {
      width: calc(100% - 60px);
      height: 82px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed #e0e0e0;
      text-align: center;

      .message {color: #666;}
      .exercise {
        display: flex;
        justify-content: space-evenly;
        margin-top: 15px;

        .exercise-item {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(241, 243, 244, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          img {width: 24px;}
        }
      }
    }
  }
</style>
